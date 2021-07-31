const mongoose = require('mongoose');
const Meal = require('../models/meal');
const meals = require('./meals')

mongoose.connect('mongodb://localhost:27017/menuApp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error:'));
db.once('open', () => {
    console.log('Database Connected')
});

const seedDB = async () => {
    await Meal.deleteMany({})
    for(let i = 0; i < meals.length; i++){
        const meal = new Meal ({
            name: `${meals[i].name}`,
            season: `${meals[i].season}`,
            instructions: `${meals[i].instructions}`,
            image: `${meals[i].image}`,
            URL: `${meals[i].URL}`,
            ingredients: meals[i].ingredients
        })
        await meal.save()
    } 
}

seedDB().then(() => {
    console.log('Database seeded')
    mongoose.connection.close();
    console.log('Database Closed')
})


