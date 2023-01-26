/* eslint-disable new-cap */
Before(({I}) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one movie', ({I}) => {
  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-list#article-container.article-container');
  I.dontSeeElementInside(
      'restaurant-list#article-container.article-container',
      '*',
  );
  I.amOnPage('/');
});
