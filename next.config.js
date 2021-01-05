let config = {
    trailingSlash: true,
    generateBuildId: async () => {
        return 'staticBuildId'
    },
};

module.exports = config;
