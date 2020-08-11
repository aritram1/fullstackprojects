class util{

    // A utility method to transform each record in the response
    static transform(result){
        var records = [];
        console.log('result.length->' + result.length); 
        if(result.length > 0){ 
            for(let each of result){
                records.push(util.transformSingle(each));   
            }
        }
        return records;
    }

    static transformSingle(each){
        return {
            id: each._id,
            name: each.name ? each.name : 'No name',
            price: each.price ? each.price : 0.00,
            costly: each.price > 100 ? 'Yes' : 'No' 
        }
    }

    static log(req){ 
        console.log(`${new Date()} : ${req.method} request received at ${req.path} from ${req.hostname}`);
    }
}

module.exports = util;