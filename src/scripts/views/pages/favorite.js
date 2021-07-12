/* eslint-disable no-console */
import FavoriteRestaurantIdb from '../../data/restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="content">
    <h2 class="content-heading">Your Favorited Restaurant</h2>
    <div id="posts" class="posts">

    </div>
  </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#posts');

    if (restaurants.length === 0) {
      restaurantContainer.innerHTML = `
        <div class="fav-not-found"> You don't have any Favorite Cafe or Restaurant</div>
      `;
    }
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
