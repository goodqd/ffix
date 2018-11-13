const path = require('path')
const fs = require('fs')

module.exports = function (rootdir, dirOptions, fileOptions) {
  let _arguments = arguments
  if( fs.existsSync(rootdir) ) {
    let files = fs.readdirSync(rootdir)
    files.forEach(function(file, index){
      let curPath = path.join(rootdir, file)
      if(fs.statSync(curPath).isDirectory()) {
        let changeDirPath = ''
        let { prefix='', fix='' } = dirOptions
        let fixLen = fix.toString().length

        if (prefix) {
          if (!(new RegExp('\^' + fix)).test(file)) {
            return
          }
          changeDirPath = path.join(path.resolve(path.dirname(curPath)), file.substr(fixLen))
        } else {
          if (!(new RegExp(fix + '\$')).test(file)) {
            return
          }
          changeDirPath = path.join(path.resolve(path.dirname(curPath)), file.substring(0, file.length - fixLen))
        }

        fs.rename(curPath, changeDirPath, function(err){
          if(err){
            throw err
          } else {
            _arguments.callee(changeDirPath, dirOptions, fileOptions)
            // console.log("change dir "+ curPath +" to "+ changeDirPath +" done!")
          }
        })
      } else {
        let extname = path.extname(file);
        let fileName = file.substring(0, file.length - extname.length);
        
        let changeFileName = ''
        let { prefix, fix='' } = fileOptions
        if (!fix) {
          return
        }

        let fixLen = fix.toString().length

        if (prefix) {
          if (!(new RegExp('\^' + fix)).test(fileName)) {
            return
          }
          changeFileName = fileName.substr(fixLen) + extname
        } else {
          if (!(new RegExp(fix + '\$')).test(fileName)) {
            return
          }
          changeFileName = fileName.substring(0, fileName.length - fixLen) + extname
        }

        let changeFilePath = path.join(rootdir, changeFileName)
        fs.rename(curPath, changeFilePath, function(err){
          if(err){
            throw err
          } else {
            // console.log("change file "+ curPath +" to "+ changeFilePath +" done!")
          }
        })
      }
    })
  }
}

