import nodemailer from "nodemailer";

export async function POST(req) {
    const { name, email, message } = await req.json();

    try {
        // Set up Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // Use TLS
            auth: {
                user: process.env.EMAIL_USER, // Ensure this is your Gmail address
                pass: process.env.EMAIL_PASS, // Use your app-specific password
            },
            logger: true,  // Enable detailed logs
            debug: true,   // Enable debugging for troubleshooting
        });

        // Define email options
        const mailOptions = {
            from: `"Contact Form" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER, // Send the message to yourself
            subject: "New Contact Form Submission",
            text: `You have received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        console.log("Email sent successfully!");

        return Response.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        return Response.json(
            { success: false, message: "Failed to send message.", error: error.message },
            { status: 500 }
        );
    }
}
