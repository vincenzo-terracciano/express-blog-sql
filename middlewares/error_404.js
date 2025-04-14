const notFound = (req, res, next) => {
    res.status(404).json({
        error: 404,
        message: 'Not found'
    })
}

module.exports = notFound