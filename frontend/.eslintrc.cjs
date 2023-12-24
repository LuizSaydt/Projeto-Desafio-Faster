module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: "latest"
  },

  extends: ["@nuxt/eslint-config"],

  rules: {
    "no-unused-vars": 1,
    "comma-dangle": [
      "error",
      "never"
    ],
    quotes: [
      "error",
      "double"
    ],
    semi: [
      "error",
      "always"
    ],
    indent: [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "vue/v-on-event-hyphenation": 0,
    "vue/attribute-hyphenation": 0,
    "vue/multi-word-component-names": 0,
    "no-multi-spaces": "error",
    "no-trailing-spaces": "error",
    "space-before-function-paren": [
      "error"
    ],
    "no-undef": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "@typescript-eslint/no-unused-vars": [
      "off"
    ],
    "@typescript-eslint/no-explicit-any": [
      "off"
    ]
  }
};