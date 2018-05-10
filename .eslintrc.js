process.chdir(__dirname);

module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "import/no-unresolved": "off",
    "import/extensions": "off",
  }
};
