// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: Request) {
//   const formData = await req.formData();

//   const email = formData.get("email");
//   const message = formData.get("message");

//   const { data, error } = await resend.emails.send({
//     from: "Portfolio <pietro.vito>",
//     to: ["piethehero@gmail.com"],
//     subject: "New message from portfolio",
//     html: `
//       <h2>New contact message</h2>

//       <p><strong>From:</strong> ${email}</p>

//       <p><strong>Message:</strong></p>

//       <p>${message}</p>
//     `,
//   });

//   if (error) {
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }

//   return Response.json({ message: "Email sent successfully", data });
// }
