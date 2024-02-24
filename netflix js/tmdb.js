const basicFetch = async (url) => {
  const api_key = "";
  const req = await fetch(`${url}${api_key}&language=pt-BR&page=1`).then(
    (res) => res.json()
  );
  return req;
};

export async function setCardPoster(url) {
  const numberRandom = Math.floor(Math.random() * 20);
  const listMovies = await basicFetch(
    "https://api.themoviedb.org/3/trending/all/day?api_key="
  );
  const movie = {
    title:
      listMovies.results[numberRandom].title ||
      listMovies.results[numberRandom].name ||
      listMovies.results[numberRandom].original_name,
    overview: listMovies.results[numberRandom].overview,
    image: `url('https://image.tmdb.org/t/p/original${listMovies.results[numberRandom].backdrop_path}')`,
  };
  return movie;
}
async function setPosterMovie(url) {
  const movie = await basicFetch(url);
  const listPoster = [];
  movie.results.map((e) => listPoster.push(e.poster_path));
  return listPoster;
}

export const carouselMovies = [
  {
    title: "Populares",
    listMovies: await setPosterMovie(
      "https://api.themoviedb.org/3/movie/popular?api_key="
    ),
  },
  {
    title: "Assistindo Agora",
    listMovies: await setPosterMovie(
      "https://api.themoviedb.org/3/movie/now_playing?api_key="
    ),
  },
  {
    title: "Por vir",
    listMovies: await setPosterMovie(
      "https://api.themoviedb.org/3/movie/upcoming?api_key="
    ),
  },
  {
    title: "Mais bem Avaliadas",
    listMovies: await setPosterMovie(
      "https://api.themoviedb.org/3/movie/top_rated?api_key="
    ),
  },
];
