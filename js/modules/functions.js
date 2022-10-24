/* Checking webp support, adding class webp or no-webp for HTML */
export function isWebp() {
  // Проверка поддержки webp
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }
  // Adding class _webp or _no-webp for HTML
  testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
  });
}

//menu burger
export function mobileMenu() {
  const menu = document.querySelector('.icon-menu');
  menu.addEventListener('click', function (e) {
    document.querySelector('.menu__body').classList.toggle('_active');
    document.querySelector('.icon-menu').classList.toggle('menu-open');
    document.body.classList.toggle('lock');
  });
}
