const mongoose = require('mongoose');
const Schema = mongoose.Schema; // Correcting the import statement

mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('database connected');
  })
  .catch(err => {
    console.error(err);
  });

const ProductSchema = new Schema({ // Correcting the schema creation
  name: {
    type: String, // Correcting the type
    required: true
  },
  price: {
    type: Number // Correcting the type
  }
});

const Products = mongoose.model('Product', ProductSchema);
// const bike = new Products({ name: "Hero", price: 20000 });
// bike.save()
//   .then((data) => {
//     console.log('it worked ');
//     console.log(data);
//   })
//   .catch(err => {
//     console.error(err);
//   });

Products.findOneAndUpdate({name: 'Hero'}, {price:1200000},{new:true})
.then((data) => {
  console.log('it worked ');
  console.log(data);
})
.catch(err => {
  console.error(err);
});
