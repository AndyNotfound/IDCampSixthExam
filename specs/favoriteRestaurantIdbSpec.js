/* eslint-disable max-len */
import {itActsAsFavoriteRestaurantModel} from './contract/favoriteRestaurantContract';
import FavoriteRestaurant from '../src/scripts/data/favorite-restaurant';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurant.getAllRestaurants()).forEach(async (movie) => {
      await FavoriteRestaurant.deleteRestaurant(movie.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurant);
});
