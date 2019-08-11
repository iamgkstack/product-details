import products from '../models/products';


module.exports = {
    fetchProducts: (req, res) => {
        /**
         * I have used limit and skip here hard coded
         * its not a good way but I have used 
         * due to some front-end dependency 
         */
        const limit = 1000;
        const skip = 0;
        try {
            products.find({ }, { _id: 0 }, (err, products) => {
                res.render('products', { data: products });
            })
            .limit(limit)
            .skip(skip);
        }catch(err) {
            throw err;
        }
    },

    fetchTypes: (req, res) => {
        const limit = 1000;
        const skip = 0;
        try{
            products.find({ }, { productType: 1, _id: 0 }, (err, productTypes) => {
                res.render('byType', { data: productTypes });
            })
            .limit(limit)
            .skip(skip);
        }catch(err) {
            throw err;
        }
    },

    fetchByType: (req, res) => {
        const limit = 1000;
        const skip = 0;
        const typeName = req.params.name.replace(/:/g,'') || '';
        try{
            products.find({ productType: typeName }, {_id: 0 }, (err, products) => {
                res.render('products', { data: products });
            })
            .limit(limit)
            .skip(skip);
        }catch(err) {
            throw err;
        }
    }

}