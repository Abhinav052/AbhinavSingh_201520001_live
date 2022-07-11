window.onload = function () {
    const info = document.querySelectorAll(".footerItem");
    info[0].textContent = "Abhinav Singh";
    info[1].textContent = "201520001";
    info[2].textContent = "GLA University, Mathura";
    const date = new Date();
    info[3].textContent = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
}