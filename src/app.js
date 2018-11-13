const http = require('http')
const fs = require('fs')
const path = require('path')
const add = require('./add')
const remove = require('./remove')

class Ffix {
  constructor (config) {
    this.args = {}
    const argv0 = config['_'][0]
    const argv1 = config['_'][1] || ''
    this.args.action = argv0
    // console.log('config: ' + JSON.stringify(config))
    // console.log('process.cwd(): ' + process.cwd())
    // console.log('process.argv: ' + process.argv)
    this.args.rootdir = (argv1 && fs.statSync(argv1).isDirectory()) ? path.join(process.cwd(), argv1) : process.cwd()
    let dirOptions = {}
    let fileOptions = {}

    if(config.q) {
      dirOptions.prefix = true
      dirOptions.fix = config.q
    } else if(config.d) {
      dirOptions.fix = config.d
    }

    if(config.p) {
      fileOptions.prefix = true
      fileOptions.fix = config.p
    } else if(config.f) {
      fileOptions.fix = config.f
    }

    this.args.dirOptions = dirOptions
    this.args.fileOptions = fileOptions
  }

  start() {
    console.log('this.args')
    console.log(this.args)
    let { rootdir, dirOptions, fileOptions, action } = this.args
    if (action == 'remove') {
      remove(rootdir, dirOptions, fileOptions)
    } else if (action == 'add') {
      add(rootdir, dirOptions, fileOptions)  
    } else {
      console.error('您输入的命令有误!')
    }
  }
}

module.exports = Ffix