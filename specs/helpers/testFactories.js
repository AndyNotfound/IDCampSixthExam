import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestaurant from '../../src/scripts/data/favorite-restaurant';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#like'),
    favoriteRestaurants: FavoriteRestaurant,
    restaurant,
  });
};

export {createLikeButtonPresenterWithRestaurant};
