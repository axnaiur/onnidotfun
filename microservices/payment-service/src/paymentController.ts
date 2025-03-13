import { Request, Response } from 'express'
import { processPayment } from './paymentService'

export const initiatePayment = async (req: Request, res: Response) => {
  try {
    const { userId, amount } = req.body
    const confirmation = await processPayment(userId, amount)
    return res.status(200).json({ status: 'success', confirmation })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ status: 'failure', error: error.message })
  }
}
