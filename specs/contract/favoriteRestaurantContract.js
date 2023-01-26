/* eslint-disable max-len */
const itActsAsFavoriteRestaurantModel = (FavoriteRestaurant) => {
  it('should return the movie that has been added', async () => {
    FavoriteRestaurant.putRestaurant({id: 1});
    FavoriteRestaurant.putRestaurant({id: 2});

    expect(await FavoriteRestaurant.getRestaurant(1)).toEqual({id: 1});
    expect(await FavoriteRestaurant.getRestaurant(2)).toEqual({id: 2});
    expect(await FavoriteRestaurant.getRestaurant(3)).toEqual(undefined);
  });

  it('should refuse a movie from being added if it does not have the correct property', async () => {
    FavoriteRestaurant.putRestaurant({aProperty: 'property'});

    expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([]);
  });

  it('can return all of the movies that have been added', async () => {
    FavoriteRestaurant.putRestaurant({id: 1});
    FavoriteRestaurant.putRestaurant({id: 2});

    expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([{id: 1}, {id: 2}]);
  });

  it('should remove favorite movie', async () => {
    FavoriteRestaurant.putRestaurant({id: 1});
    FavoriteRestaurant.putRestaurant({id: 2});
    FavoriteRestaurant.putRestaurant({id: 3});

    await FavoriteRestaurant.deleteRestaurant(1);

    expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([{id: 2}, {id: 3}]);
  });

  it('should handle request to remove a movie even though the movie has not been added', async () => {
    FavoriteRestaurant.putRestaurant({id: 1});
    FavoriteRestaurant.putRestaurant({id: 2});
    FavoriteRestaurant.putRestaurant({id: 3});

    await FavoriteRestaurant.deleteRestaurant(4);

    expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([
      {id: 1},
      {id: 2},
      {id: 3},
    ]);
  });
};

export {itActsAsFavoriteRestaurantModel};
