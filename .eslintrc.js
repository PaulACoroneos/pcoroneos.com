module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true
    },
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        project: './tsconfig.json',
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'prettier',
        '@typescript-eslint',
        'react-hooks'
    ],
    rules: {
        "prettier/prettier": [0,
            {
                "semi": true,
                "singleQuote": false,
                "trailingComma": "es5",
                "printWidth": 100,
                "tabWidth": 2,
                "arrowParens": "avoid",
                "jsxSingleQuote": false,
                "jsxBracketSameLine": true,
            }
        ],

        "semi": 0,
        "eqeqeq": [1, "always"],
        "quotes": [1, "single"],
        "jsx-quotes": [1, "prefer-single"],
        "no-undef": 0,
        "no-console": 1,
        "no-unused-vars": 0,
        "no-mixed-operators": [1,
            {
                "allowSamePrecedence": true
            }
        ],
        "eol-last": [2, "always"],
        "no-confusing-arrow": 0,
        "arrow-parens": [2, "as-needed"],
        "arrow-spacing": ["error", { "before": true, "after": true }],
        "arrow-body-style": [2, "as-needed"],
        "no-extra-parens": [
            "warn",
            "all",
            {
                "conditionalAssign": false,
                "nestedBinaryExpressions": false,
                "ignoreJSX": "none",
                "enforceForArrowConditionals": false
            }
        ],
        "no-param-reassign": 0,
        "prefer-template": 0,
        "prefer-promise-reject-errors": 0,
        "no-script-url": 0,
        "prefer-promise-reject-errors": 0,
        "no-unused-expressions": 0,
        // "dot-notation": 0,

        "import/prefer-default-export": 0,
        "import/no-useless-path-segments": 1,
        "import/no-unresolved": 0,
        "import/no-extraneous-dependencies": 0,
        "import/no-named-as-default": 0,
        "import/no-duplicates": 0,
        "import/order": 0,
        "import/newline-after-import": 1,
        "import/no-named-as-default-member": 0,
        "import/namespace": 0,
        "import/named": 0,

        "jsx-a11y/anchor-is-valid": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/label-has-for": 0,
        "jsx-a11y/iframe-has-title": 0,
        "jsx-a11y/control-has-associated-label": 0,

        "react/jsx-wrap-multilines": [2,
            {
                "declaration": "parens-new-line",
                "assignment": "parens-new-line",
                "return": "parens-new-line",
                "arrow": "ignore",
                "condition": "ignore",
                "logical": "ignore",
                "prop": "ignore"
            }
        ],
        "react/jsx-filename-extension": 0,
        "react/jsx-indent": 0,
        "react/jsx-boolean-value": 0,
        "react/jsx-closing-tag-location": 0,
        "react/jsx-closing-bracket-location": [2, { selfClosing: 'props-aligned', nonEmpty: 'after-props' }],
        "react/button-has-type": 0,
        "react/prop-types": 0,
        "react/button-has-type": 0,
        "react/jsx-tag-spacing": [2, { "beforeSelfClosing": "always" }],
        "react/jsx-one-expression-per-line": 0,
        "react/jsx-curly-spacing": 0,
        "react/no-access-state-in-setstate": 0,
        "react/destructuring-assignment": 0,
        "react/jsx-no-bind": 0,
        "react/require-default-props": 0,
        "react/display-name": 0,
        "react/jsx-first-prop-new-line": 0,
        "react/jsx-props-no-spreading": 0,
        "react/static-property-placement": 0,
        "react/state-in-constructor": 0,
        'react/no-array-index-key': 0,

        "@typescript-eslint/indent": 0,
        "@typescript-eslint/camelcase": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/no-non-null-assertion": 0,
        "@typescript-eslint/no-use-before-define": 0,
        "@typescript-eslint/member-delimiter-style": 0,
        "@typescript-eslint/no-unused-vars": 0,
        "@typescript-eslint/no-use-before-define": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/explicit-member-accessibility": 0,
        "@typescript-eslint/no-angle-bracket-type-assertion": 0,
        "react-hooks/rules-of-hooks": 1,
        "react-hooks/exhaustive-deps": 1
    },
};