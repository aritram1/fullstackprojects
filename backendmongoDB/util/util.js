class util{

    // A utility method to transform each record in the response
    static transform(result){
        var records = [];
        if(result.length > 0){
            for(let each of result){
                var record = {
                    id: each._id,
                    name: each.name ? each.name :   'No name',
                    price: each.price ? each.price : 0.00,
                    costly: each.price > 100 ? 'Yes' : 'No'
                }
                records.push(record);
            }
        }
        return records;
    }

    static log(req){
        console.log(`${new Date()} : ${req.method} request received at ${req.path} from ${req.hostname}`);
    }
}

module.exports = util;