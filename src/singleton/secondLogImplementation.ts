import logger from './fancyLogger.js';

export const secondLogImplementation = (message: string) =>  {
    logger.log(message);
    logger.printLogCount();
}

