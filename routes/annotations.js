const express = require('express')
const router = express.Router()
const annotationController = require('../controllers/annotationController')

router.post('/', annotationController.createAnnotation) // save annotation
router.get('/search', annotationController.searchAnnotations) // search by id, label, or annotator
router.get('/rank', annotationController.rankAnnotations) // rank annotations by area

module.exports = router
