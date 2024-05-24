window.addEventListener("load", () => {
    let headerBtn = document.querySelector(".navBtn");
    let serviceNav = document.querySelector(".service-navi");

    headerBtn.addEventListener("click", () => {
        //console.log("anjwl");
        serviceNav.classList.toggle("active");
    });
});