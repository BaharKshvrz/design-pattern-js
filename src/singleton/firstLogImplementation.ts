import logger from './fancyLogger.js';

export const firstLogImplementation = (message: string) =>  {
    logger.log(message);
    logger.printLogCount();
}

