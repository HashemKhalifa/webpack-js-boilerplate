import styles from './styles.scss';

const app = document.getElementById('app');

app.insertAdjacentHTML(
  'beforebegin',
  '<p class="' + styles.headline + '">Hello from Webpack JS Boilerplate </p>',
);
