module.exports = {
  "env": {
    "node": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "overrides": [
    {
      "files": ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      "plugins": ["jest"],
      "env": {
        "jest/globals": true
      },
      "rules": {
        "no-undef": "off"
      }
    },
    {
      "files": ["**/*.jsx"],
      "parserOptions": {
        "ecmaFeatures": {
          "jsx": true
        }
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {}
}