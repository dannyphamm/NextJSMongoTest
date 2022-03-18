import clientPromise from '../lib/mongodb'

export async function getStaticProps() {
    const movies = await clientPromise.then(async client => {
        const db = client.db("sample_mflix");
        const collection = db.collection("movies");
        const result = await collection.find({}).limit(1000).toArray();
        return result;
    });
    return {
      props: {
        movies: JSON.parse(JSON.stringify(movies)),
      },
    };
  }


export default function Top({ movies }) {
  return (
    <div>
      <h1>Top 20 Movies of All Time</h1>
      <p>
        <small>(According to Metacritic)</small>
      </p>
      <ul>
        {movies.map((movie) => (
          <li>
            <h2>{movie.title}</h2>
            <h3>{movie.metacritic}</h3>
            <p>{movie.plot}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
