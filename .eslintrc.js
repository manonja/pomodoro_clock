module.exports = {
    "globals": {
        "module": false
    },
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "extends": "eslint-config-airbnb",
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    "plugins": [
        "jsx-a11y",
        "react"
    ]
};
