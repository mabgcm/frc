export async function POST(req) {
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS);

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error("Environment variables not found!");
        return Response.json({ success: false, message: "Missing credentials" }, { status: 500 });
    }

    return Response.json({ success: true, message: "Environment variables are working!" });
}
