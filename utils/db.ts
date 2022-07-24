import mongoose from 'mongoose';


const { MONGODB_URI } = process.env

export const connect = async () => {
    const conn = await mongoose
        .connect(MONGODB_URI as string)
        .catch(err => console.log(err))
    console.log("Mongoose Connection Established")
}

function convertDocToObj(doc: any) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}

const db = { connect, convertDocToObj };
export default db;
