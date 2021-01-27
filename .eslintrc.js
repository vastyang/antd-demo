module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier", "plugin:prettier/recommended"],
  rules: {
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": "off",
    "generator-star-spacing": "off",
    "no-mixed-operators": 0,
    "vue/no-unused-components": 0,
    "vue/no-use-v-if-with-v-for": 0,
    "vue/no-parsing-error": 0
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
