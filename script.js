const nav = document.querySelector(".navbar-nav");

nav.addEventListener("click", (e) => {
  const targetMenu = e.target;

  if (targetMenu.classList.contains("nav-link")) {
    const menuLinkActive = document.querySelector("ul li a.active");

    if (
      menuLinkActive !== null &&
      targetMenu.getAttribute("href") !== menuLinkActive.getAttribute("href")
    ) {
      menuLinkActive.classList.remove("active");
    }

    targetMenu.classList.add("active");
  }
});
