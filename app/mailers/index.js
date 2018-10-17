import mailer from 'nodemailer';
import passwordGenerator from 'generate-password';

process.env.NODE_ENV === 'test' ? require('dotenv').config({ path: '.test.env' }) : require('dotenv').config();

const sendPassword = async(to, from = process.env.USER_EMAIL, subject) => {
	try {
		const transporter = mailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.USER_EMAIL,
				pass: process.env.USER_PASSWORD,
			}
		});
		const passGenerator = passwordGenerator.generate({
			length: 16,
			numbers: true,
		})
		const mailOption = {
			from: from,
			to: to,
			subject: subject,
			text: passGenerator,
		};
		await transporter.sendMail(mailOption);
		return passGenerator;
	} catch (error) {
		throw new Error(error);
	}
};

module.exports = { sendPassword };
