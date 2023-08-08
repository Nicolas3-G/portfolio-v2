'use server'
import emailjs from '@emailjs/browser';
 
export async function sendEmailAction(form) {
  console.log("Running email aciton on server")
  emailjs.sendForm(process.env.EMAIL_SERVICE_KEY, 'template_fbnqjwj', form, '-8Zb6WZ78zgtK80L3')
  .then((result) => {
      console.log(result.text);
      responseText = result.text;
  }, (error) => {
      console.log(error.text);
      responseText = error.text;
  });
}