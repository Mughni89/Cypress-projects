import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import * as addCucumberPreprocessorPlugin from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/e2e.ts", // pastikan file ini ada
    // @ts-ignore
    cucumber: {
      stepDefinitions: ["cypress/support/step_definitions/**/*.ts"]
    },
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin.addCucumberPreprocessorPlugin(on, config 
        // optional step: if you have custom path
        // stepDefinitions: "cypress/support/stepDefinitions"
      );

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },

  // env: {
  //   mentoringURL: "https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring",
  // },
});
