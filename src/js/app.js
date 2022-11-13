import News from './News';

const news = new News(document.querySelector('section.news'));
news.init();

(async () => {
  try {
    if (navigator.serviceWorker) {
      await navigator.serviceWorker.register('/src/service-worker.js');
    }
  } catch (e) {
    console.log(e);
  }
});
