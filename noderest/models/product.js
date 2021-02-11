// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var productSchema = new mongoose.Schema({

     title: String,
      description:String,
      buttonText: Number,
      img: String,
      cuisine:Array,
      ratings:Number
});

// Return model
module.exports = restful.model('Products', productSchema);
