#!/usr/bin/env node
const yargs = require('yargs')
const Server = require('./app')

const argv = yargs.command('ffix [option]', 'change fix to file', (yargs) => {
  yargs
    .positional('c', {
      alias: 'cut',
      describe: 'cut',
      default: 'cut'
    })
    .positional('r', {
      alias: 'root',
      describe: 'root',
      default: ''
    })
    .positional('a', {
      alias: 'dirfile',
      describe: 'dir and file',
      default: ''
    })
    .positional('d', {
      alias: 'dir',
      describe: 'dir',
      default: __dirname
    })
    .positional('f', {
      alias: 'file',
      describe: 'file',
      default: ''
    })
    .positional('q', {
      alias: 'dirprefix',
      describe: 'dirprefix',
      default: ''
    })
    .positional('p', {
      alias: 'fileprefix',
      describe: 'fileprefix',
      default: ''
    })
  }, (argv) => {
    console.info(`${argv}`)
  })
  .option('verbose', {
    alias: 'v',
    default: false
  })
  .argv

// console.log(argv)
const server = new Server(argv)
server.start()
