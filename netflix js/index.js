import { setCardPoster, carouselMovies } from "../netflix js/tmdb.js";

const body = document.querySelector("body");
const main = setElement("main", "poster");
function setElement(elem, classList = "none") {
  elem = document.createElement(elem);
  if (typeof classList == "string") {
    elem.classList.add(classList);
  } else {
    for (let i = 0; i < classList.length; i++) {
      elem.classList.add(classList[i]);
    }
  }
  return elem;
}

async function mainMoverRender() {
  const container = setElement("div", "container");
  const movie = await setCardPoster();

  main.appendChild(container);
  body.appendChild(main);

  const render = `  <h2 class="title">${movie.title}</h2>
  <span class="overview">${movie.overview}</span>
  <div class="container-btn">
  <button class="btn btn--play">Assitir</button>
  <button class="btn btn--info">Mais Informações</button>
  </div>`;

  main.style.backgroundImage = movie.image;
  container.innerHTML = render;
  await carouselMovieRender();
}

async function carouselMovieRender() {
  const div = setElement("div", "div2");
  carouselMovies.forEach((item) => {
    const divCarousel = setElement("div", "carousel");
    const title = setElement("h3", ["title", "title--movie"]);
    const divCountPage = setPagination(item.listMovies.length);
    const listMovie = setElement("div", "carousel--listMovie");

    divCarousel.appendChild(title);
    divCarousel.appendChild(divCountPage);

    title.innerHTML = item.title;

    item.listMovies.forEach((e) => {
      const movie = setElement("div", "carousel--listMovie__item");
      const img = document.createElement("img");
      img.setAttribute("src", `https://image.tmdb.org/t/p/original${e}`);
      movie.appendChild(img);
      listMovie.append(movie);
    });
    divCarousel.appendChild(listMovie);
    div.appendChild(divCarousel);
  });
  main.appendChild(div);
  body.appendChild(main);
}

mainMoverRender();

const setPagination = function (item) {
  const element = setElement("ul", "pagination");
  const qnt = item / 5;
  for (let i = 0; i < qnt; i++) {
    const linha = document.createElement("li");
    element.appendChild(linha);
  }
  element.children[0].classList.add("active");
  return element;
};
