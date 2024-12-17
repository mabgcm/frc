import nodemailer from "nodemailer";

export async function POST(req) {
    const { name, email, message } = await req.json();

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail", // Use Gmail or another provider
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your app-specific password or SMTP password
            },
        });

        // Email details
        const mailOptions = {
            from: `"Contact Form" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER, // The email where messages will be sent
            subject: "New Contact Form Submission",
            text: `You have received a new message from ${name} (${email}):\n\n${message}`,
        };

        await transporter.sendMail(mailOptions);

        return Response.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        return Response.json({ success: false, message: "Failed to send message." }, { status: 500 });
    }
}
