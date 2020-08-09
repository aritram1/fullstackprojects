class util{
    
    // A utility method to transform each record in the response
    static transform(each){
        return {
                id: each._id,
                name: each.name ? each.name :   'No name',
                price: each.price ? each.price : 0.00,
                costly: each.price > 100 ? 'Yes' : 'No'
        };
    }
}

module.exports = util;