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
        "arrow-spacing": "error",
        "block-scoped-var": "error",
        "block-spacing": "error",
        "brace-style": [
            "error",
            "1tbs",
            { "allowSingleLine": true }
        ],
        "comma-spacing": "error",
        "comma-style": "error",
        "consistent-this": ["error", "me"],
        "curly": "error",
        "eol-last": "error",
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
        "operator-linebreak": "error",
        "prefer-template": "warn",
        "quotes": "error",
        "radix": "error",
        "require-await": "error",
        "semi": "error",
        "space-before-blocks": "error",
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": "error",
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "strict": "error",
        "valid-jsdoc": "warn",
        "vars-on-top": "warn",
        "wrap-iife": ["error", "inside"],
        "yield-star-spacing": ["error", "after"]
    }
};
