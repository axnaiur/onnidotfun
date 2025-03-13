import { Schema, model } from 'mongoose'

interface IChallenge {
  userId: string
  startDate: Date
  endDate: Date
  isPassed: boolean
  profitTarget: number
}

const challengeSchema = new Schema<IChallenge>({
  userId: { type: String, required: true },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, required: true },
  isPassed: { type: Boolean, default: false },
  profitTarget: { type: Number, required: true }
})

export default model<IChallenge>('Challenge', challengeSchema)
