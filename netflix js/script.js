function changeColorNavbar() {

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 10) {
            document.querySelector('.header').style.background= "black";
        }else{
            document.querySelector('.header').style.background= "transparent";
        }
    })
}

changeColorNavbar()


function expansiveSearchbar() {
    const search = document.querySelector(".search");

    search.addEventListener('click', () => {
        document.querySelector(".container-search").classList.toggle('active');
    })
}
expansiveSearchbar();
