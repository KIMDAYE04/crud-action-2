import mongoose from 'mongoose'

export default async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string)
    console.log('Connectes to MongoDB')
  } catch (error) {
    console.error(error)
  }
}
