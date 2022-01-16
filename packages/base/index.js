module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ["standard", "plugin:import/recommended"],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] }
    }
  },
};
