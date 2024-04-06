module.exports = {
    ci: {
        collect: {
            url: ['https://www.businessinsider.com/']
        },
        upload: {
            target: 'temporary-public-storage',
        },
        assert: {
            assertions: {
                'categories.accessibility': ["error", { minScore: 1 }]
            }
        }
    },
};