export default function CardMovie({ movie }) {
  const { genres, overview, poster_path, release_date, vote_average, title } =
    movie;

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  const imgUrl = imgBaseUrl.concat(poster_path);
  const releaseDate = release_date.slise(0, 4);
  const voteScore = vote_average.ToFixed(1);
  const genresList = genres.map(genre => genre.name).join(',');
  return (
    <div>
      <img src={imgUrl} alt={title}></img>
      <div>
        <h2>
          {title}
          <span>{releaseDate}</span>
        </h2>
        <p>
          User score:
          <span>{voteScore}</span>
        </p>
        <p>
          Overview:
          <span>{overview}</span>
        </p>
        <p>
          Genres:
          <span>{genresList}</span>
        </p>
      </div>
    </div>
  );
}
