class fancyLogger {
    private static instance: fancyLogger;
    private logs: string[];
    constructor() {
      this.logs = [];
    }

    static getInstance(): fancyLogger {
       if (!fancyLogger.instance) {
            fancyLogger.instance = new fancyLogger();
       }

       return fancyLogger.instance;
    }

    log(message: string) {
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

