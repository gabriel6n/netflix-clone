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

  const title = setElement("h2", "title");
  title.innerHTML = movie.title;

  const overview = setElement("span", "overview");
  overview.innerHTML = movie.overview;

  const containerButton = setElement("div", "container-btn");
  const buttonPlay = setElement("button", ["btn", "btn--play"]);
  const buttonInfo = setElement("button", ["btn", "btn--info"]);
  buttonPlay.innerHTML = "Play";
  buttonInfo.innerHTML = "Mais informações";

  containerButton.appendChild(buttonInfo);
  containerButtonz.appendChild(buttonPlay);

  container.append(containerButton);

  container.append(title);
  container.append(overview);

  main.appendChild(container);
  body.appendChild(main);

  main.style.backgroundImage = movie.image;
  await carouselMovieRender();
}

async function carouselMovieRender() {
  const div = setElement("div", "div2");
  carouselMovies.forEach((item) => {
    const divCarousel = setElement("div", "carousel");
    const title = setElement("h3", ["title", "title--movie"]);
    const divCountPage = setPagination(item.listMovies.length);
    const listMovie = setElement("div", "carousel--listMovie");
    const arrowLeft = setElement("span", ["arrow", "arrow__left"]);
    const arrowRight = setElement("span", ["arrow", "arrow__right"]);

    divCarousel.appendChild(arrowLeft);
    divCarousel.appendChild(title);
    divCarousel.appendChild(divCountPage);
    divCarousel.appendChild(arrowRight);

    arrowLeft.innerHTML = "<";
    arrowRight.innerHTML = ">";
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
