const mongoose = require('mongoose');
// mongoose.connect('mongodb url');
/*
create schema
*/
const ProblemSchema = mongoose.Schema({
    id: Number,
    name: String,
    desc: String,
    difficulty: String
});



/*create Model class with our schem
param: collection name(in DB), Schema
it will connect to the DB collection
*/
const ProblemModel = mongoose.model('problem-collections', ProblemSchema);
// export Model
module.exports = ProblemModel;