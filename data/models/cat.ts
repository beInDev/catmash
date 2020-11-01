import mongoose, { Document } from "mongoose";

export interface ICat extends Document {
  url: string;
  id: string;
  score: number;
  matchesWon: number;
  matchesLost: number;
}

const schema = new mongoose.Schema({
  url: { type: String, required: true },
  id: { type: String, required: true },
  score: { type: Number, required: true, default: 1000 },
  matchesWon: { type: Number, required: true, default: 0 },
  matchesLost: { type: Number, required: true, default: 0 },
});

export function getModel() {
  try {
    return mongoose.model<ICat>("Cat");
  } catch {
    return mongoose.model<ICat>("Cat", schema);
  }
}
