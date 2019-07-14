
const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {

sgMail.send({
  to: email,
  from: 'gustavomorillo@gmail.com',
  subject: 'Thanks for joining in!',
  text: `Welcome to the app, ${name}. Let me know how you get along with the app.` 
})
}
const sendCancelEmail = (email, name) => {

  sgMail.send({
    to: email,
    from: 'gustavomorillo@gmail.com',
    subject: 'Cancel account!',
    text: `Hi, we noticed that you canceled the account, ${name}. If we can do something for you, just aks us.` 
  })
  }
module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
}