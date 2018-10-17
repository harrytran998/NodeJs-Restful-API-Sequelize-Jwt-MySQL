import winston from 'winston';

const logFormat = winston.format.printf((info) => {
	return `[${info.timestamp}] ${info.level}: ${info.message}`;
});

const config = {
  levels: {
    error: 0,
    debug: 1,
    warn: 2,
    data: 3,
    info: 4,
    verbose: 5,
    silly: 6
  },
  colors: {
    error: 'red',
    debug: 'grey',
    warn: 'yellow',
    data: 'blue',
    info: 'green',
    verbose: 'cyan',
    silly: 'magenta'
  }
};

const transport = process.env.NODE_ENV === 'test' ? new winston.transports.File({ filename: './logs/test_logs.log'}) : new winston.transports.Console();

winston.configure({
  levels: config.levels,
  transports: [
    transport
  ],
  format: winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.timestamp(),
    logFormat
  )
});

winston.addColors(config.colors);
