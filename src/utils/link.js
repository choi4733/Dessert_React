const link = () => {
  document.querySelectorAll(".header_menu ul li a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
};

export default link;
