exports.getErrorPage = (req, res, next) => {
    res.render('404', {docTitle: '404 - Page not found'});
};