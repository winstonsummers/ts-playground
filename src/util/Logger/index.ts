export interface ILogger {
  warn: (...warnings: any) => void
  error: (...errors: any) => void
  localLog: (...data: any) => void
  serverLog: (...data: any) => void
}

export enum logLevels {
  warn = 'warn',
  error = 'error',
  log = 'log',
}

const log = (level: logLevels, data: any) => {
  console[level]({level, data})
}

const warn = (...warnings: any) => {
  log(logLevels.warn, warnings)
}

const error = (...errors: any) => {
  log(logLevels.error, errors)
}

const localLog = (...data: any) => {
  log(logLevels.log, data)
}

// I want to set up a base API that this can use...
const Logger: ILogger = {
  warn,
  error,
  localLog,
  serverLog: localLog
}

export default Logger