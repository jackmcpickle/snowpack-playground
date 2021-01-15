module.exports = {
    mount: {
        src: '/built',
        public: '/',
    },
    plugins: [
        [
            '@snowpack/plugin-babel',
            {
                input: ['.js', '.mjs', '.jsx', '.ts', '.tsx'], // (optional) specify files for Babel to transform
                transformOptions: {
                    // babel transform options
                },
            },
        ],
    ],
    packageOptions: {
        source: 'remote',
    },
};
