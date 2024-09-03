function formatResponse(annotation) {
    return {
        _id: annotation._id,
        label: annotation.label,
        imageId: annotation.imageId,
        maskData: annotation.maskData,
        area: annotation.area,
        annotator: annotation.annotator,
        rank: annotation.rank,
        createdAt: annotation.createdAt,
        __v: annotation.__v
    };
}

module.exports = formatResponse