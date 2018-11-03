const Products = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        docTitle: 'Add products',
        path: '/admin/add-product'
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Products(req.body.title)
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Products.fetchAll((products) => {
        res.render('shop', {
            prods: products,
            docTitle: 'My Shop',
            path:'/'});
    });
};