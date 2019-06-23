const express       = require('express'),
      bodyParser    = require('body-parser'),
      mongoose      = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/yelp_camp', {useNewUrlParser: true});
const db = mongoose.connection;

// db setup
const campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});  

const Campground = mongoose.model('Campground', campgroundSchema);

db.once('open', () => console.log("Connected."));

// initial array of campgrounds

// let campgrounds = [
//     {name: "Salmon Creek", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},
//     {name: "Granite Hill", image: "https://farm9.staticflickr.com/8422/7842069486_c61e4c6025.jpg"},
//     {name: "Mountain Goats Rest", image: "https://farm3.staticflickr.com/2116/2164766085_0229ac3f08.jpg"},
//     {name: "Salmon Creek", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},
//     {name: "Granite Hill", image: "https://farm9.staticflickr.com/8422/7842069486_c61e4c6025.jpg"},
//     {name: "Mountain Goats Rest", image: "https://farm3.staticflickr.com/2116/2164766085_0229ac3f08.jpg"},
//     {name: "Salmon Creek", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},
//     {name: "Granite Hill", image: "https://farm9.staticflickr.com/8422/7842069486_c61e4c6025.jpg"},
//     {name: "Mountain Goats Rest", image: "https://farm3.staticflickr.com/2116/2164766085_0229ac3f08.jpg"}
// ];

// seed db with the collection of campgrounds above

// campgrounds.forEach((camp) => {
//     Campground.create({name: camp.name, image: camp.image});
// })

// routes
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('landing');
});

app.get('/campgrounds', (req, res) => {
    Campground.find({}, (err, campgrounds) => {
        if(err) {
            console.log('Error');
        } else {
            res.render('campgrounds', {campgrounds: campgrounds});
        }
    });    
});

app.post('/campgrounds', (req, res) => {
    // get data from form and add to array
    let name = req.body.name; 
    let image = req.body.image;
    let newCampground = {name: name, image: image};
    Campground.create(newCampground, (err, newlyCreated) => {
        if(err) {
            console.log("Error");
        } else {
            // redirect back to campgrounds route
            res.redirect('/campgrounds');
        }
    })
});

app.get('/campgrounds/new', (req, res) => {
    res.render('new');
});

app.listen(3000, 'localhost', () => {
    console.log("The YelpCamp server has started.");
});