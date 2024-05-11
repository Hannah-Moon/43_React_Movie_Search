export default function MovieDisplay({ movie }) {
  const loaded = () => {
    return (
      <>
        <img className="moviePoster" src={movie.Poster} alt={movie.Title} />
        <h1 className="mainTitle">{movie.Title}</h1>
        <h2 className="genre">{movie.Genre}</h2>
        <h3 className="year">{movie.Year}</h3>
      </>
    );
  };

  const loading = () => {
    return <h1 className="mainTitle">No Movie to Display</h1>;
  };
  // The component must return some JSX
  return movie ? loaded() : loading();
}
