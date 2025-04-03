const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

// Email Sending Route
app.post("/send-email", async (req, res) => {
    const { email, patientName, pdfData } = req.body;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "humerak1810@gmail.com",
            pass: "akmf lieb jykd xqxz"  // Paste the App Password here
        }
    });

    let mailOptions = {
        from: "humerak1810@gmail.com",
        to: email,
        subject: `Patient Report - ${patientName}`,
        text: `Dear ${patientName},\n\nPlease find your medical report attached.\n\nBest Regards,\nYour Medical Team`,
        attachments: [
            {
                filename: `Patient_Report_${patientName}.pdf`,
                content: pdfData.split(";base64,").pop(),
                encoding: "base64"
            }
        ]
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully"); // ✅ This will log in the backend terminal
        res.status(200).json({ message: "Email sent successfully!" }); // ✅ Ensure status 200
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Failed to send email" });
    }
    
    
});

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));

// "humerak1810@gmail.com",pyro upey hirx vnnl
//             pass: "uzair786@"