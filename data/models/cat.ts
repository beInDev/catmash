import mongoose, { Document } from "mongoose";

export interface ICat extends Document {
  url: string;
  id: string;
  score: number;
  matchesWon: number;
  matchesLost: number;
}

// Mongoose Schema definition
const schema = new mongoose.Schema({
  url: { type: String, required: true },
  id: { type: String, required: true },
  score: { type: Number, required: true, default: 1000 },
  matchesWon: { type: Number, required: true, default: 0 },
  matchesLost: { type: Number, required: true, default: 0 },
});

/**
 * Returns the defined mongoose model for Cat
 *
 * @export
 * @returns {mongoose.Model<ICat>}
 */
export function getModel(): mongoose.Model<ICat> {
  try {
    return mongoose.model<ICat>("Cat");
  } catch {
    return mongoose.model<ICat>("Cat", schema);
  }
}
