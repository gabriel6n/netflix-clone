

const expansiveSearchbar = () => {
    const search = document.querySelector(".search");

    search.addEventListener('click', () => {
        document.querySelector(".container-search").classList.toggle('active');
    })
}
expansiveSearchbar();
