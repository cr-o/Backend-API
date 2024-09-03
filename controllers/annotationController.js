const Annotation = require('../models/Annotation')
const calculateArea = require('../utils/calculateArea')
const formatAnnotationResponse = require('../utils/formatResponse')
const mongoose = require('mongoose')

exports.createAnnotation = async (req, res) => {
    try {
        const { label, imageId, maskData, annotator } = req.body;
        if (!mongoose.Types.ObjectId.isValid(imageId)) {
            return res.status(400).json({ message: 'Invalid imageId format' })
        }
        const imageObjectId = new mongoose.Types.ObjectId(imageId)
        const area = calculateArea(maskData)
        const annotation = await Annotation.create({ 
            label, 
            imageId: imageObjectId, 
            maskData, 
            area, 
            annotator 
        })
        const response = formatAnnotationResponse(annotation)
        return res.status(201).json(response)
    } catch (error) {
        console.error("Error creating annotation:", error)
        return res.status(400).json({ 
            message: 'Error while creating annotation', 
            error: error.message || 'Unknown error'
        })
    }
}

exports.searchAnnotations = async (req, res) => {
    try {
        const { id, label, annotator } = req.query
        const searchCriteria = {}
        if (id) {
            searchCriteria._id = id
        }
        if (label) {
            searchCriteria.label = label
        }
        if (annotator) {
            searchCriteria.annotator = annotator
        }
        const annotations = await Annotation.find(searchCriteria);
        if (annotations.length === 0) {
            return res.status(404).json({ message: 'No annotations found' })
        }
        const response = formatAnnotationResponse(annotations);
        return res.json(response)
    } catch (error) {
        return res.status(404).json({ message: 'No annotations found' })
    }
}

exports.rankAnnotations = async (req, res) => {
    try {
        const { annotationId } = req.query
        const annotation = await Annotation.findById(annotationId);
        if (!annotation) {
            return res.status(404).json({ message: 'Annotation not found' });
        }
        const annotations = await Annotation.find({ imageId: annotation.imageId }).sort({ area: -1 }) // get all annotations of the image and sort by area descending
        const rankedAnnotations = annotations.map((annotation, index) => ({ // calculate ranks
            _id: annotation._id,
            rank: index + 1,
        }))
        const annotationToRank = rankedAnnotations.find(annotation => annotation._id.toString() === annotationId)
        const response = {
            rank: annotationToRank.rank,
            totalAnnotations: rankedAnnotations.length,
            area: annotation.area
        }
        return res.status(200).json(response)
    } catch (error) {
        return res.status(400).json({ message: 'Error while ranking annotations', error })
    }
}