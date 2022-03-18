import clientPromise  from "../../../lib/mongodb";
export default async (req, res) => {
    const { mid } = req.query
  await clientPromise.then(async client => {
        const db = client.db("sample_mflix");
        const collection = db.collection("movies");
        const result = await collection.find({id: mid}).limit(1).toArray();
        res.json(result);
     });
};