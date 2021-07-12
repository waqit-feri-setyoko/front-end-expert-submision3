/* eslint-disable new-cap */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/like.css';
import '../styles/detail.css';
import '../styles/responsive.css';
import '../styles/loading.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import swRegister from './utils/sw-resgister';
import App from './views/app';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log(`Service Worker registered! Scope: ${registration.scope}`);
      })
      .catch((err) => {
        console.log(`Service Worker registration failed: ${err}`);
      });
  });
}

const app = new App({
  button: document.querySelector('.menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
