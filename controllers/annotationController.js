const Annotation = require('../models/Annotation');
const calculateArea = require('../utils/calculateArea');
const mongoose = require('mongoose');

exports.createAnnotation = async (req, res) => {
    try {
        const { label, imageId, maskData, annotator } = req.body;
        if (!mongoose.Types.ObjectId.isValid(imageId)) {
            return res.status(400).json({ message: 'Invalid imageId format' });
        }
        const imageObjectId = new mongoose.Types.ObjectId(imageId);
        const area = calculateArea(maskData)
        const annotation = await Annotation.create({ 
            label, 
            imageId: imageObjectId, 
            maskData, 
            area, 
            annotator 
        });

        const response = {
            _id: annotation._id,
            label: annotation.label,
            imageId: annotation.imageId,
            maskData: annotation.maskData,
            area: annotation.area,
            annotator: annotation.annotator,
            createdAt: annotation.createdAt,
            __v: annotation.__v
        };

        return res.status(201).json(response)
    } catch (error) {
        console.error("Error creating annotation:", error); // Log the entire error object

        // Provide more detailed error message in the response
        return res.status(400).json({ 
            message: 'Error while creating annotation', 
            error: error.message || 'Unknown error'
        });
    }
}

exports.searchAnnotations = async (req, res) => {
    try {
        const { id, label, annotator } = req.query;
        const searchCriteria = {};
        if (id) {
            searchCriteria._id = id;
        }
        if (label) {
            searchCriteria.label = label;
        }
        if (annotator) {
            searchCriteria.annotator = annotator;
        }
        const annotations = await Annotation.find(searchCriteria);
        if (annotations.length === 0) {
            return res.status(404).json({ message: 'No annotations found' });
        }
        return res.json(annotations);
    } catch (error) {
        return res.status(404).json({ message: 'No annotations found' });
    }
}

exports.rankAnnotations = async (req, res) => {
    try {

    } catch (error) {
        return res.status(400).json({ message: 'Error while ranking annotations', error });
    }
}