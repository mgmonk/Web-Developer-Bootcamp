const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cat_app', {useNewUrlParser: true});
const db = mongoose.connection;

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

const Cat = mongoose.model("Cat", catSchema);

db.once('open', () => console.log('Connected!'));

// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "evil"
// });

// george.save((err, cat) => {
//     if(err) {
//         console.log("Error.");
//     } else {
//         console.log("Cat saved to Db");
//         console.log(cat);
//     }
// });

Cat.find({}, (err, cats) => {
    if(err) {
        console.log(err);
    } else {
        console.log(cats);
    }
})