import { sendCodeValidatorMail, generateCode } from '../utils/mailer.js';

try {
    const response = await sendCodeValidatorMail('alejandro.r.abraham@gmail.com', 'Alejandro', 'testAPP', 'https://nodemailer.com/nm_logo_200x136.png', generateCode(5));
    console.log(response);
} catch (error) {
    console.log(error.message);    
}
