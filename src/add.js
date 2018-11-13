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

        if (prefix) {
          changeDirPath = path.join(path.dirname(curPath), fix + file)
        } else {
          changeDirPath = path.join(path.dirname(curPath), file + fix)
        }

        fs.rename(curPath, changeDirPath, function(err){
          if(err){
            throw err
          } else{
            _arguments.callee(changeDirPath, dirOptions, fileOptions)
            // console.info("change dir "+ curPath +" to "+ changeDirPath +" done!")
          }
        })
      } else {
        let extname = path.extname(file);
        let fileName = file.substring(0, file.length - extname.length);

        let changeFileName = ''
        let { prefix='', fix='' } = fileOptions

        if (prefix) {
          changeFileName = fix + fileName + extname
        } else {
          changeFileName = fileName + fix + extname
        }

        let changeFilePath = path.join(rootdir, changeFileName)
        fs.rename(curPath, changeFilePath, function(err){
          if(err){
            throw err
          } else{
            // console.info("change file "+ curPath +" to "+ changeFilePath +" done!")
          }
        })
      }
    })
  }
}
