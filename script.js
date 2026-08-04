const menuBurger = document.getElementById("menu_burger");
const menuPanel = document.getElementById("menuPanel"); // ou .no_inspi[0]

menuBurger.addEventListener("click", function () {
    this.classList.toggle("active");
    menuPanel.classList.toggle("open");
});
