import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      "@nx": (await import("@nx/eslint-plugin")).default,
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
