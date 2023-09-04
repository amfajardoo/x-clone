import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "tumd87",

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "src/**/*.cy.ts",
  },
});
