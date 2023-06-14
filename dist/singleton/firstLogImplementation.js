import logger from './fancyLogger.js';
export const firstLogImplementation = (message) => {
    logger.log(message);
    logger.printLogCount();
};
