import Mailjet from 'node-mailjet';

const mailjet = new Mailjet({
  apiKey: 'a95bd9f8949e390fe46e583580c38dc0',
  apiSecret: process.env.VITE_MAILJET_SECRET_KEY || ''
});

interface EmailData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendEmail(data: EmailData) {
  try {
    const response = await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: "azrraelcomics@gmail.com",
            Name: "IceMaster Pro Website"
          },
          To: [
            {
              Email: "azrraelcomics@gmail.com",
              Name: "Admin"
            }
          ],
          Subject: `Nueva consulta de ${data.name} - ${data.company}`,
          TextPart: `
            Nombre: ${data.name}
            Empresa: ${data.company}
            Email: ${data.email}
            Teléfono: ${data.phone}
            Mensaje: ${data.message}
          `,
          HTMLPart: `
            <h3>Nueva consulta desde el sitio web</h3>
            <p><strong>Nombre:</strong> ${data.name}</p>
            <p><strong>Empresa:</strong> ${data.company}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Teléfono:</strong> ${data.phone}</p>
            <p><strong>Mensaje:</strong> ${data.message}</p>
          `
        }
      ]
    });

    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}