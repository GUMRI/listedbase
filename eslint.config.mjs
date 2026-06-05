import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import nxPlugin from "@nx/eslint-plugin";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      "@nx": nxPlugin,
    },
    rules: {
      "@nx/enforce-module-boundaries": [
        "error",
        {
          "enforceBuildableLibDependency": true,
          "allow": [],
          "depConstraints": [
            {
              "sourceTag": "env:browser",
              "onlyDependOnLibsWithTags": ["env:browser", "env:universal"]
            },
            {
              "sourceTag": "env:node",
              "onlyDependOnLibsWithTags": ["env:node", "env:universal"]
            },
            {
              "sourceTag": "env:universal",
              "onlyDependOnLibsWithTags": ["env:universal"]
            },
            {
              "sourceTag": "scope:driver",
              "onlyDependOnLibsWithTags": ["scope:driver"]
            },
            {
              "sourceTag": "scope:consumer",
              "onlyDependOnLibsWithTags": ["scope:consumer", "scope:driver"]
            }
          ]
        }
      ]
    }
  }
);
