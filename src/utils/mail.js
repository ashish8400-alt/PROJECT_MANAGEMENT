import { text } from "express";
import Mailgen from "mailgen";  // mailgen me kaise mail generate karna hai ye batata hai





const emailVerificationMailgenContent = (username, verficationUrl)=>{
  return {
    body: {
      name:username,
      intro: "Welcome to our App! we'are excited to have you on board.",
      action:{
        instructions:"To Verify your email please click on the following button",
        button:{
          color:"#22BC66",
          text:"Verify your email",
          link:verficationUrl
        },
      },
      outro:"Need Help, or have questions? Just reply to this email, we'd love to help"
    },
  };
}



const  forgotPasswordMailgenContent = (username, passwordResetUrl )=>{
  return {
    body: {
      name:username,
      intro: "We got a request to reset the password of your account ",
      action:{
        instructions:"To reset your password click on the following button or link",
        button:{
          color:"#69e39e",
          text:"Reset password",
          link:passwordResetUrl,
        },
      },
      outro:"Need Help, or have questions? Just reply to this email, we'd love to help"
    },
  };
}


export{
  emailVerificationMailgenContent, forgotPasswordMailgenContent
};