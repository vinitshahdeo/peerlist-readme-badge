const express = require('express'),
  router = express.Router(),
  base64Img = require('base64-img'),
  axios = require('axios'),
  logo = base64Img.base64Sync('./public/images/peerlist.png'), // base64 of Peerlist logo
  PEERLIST_DEFAULT_USERNAME = 'vinitshahdeo',
  LABEL_COLOR = '00aa45',
  BASE_BADGE_URL = 'https://img.shields.io/badge/Peerlist',
  PEERLIST_PROFILE_BASE_URL = 'https://peerlist.io'

  // returns the shields.io URL
  getBadgeURL = (peerlistUsername, badgeStyle = 'flat') => {
    const badgeURL = `${BASE_BADGE_URL}-${peerlistUsername}-brightgreen?link=${getProfileURL(peerlistUsername)}&logo=${logo}&color=${LABEL_COLOR}&style=${badgeStyle}`;
    return badgeURL;
  },

  // return peerlist profile URL
  getProfileURL = (peerlistUsername) => {
    const profileURL = `${PEERLIST_PROFILE_BASE_URL}/${peerlistUsername}`;
    return profileURL;
  },

  // downloads badge in SVG
  downloadBadge = async (badgeURL) => {
    const response = await axios.get(badgeURL),
      svgXml = response.data;
    return svgXml;
  };

/* 
GET /api/:peerlist-username 
*/
router.get('/:id', function(req, res, next) {
  const peerlistUsername = req.params.id,
    badgeStyle = req.query.style,
    peerlistBadgeURL = getBadgeURL(peerlistUsername, badgeStyle);

    downloadBadge(peerlistBadgeURL).then((data) => {
      res.setHeader('content-type', 'image/svg+xml;charset=utf-8');
      res.send(data);
    });
});

/* 
GET /api (default username: vinitshahdeo) 
*/
router.get('/', function(req, res, next) {
  const peerlistUsername = PEERLIST_DEFAULT_USERNAME,
    peerlistBadgeURL = getBadgeURL(peerlistUsername);

    downloadBadge(peerlistBadgeURL).then((data) => {
      res.setHeader('content-type', 'image/svg+xml;charset=utf-8');
      res.send(data);
    });
});


module.exports = router;
