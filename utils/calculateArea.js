function calculateArea (maskData) {
    // RLE format to compress 2d array matrix
    // eg. 3x0 is three consecutive 0s, 2x1 is two consecutive 1s
    // 1 indicates there is a mask pixel being represented 
    const rleFormat = /^(\d+x[01])(,\d+x[01])*$/ // regex to ensure 0 or 1 followed by x, with comma in between
    if (!rleFormat.test(maskData)) {
        throw new Error("Invalid mask data format. Expected format: 'countxvalue,countxvalue,...'")
    }

    const rlePairs = maskData.split(',')
    let area = 0
    rlePairs.forEach(pair => { // get each pair and increment area if 1
        const [count, value] = pair.split('x').map(Number)
        if (value === 1) {
            area += count
        }
    })
    return area
}

module.exports = calculateArea