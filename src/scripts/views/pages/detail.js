/* eslint-disable indent */
/* eslint-disable new-cap */
/* eslint-disable max-len */
import UrlParser from '../../routes/url-parser';
import RestaurantDataSource from '../../data/restaurant-data';
import {createDetailTemplate} from '../templates/create-template';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurant from '../../data/favorite-restaurant';

const Detail = {
  async render() {
    return `
      <div class="container"></div>
      <div id=like></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDataSource.restaurantDetail(url.id);
    const detailContainer = document.querySelector('.container');
    const template = createDetailTemplate(restaurant.restaurant);
    detailContainer.innerHTML = template;

    const foodList = document.querySelector('#food');
    restaurant.restaurant.menus.foods.map((item) => {
      foodList.innerHTML += `<li>${item.name}</li>`;
    });

    const drinkList = document.querySelector('#drink');
    restaurant.restaurant.menus.drinks.map((item) => {
      drinkList.innerHTML += `<li>${item.name}</li>`;
    });

    const reviewList = document.querySelector('#review-list');
    restaurant.restaurant.customerReviews.map((item) => {
      reviewList.innerHTML += `
        <article class="review-item">
            <p class="review">
                <span class="quote">“</span>${item.review}<span class="quote-rv">”</span>
            </p>
            <p class="name">${item.name}</p>
        </article>
      `;
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#like'),
      favoriteRestaurants: FavoriteRestaurant,
      restaurant: restaurant.restaurant,
    });
  },
};

export default Detail;
