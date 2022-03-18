import clientPromise  from "../../../lib/mongodb";
export default async (req, res) => {
  await clientPromise.then(async client => {
        const db = client.db("sample_mflix");
        const collection = db.collection("movies");
        const result = await collection.find({}).limit(20).toArray();
        res.json(result);
     });
};