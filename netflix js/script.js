

const mudarcabecadecor = () => {
    window.addEventListener("scroll", function () {
        const docxx = document.getElementById("main-movie");
        if (window.pageYOffset > docxx.offsetTop) {
            document.getElementById("header").style.background = "transparent";
        }
        else {
            document.getElementById("header").style.background = "black";
        }
    });

}
mudarcabecadecor();

const expansiveSearchbar = () => {
    const search = document.querySelector(".search");

    search.addEventListener('click', () => {
        document.querySelector(".container-search").classList.toggle('active');
    })
}
expansiveSearchba();
