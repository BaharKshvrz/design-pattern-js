import logger from './fancyLogger.js';
export const secondLogImplementation = (message) => {
    logger.log(message);
    logger.printLogCount();
};
