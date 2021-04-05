import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

dotenv.config();

const OAuth2 = google.auth.OAuth2;
const gmail_client_ID = process.env.SMTP_TO_ClientID || '';
const gmail_pass_secret = process.env.SMTP_TO_PASSWORD || '';
const gmail_refresh_token = process.env.SMTP_GMAIL_REFRESH || '';


const oauth2Client = new OAuth2(
	gmail_client_ID, // ClientID
	gmail_pass_secret, // Client Secret
	"https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
	refresh_token: gmail_refresh_token
});

const accessToken = oauth2Client.getAccessToken();

const transport: any = {
	//this is the authentication for sending mail.
	service: "gmail",
	tls: {
		rejectUnauthorized: false
	},
	//Credential
	auth: {
		type: "OAuth2",
		user: "erickalvacontact@gmail.com", 
		clientId: gmail_client_ID,
		clientSecret: gmail_pass_secret,
		refreshToken: gmail_refresh_token,
		accessToken: accessToken
   }
} //end config

//call the transport funtion
const transporter = nodemailer.createTransport( transport );

export default transporter;
