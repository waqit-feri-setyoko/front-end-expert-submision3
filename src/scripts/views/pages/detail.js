import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../data/restaurant-idb';
import Loading from '../templates/loading';

const Detail = {
  async render() {
    return `
    <div id="loading"></div>
    <div class="main">
      <div class="details" id="details">
        <h2 class="content-heading"> Detail Restaurant </h2>
      </div>
      <div id="likeButtonContainer"></div>
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailContainer = document.querySelector('#details');
    const loading = document.querySelector('#loading');
    const main = document.querySelector('.main');
    loading.innerHTML = Loading();
    main.style.display = 'none';

    try {
      const restaurant = await RestaurantSource.detailRestaurant(url.id);
      detailContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant,
      });

      main.style.display = 'block';
      loading.style.display = 'none';
    } catch (error) {
      detailContainer.innerHTML = `Error: ${error}, swipe up to refresh!`;
      main.style.display = 'block';
      loading.style.display = 'none';
    }
  },
};

export default Detail;
