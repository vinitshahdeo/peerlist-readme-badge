const express = require('express'),
  router = express.Router(),
  base64Img = require('base64-img'),
  logo = base64Img.base64Sync('./public/images/peerlist.png'), // base64 of Peerlist logo
  PEERLIST_DEFAULT_USERNAME = 'vinitshahdeo',
  LABEL_COLOR = '00aa45',
  BASE_BADGE_URL = 'https://img.shields.io/badge/Peerlist',
  PEERLIST_PROFILE_BASE_URL = 'https://peerlist.io'

  // returns the shields.io URL
  getBadgeURL = (peerlistUsername, badgeStyle) => {
    const badgeURL = `${BASE_BADGE_URL}-${peerlistUsername}-brightgreen?logo=${logo}&color=${LABEL_COLOR}&style=${badgeStyle}`;
    return badgeURL;
  },

  getProfileURL = (peerlistUsername) => {
    const profileURL = `${PEERLIST_PROFILE_BASE_URL}/${peerlistUsername}`;
    return profileURL;
  };

/* 
GET /:peerlist-username 
*/
router.get('/:id', function(req, res, next) {
  const peerlistUsername = req.params.id,
    badgeStyle = req.query.style,
    peerlistBadgeURL = getBadgeURL(peerlistUsername, badgeStyle),
    peerlistProfileURL = getProfileURL(peerlistUsername);

  res.render('index', { peerlistUsername, peerlistBadgeURL, peerlistProfileURL });
});

/* 
GET / (default username: vinitshahdeo) 
*/
router.get('/', function(req, res, next) {
  const peerlistUsername = PEERLIST_DEFAULT_USERNAME,
    peerlistBadgeURL = getBadgeURL(peerlistUsername),
    peerlistProfileURL = getProfileURL(peerlistUsername);

  res.render('index', { peerlistUsername, peerlistBadgeURL, peerlistProfileURL });
});

module.exports = router;
