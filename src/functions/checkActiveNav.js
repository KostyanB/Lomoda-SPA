// задаем класс активной ссылке nav для подсветки

const checkActiveNav = () => {
  const navLinks = document.querySelectorAll("nav li a");
  navLinks.forEach(item => {
    if (item.href === window.location.href) {
      item.classList.add("current");
    } else {
      item.classList.remove("current");
    }
  });
};
export default checkActiveNav;
