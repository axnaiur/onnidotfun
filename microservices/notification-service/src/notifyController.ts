import { Request, Response } from 'express'
import { sendEmail } from './notifyService'

export const sendChallengeReminder = async (req: Request, res: Response) => {
  try {
    const { email, challengeId } = req.body
    await sendEmail(email, `Reminder: Challenge ${challengeId} is about to end!`)
    res.status(200).json({ message: 'Reminder sent successfully!' })
  } catch (error) {
    res.status(500).json({ message: 'Error sending reminder' })
  }
}
