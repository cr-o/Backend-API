const express = require('express');
const router = express.Router();
const annotationController = require('../controllers/annotationController');

router.post('/', annotationController.createAnnotation);
router.get('/search', annotationController.searchAnnotations); // search by id, label, or annotator
router.get('/rank', annotationController.rankAnnotations);

module.exports = router;