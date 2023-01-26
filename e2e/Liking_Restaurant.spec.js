/* eslint-disable new-cap */
const assert = require('assert');

Feature('Favorite Restaurant');

Before(({I}) => {
  I.amOnPage('#/favorite');
});

Scenario('liking one restaurant', async ({I}) => {
  I.seeElement('restaurant-list#article-container.article-container');
  I.dontSeeElement('restaurant-item');
  I.amOnPage('');
  I.seeElement('.detail a');
  const restaurant = locate('.detail a').first();
  const restaurantText = await I.grabTextFrom(restaurant);
  I.click(restaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('#/favorite');
  I.seeElement('restaurant-item');
  const likedRestaurantText = await I.grabTextFrom('.detail a');

  assert.strictEqual(restaurantText, likedRestaurantText);
});

Scenario('unliking one restaurant', async ({I}) => {
  I.dontSeeElement('restaurant-item');
  I.amOnPage('');
  I.seeElement('.detail a');
  I.click(locate('.detail a').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('#/favorite');
  I.seeElement('restaurant-item');
  I.seeElement('.detail a');
  I.click(locate('.detail a').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('#/favorite');
  I.dontSeeElement('restaurant-item');
});
