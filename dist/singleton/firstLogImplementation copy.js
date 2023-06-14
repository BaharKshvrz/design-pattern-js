import fancyLogger from './fancyLogger.js';
const logger = new fancyLogger();
const firstLogImplementation = (message) => {
    logger.log(message);
    logger.printLogCount();
};
firstLogImplementation("First Item");
firstLogImplementation("Second Item");
