const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser:true,
  useCreateIndex: true,
  useFindAndModify:false
})



// const Task = mongoose.model('Task', {
//   description: {
//     type: String,
//     trim: true,
//     required: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   }
// })


// const task = new Task ({
//   description: '      sleep everyday'
// })

// task.save().then( () => {
//   console.log(task)
// }).catch((error) => {
//   console.log('Error', error)
// })




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