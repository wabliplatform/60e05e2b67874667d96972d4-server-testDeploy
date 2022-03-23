
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = new Schema({
Underscoreid:String , 


fName:String 



})

module.exports = {
  Form : mongoose.model('form', formSchema),
}

