import paddedDescribes from './rules/padded-describes';

export const rules = {
    'padded-describes': paddedDescribes,
};

export const configs = {
    recommended: {
        rules: {
            '@noeldemartin/padded-describes': 'error',
        },
    },
};
