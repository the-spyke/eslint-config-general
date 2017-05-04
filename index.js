module.exports = {
    "extends": [
        "eslint:recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "modules": true
        },
        "ecmaVersion": 2017
    },
    "rules": {
        "array-bracket-spacing": "error",
        "arrow-spacing": "error",
        "block-scoped-var": "error",
        "block-spacing": "error",
        "brace-style": [
            "error",
            "1tbs",
            { "allowSingleLine": true }
        ],
        "capitalized-comments": [
            "error",
            "always",
            { "ignoreConsecutiveComments": true }
        ],
        "comma-spacing": "error",
        "comma-style": "error",
        "consistent-this": ["error", "me"],
        "curly": "error",
        "eol-last": "error",
        "func-call-spacing": "error",
        "generator-star-spacing": ["error", "after"],
        "indent": [
            "warn",
            4,
            {
                "SwitchCase": 1,
                "MemberExpression": 1,
                "CallExpression": { "arguments": 1 }
            }
        ],
        "key-spacing": "error",
        "keyword-spacing": "error",
        "linebreak-style": "error",
        "lines-around-directive": "error",
        "new-parens": "error",
        "newline-before-return": "error",
        "no-caller": "error",
        "no-compare-neg-zero": "error",
        "no-empty-function": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-global-assign": "error",
        "no-implied-eval": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-trailing-spaces": "error",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-var": "warn",
        "no-whitespace-before-property": "error",
        "no-with": "error",
        "object-curly-spacing": [
            "error",
            "always",
            {
                "arraysInObjects": true,
                "objectsInObjects": true
            }
        ],
        "operator-linebreak": "error",
        "quotes": "error",
        "radix": "error",
        "require-await": "error",
        "semi": "error",
        "semi-spacing": "error",
        "space-before-blocks": "error",
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": "error",
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": "error",
        "strict": "error",
        "valid-jsdoc": "warn",
        "vars-on-top": "warn",
        "wrap-iife": ["error", "inside"],
        "yield-star-spacing": ["error", "after"]
    }
};
