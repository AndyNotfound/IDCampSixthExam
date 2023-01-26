/* eslint-disable max-len */
import * as TestFactories from './helpers/testFactories';
import FavoriteRestaurant from '../src/scripts/data/favorite-restaurant';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="like"></div>';
};

describe('Unliking A restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurant.putRestaurant({id: 1});
  });

  afterEach(async () => {
    await FavoriteRestaurant.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1});

    expect(
        document.querySelector('[aria-label="unlike this restaurant"]'),
    ).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1});

    expect(
        document.querySelector('[aria-label="like this restaurant"]'),
    ).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1});

    document
        .querySelector('[aria-label="unlike this restaurant"]')
        .dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({id: 1});

    // hapus dulu film dari daftar film yang disukai
    await FavoriteRestaurant.deleteRestaurant(1);

    // kemudian, simulasikan pengguna menekan widget batal menyukai film
    document
        .querySelector('[aria-label="unlike this restaurant"]')
        .dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([]);
  });
});
