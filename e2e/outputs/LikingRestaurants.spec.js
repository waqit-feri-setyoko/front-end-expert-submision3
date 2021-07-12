/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
const assert = require('assert');

Feature('Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const firstCondition = 'You don\'t have any Favorite Cafe or Restaurant';

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('.content');
  I.see(firstCondition, '.fav-not-found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(firstCondition, '.fav-not-found');

  I.amOnPage('/');

  // melihat card restaurant pertama dan mengkliknya ke detail
  I.seeElement('.detail');
  const firstCard = locate('.post-item').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  // melike restaurant di detail
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // kembali ke halaman fav dan membandingakan dg restaurant yg diklik
  I.amOnPage('/#/favorite');
  I.seeElement('.posts');
  const likedCardTitle = await I.grabTextFrom('.post-item');

  assert.strictEqual(firstCardTitle, likedCardTitle);
});
