/* eslint-disable indent */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <section class="container-detail">
        <div class="container-picture"> 
        <img class="picture" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
        </div>    
        <ul class="info-detail" tabindex="0">
            <li class="item-detail"><span class="fa fa-store" tittle="restaurant">&emsp; ${restaurant.name}</span></li>
            <li class="item-detail"><span class="fa fa-map-marker-alt" tittle="address">&emsp;&ensp;${restaurant.address}, ${restaurant.city}</span></li>
            <li class="item-detail"><span class="fa fa-tag" tittle="rating">&emsp; ${restaurant.categories.map(
                (categories) => `
                ${categories.name}
                `,
                ).join(',')}
            </span></li>
            <li class="item-detail"><span class="fa fa-star">&emsp; ${restaurant.rating}</span></li>       
        </ul>
    </section>

    <section class="container-menus">
        <h2 class="text-menu" tabindex="0">Menu</h2>
        <div class="inherit-menus">
            <div class="container-foods" tabindex="0">  
                <h3> Foods </h3>
                <ul class="foods">
                    ${restaurant.menus.foods.map(
                        (foods) => ` 
                            <li class="item-food">- ${foods.name}</li>
                        `,
                        ).join('')}
                </ul>
            </div>
            <div class="container-drinks" tabindex="0">
                <h3> Drinks</h3>
                <ul class="drinks">
                ${restaurant.menus.drinks.map(
                    (drinks) => ` 
                        <li class="item-drink">- ${drinks.name}</li>
                    `,
                    ).join('')}
                </ul>
            </div>
        </div>
    </section>

    <section class="container-reviews" tabindex="0">
        <h2 class="text-review">Reviews</h2>
        <div class="reviews">
        ${restaurant.customerReviews.map(
              (customerReviews) => `
                <div class="item-review">
                    <p class="name-review fa fa-user-circle" style="font-size:1.3em;">&nbsp;${customerReviews.name}</p>
                    <p class="date-review">${customerReviews.date}</p>
                    <p class="review"> ${customerReviews.review}</p>
                </div>
              `,
            ).join('')}
        </div>
    </section>
`;

const createRestaurantItemTemplate = (restaurant) => `
<a class="detail" href="${`/#/detail/${restaurant.id}`}">
    <article class="post-item">
        <div class="thumbnail">
            <img class="post-thumbnail lazyload" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
            <span class="post-city"><p> ${restaurant.city}</p></span>
            <div class="container-rating" >
                <i title="rating" class="fa fa-star"></i>
             <span class="post-rating"> ${restaurant.rating}</span>
            </div>
        </div>
        <div class="post-item-content">
            <h3 class="post-tittle">${restaurant.name}</h3>
            <p class="post-description">${restaurant.description} </p>
        </div>
    </article> 
</a>
    
    `;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="unlike">
       <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
  `;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
