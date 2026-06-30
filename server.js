const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer configuration
const transporter = nodemailer.createTransport({
    service: 'gmail.com', // e.g., 'gmail'
    auth: {
        user: 'yourEmail@gmail.com',
        pass: 'yourPassword'
    }
});

// Route to handle form submissions
app.post('/api/send-email', (req, res) => {
    const { whoAreYou, message, name, email, phoneNumber, country, city, zipCode } = req.body;

    // Construct email message
    const mailOptions = {
        from: 'yourEmail@gmail.com',
        to: 'recipient@gmail.com', // Change to the recipient's email address
        subject: 'Form Submission',
        text: `
            Who Are You: ${whoAreYou}
            Message: ${message}
            Name: ${name}
            Email: ${email}
            Phone Number: ${phoneNumber}
            Country: ${country}
            City: ${city}
            Zip Code: ${zipCode}
        `
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
