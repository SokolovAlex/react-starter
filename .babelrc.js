const { dev, prod, test, cwd } = require('./config');

module.exports = function (api) {
    // babel will cache config with this key https://babeljs.io/docs/en/config-files#apicache
    api.cache.using(() => process.env.NODE_ENV);

    return {
        presets: [
            ['@babel/preset-env', {
                useBuiltIns: 'entry',
                corejs: 3,
                loose: prod.is,
                modules: test.if('commonjs', false),
                configPath: cwd()
            }],
            ['@babel/preset-react', {
                development: dev.is,
                useBuiltIns: true
            }],
            ['@babel/preset-typescript', {
                isTSX: true,
                allExtensions: true
            }]
        ],
        plugins: [
            ['@babel/plugin-proposal-class-properties', {
                loose: prod.is,
            }],
        ],
        env: {
            test: {
                plugins: ['babel-plugin-dynamic-import-node']
            }
        }
    };
};