// Workaround before @nx lint supports .mjs directly

const config = (async () => (await import('./eslint.config.mjs')).default)();
module.exports = config;
