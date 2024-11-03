const mongoose = require('mongoose');
require('dotenv').config();

const db = async () =>{
    try{
        const conn = await mongoose.connect("mongodb://gagan:QrdONKVj7JpgGkqa@undefined/?replicaSet=atlas-tjulo1-shard-0&ssl=true&authSource=admin");
        console.log("Hello world");
    }
    catch(e){
        console.log(e);
    }
}

module.exports = db;

