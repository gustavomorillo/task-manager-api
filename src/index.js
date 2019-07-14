const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT 


// const multer = require('multer')

// const upload = multer({
//   dest: 'images',
//   limits: {
//     fileSize: 1000000
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error('Please upload a word document'))
//     }
//     cb(undefined, true)
//   }
// })
// app.post('/upload', upload.single('upload'), (req, res) => {
//   res.send()
// }, (error, req, res, next) => {
//   res.status(400).send({error:error.message})
// })


// app.use((req, res, next) => {

//     res.status(503).send('maintence page')


// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
  console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

// const main = async () => {
//   // const task = await Task.findById('5d221b37f08d892cf86673da')
//   // await task.populate('owner').execPopulate()
//   // console.log(task.owner)
//   const user = await User.findById('5d222515b139f2307cb015dd')
//   await user.populate('tasks').execPopulate()
//   console.log(user.tasks)
// }
// main()


// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//   const token = jwt.sign({_id: 'abc'}, 'thisismynewcourse', {expiresIn: '7 days'})
//   console.log(token)

//   const data = jwt.verify(token, 'thisismynewcourse')
//   console.log(data)

// }
// myFunction()
















// const me = new User ({
//     name: 'Susan         ',
//     password: 'passxwordxsd',
//     email: 'hola@hotmail.com    ',
//     age: 33
// })

// me.save().then(() => {
//   console.log(me)
// }).catch((error) => {
//   console.log('Error!', error)
// })