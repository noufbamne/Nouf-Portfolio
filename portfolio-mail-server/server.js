const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/send", async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.verify();

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: subject || "New Portfolio Message 🚀",
            html: `
<div style="font-family:system-ui;padding:20px;background:#0f172a;color:#e2e8f0">
  <div style="max-width:600px;margin:auto;background:#111827;padding:20px;border-radius:12px">

    <h2 style="color:#0ff0fc;">🚀 New Portfolio Contact</h2>

    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Subject:</b> ${subject}</p>

    <hr style="border:1px solid #334155">

    <p><b>Message:</b><br>${message}</p>

    <p style="margin-top:20px;font-size:12px;color:#94a3b8">
      Portfolio Contact System
    </p>

  </div>
</div>
            `
        });

        res.json({ success: true });

    } catch (err) {
        console.log("EMAIL ERROR:", err);
        res.status(500).json({ success: false });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});