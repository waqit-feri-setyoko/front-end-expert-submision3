/* eslint-disable no-console */
/* eslint-disable global-require */
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import Loading from '../templates/loading';

const Home = {
  async render() {
    return `
    <div id="loading"></div>
    <div class="main">
      <section class="content" id="content">
        <h2 class="content-heading" tabindex="0">Explore Restaurant</h2>
        <div class="posts" id="posts">
        </div>
      </section>
    </div>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    const main = document.querySelector('.main');
    loading.innerHTML = Loading();
    main.style.display = 'none';
    const restaurantContainer = document.querySelector('#posts');
    restaurantContainer.innerHTML = '';

    try {
      const restaurants = await RestaurantSource.listRestaurants();
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });

      main.style.display = 'block';
      loading.style.display = 'none';
    } catch (error) {
      main.style.display = 'block';
      loading.style.display = 'none';
      restaurantContainer.innerHTML = `Error: ${error}, swipe up to refresh!`;
    }
  },
};

export default Home;
