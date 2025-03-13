import nodemailer from 'nodemailer'

export async function sendEmail(to: string, content: string) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.NOTIFY_EMAIL,
      pass: process.env.NOTIFY_PASS
    }
  })

  await transporter.sendMail({
    from: process.env.NOTIFY_EMAIL,
    to,
    subject: 'Onni Challenge Reminder',
    text: content
  })
}
