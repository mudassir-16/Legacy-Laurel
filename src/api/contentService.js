import mockData from '../data/mockData.json';

// Simulate API delay
const DELAY_MS = 800;

export const contentService = {
    getAllContent: async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockData);
            }, DELAY_MS);
        });
    },

    getSection: async (section) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (mockData[section]) {
                    resolve(mockData[section]);
                } else {
                    reject(new Error(`Section ${section} not found`));
                }
            }, DELAY_MS);
        });
    }
};
