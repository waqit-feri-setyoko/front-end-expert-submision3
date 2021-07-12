/* eslint-disable no-undef */
const assert = require('assert');

Feature('unLiking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const firstCondition = 'You don\'t have any Favorite Cafe or Restaurant';

Scenario('unliking one restaurant', async ({ I }) => {
  I.see(firstCondition, '.content');

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

  // mengklik card restaurant yg ada di fav
  I.click('.post-item');

  // mengunlike restaurant yang ada di fav
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // kembali ke halaman fav
  I.amOnPage('/#/favorite');
  I.seeElement('.content');
  const noFavRestaurant = await I.grabTextFrom('.fav-not-found');

  // mencek halaman fav dan berhasil menghapus (unlike)
  assert.strictEqual(noFavRestaurant, firstCondition);
});
