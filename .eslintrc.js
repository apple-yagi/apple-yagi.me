/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "xo",
    "prettier",
  ],
  rules: {
    "no-empty-static-block": "off",
    "no-new-native-nonconstructor": "off",
    "capitalized-comments": "off",
    "no-undef": "off",
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "parent",
          "sibling",
          "index",
          "unknown",
        ],
        warnOnUnassignedImports: false,
      },
    ],
  },
};
