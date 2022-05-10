import type { ExecutionPatchResult } from "graphql";
import { meros } from "meros/browser";
import type { FetchFunction } from "relay-runtime";
import {
  Environment,
  Network,
  Observable,
  RecordSource,
  Store,
} from "relay-runtime";

const fetchQuery: FetchFunction = (params, variables, _cacheConfig) => {
  return Observable.create((sink) => {
    (async () => {
      const response = await fetch("/graphql", {
        body: JSON.stringify({
          query: params.text,
          variables,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const parts = await meros<ExecutionPatchResult>(response);

      if (isAsyncIterable(parts)) {
        for await (const part of parts) {
          if (!part.json) {
            sink.error(new Error("Failed to parse part as json."));
            break;
          }
          sink.next(part.body as any);
        }
      } else {
        sink.next(await parts.json());
      }
      sink.complete();
    })();
  });
};

const network = Network.create(fetchQuery);

export const getEnvironment = (defaultRecords = {}) => {
  const source = new RecordSource(defaultRecords);
  const store = new Store(source);

  return new Environment({
    network,
    store,
  });
};

function isAsyncIterable(input: unknown): input is AsyncIterable<unknown> {
  return (
    typeof input === "object" &&
    input !== null &&
    // Some browsers still don't have Symbol.asyncIterator implemented (iOS Safari)
    // That means every custom AsyncIterable must be built using a AsyncGeneratorFunction
    // (async function * () {})
    ((input as any)[Symbol.toStringTag] === "AsyncGenerator" ||
      Symbol.asyncIterator in input)
  );
}
