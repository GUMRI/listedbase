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
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            {
              sourceTag: "platform:isomorphic",
              onlyDependOnLibsWithTags: ["platform:isomorphic"]
            },
            {
              sourceTag: "platform:browser",
              onlyDependOnLibsWithTags: ["platform:isomorphic", "platform:browser"]
            },
            {
              sourceTag: "platform:node",
              onlyDependOnLibsWithTags: ["platform:isomorphic", "platform:node"]
            }
          ]
        }
      ]
    }
  }
);
