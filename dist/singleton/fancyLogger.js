class fancyLogger {
    constructor() {
        this.logs = [];
    }
    static getInstance() {
        if (!fancyLogger.instance) {
            fancyLogger.instance = new fancyLogger();
        }
        return fancyLogger.instance;
    }
    log(message) {
        this.logs.push(message);
        console.log(`FancyLogger gets: ${message}`);
    }
    printLogCount() {
        console.log(`The length of logs is: ${this.logs.length}`);
    }
}
const logger = new fancyLogger();
Object.freeze(logger);
export default logger;
