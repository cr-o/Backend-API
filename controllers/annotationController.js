const Annotation = require('../models/Annotation');
const calculateArea = require('../utils/calculateArea');


exports.createAnnotation = async (req, res) => {
    try {
        const {label, maskData, annotator} = req.body;
        const area = calculateArea(maskData)
        const annotation = await Annotation.create({ label, maskData, area, annotator });
        return res.status(201).json(annotation)
    } catch (error) {
        return res.status(400).json({ message: 'Error while creating annotation', error })
}

exports.searchAnnotations = async (req, res) => {
    try {

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