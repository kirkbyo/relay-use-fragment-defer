// Used by the VSCode plugin GraphQL to support autocomplete etc.
// relay.config.js is the config for the actual relay compiler

module.exports = {
  projects: {
    "example-app": {
      schema: ["./schema/schema.graphql"],
      documents: "src/**/*.{ts,tsx}",
    },
  },
};
