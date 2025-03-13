import { Request, Response } from 'express'
import Challenge from '../models/Challenge'
import challengeService from '../services/challengeService'

export const getActiveChallenges = async (req: Request, res: Response) => {
  try {
    const challenges = await challengeService.getActiveChallenges()
    res.status(200).json(challenges)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error fetching active challenges' })
  }
}

export const submitChallengeResult = async (req: Request, res: Response) => {
  try {
    const { userId, trades } = req.body
    const result = await challengeService.evaluateChallenge(userId, trades)
    res.status(200).json(result)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error submitting challenge result' })
  }
}
