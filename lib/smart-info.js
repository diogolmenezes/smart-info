// this class gets application info, like memory, cpu, version etc.
class SmartInfo {

    constructor(completeInfo) {
        this.MB = 1024 * 1000;
        this.GB = this.MB * 1000;
        this.none = '-';
        this.timethat = require('timethat');
        this.os = require('os');
        this.completeInfo = completeInfo;
    }

    // get application info
    info(completeInfo) {
        this.completeInfo = completeInfo || this.completeInfo;

        let info = {
            package: this.packageInfo(),
            process: {
                uptime: this.timethat.calc(Date.now() - (process.uptime() * 1000)),
                memory: this.memoryInfo(),
                detail: this.processInfo()
            },
            os: this.osInfo(),
            message: 'Ok, a API está rodando.'
        };

        return info;
    };

    // get memory info
    memoryInfo() {
        let memory = process.memoryUsage();

        return {
            rss: Math.round(memory.rss / this.MB),
            heapUsed: Math.round(memory.heapUsed / this.MB),
            heapTotal: Math.round(memory.heapTotal / this.MB),
            external: Math.round(memory.external / this.MB)
        };
    };

    // get process info
    processInfo() {
        if (this.completeInfo)
            return {
                version: process.version.replace(/^[v|V]/, ""),
                user: process.env.USER || this.none,
                lang: process.env.LANG || this.none,
                arch: process.arch || this.none,
                platform: process.platform || this.none,
                pid: process.pid || this.none,
                cwd: process.cwd(),
                versions: process.versions,
                env: process.env,
                config: process.config
            };
        else
            return {};
    };

    // get system info
    osInfo() {
        if (this.completeInfo) {
            let cpu = this.os.cpus();
            return {
                totalmem: Math.round(this.os.totalmem() / this.GB),
                freemem: Math.round(this.os.freemem() / this.GB),
                core: cpu.length,
                model: cpu[0].model,
                speed: cpu[0].speed,
                hostname: this.os.hostname()
            };
        }
        else
            return {};
    }    

    // get package.json info
    packageInfo() {
        var pkg = require(`${process.cwd()}/package`);
        return {
            name: pkg.name,
            description: pkg.description,
            version: pkg.version,
            homepage: pkg.homepage || this.none,
            author: pkg.author,
            bugs: pkg.bugs || this.none,
            repository: pkg.repository || this.none,
            license: pkg.license || this.none
        };
    };
};

module.exports = new SmartInfo();