let firstScroll = true;

document.addEventListener('scroll', () => {
  if (!firstScroll || window.location.href.includes('localhost')) return;
  firstScroll = false;
  loadYandexMetrika();
  loadGoogleAnalytics();
  setTimeout(() => loadScript('//code-ya.jivosite.com/widget/y72TBunqyX'), 2000);
});

// Динамическая загрузка файла js
function loadScript(url) {
  const e = document.createElement('script');
  e.src = url;
  document.getElementsByTagName('head')[0].appendChild(e);
}


// Яндрекс Метрика
function loadYandexMetrika() {
  (function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
    m[i].l = 1 * new Date(); k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a);
  }(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym'));
  ym(62680837, 'init', {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
  });
}

// Google Analytics
function loadGoogleAnalytics() {

}
