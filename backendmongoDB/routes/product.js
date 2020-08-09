// const product = mongoose.model('Product', Product);
// var express = express();
// var router = express.route();

// router.get('/', function(req, res, next) {
//     res.status(200).json('Hello!');
//   });

// router.get('/create', (req, res, next)=>{
//   new product({name : 'Aritra'})
//   .save()
//   .then(result=>{
//     console.log('saved!');
//     res.status(200).json(result);
//   })
//   .catch(error=> {
//     console.log(`Some error occurred : ${error}`);
//     res.status(404).json(error);
//   });
// });

// router.get('/:id', (req, res, next)=>{
//   product.findById(req.params.id)
//   .then(result=>{
//     console.log('retrieved!');
//     res.status(200).json(result);
//   })
//   .catch(error=> {
//     console.log(`Some error occurred : ${error}`);
//     res.status(404).json(error);
//   });
// });