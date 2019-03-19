const DtsCreator = require('typed-css-modules')
const glob = require('glob')

const creator = new DtsCreator()

glob('src/**/*.scss', {
  ignore: 'src/styles/**/*.scss'
}, (error, filePaths) => {
  console.log('start building typings.')
  for (const filePath of filePaths) {
    console.log('building typings for:', filePath)
    creator
      .create(filePath)
      .then(content => content.writeFile())
      .catch(error => console.log(error))
  }
  console.log('typings were built.')
})
