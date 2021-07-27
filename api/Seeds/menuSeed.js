const mongoose = require('mongoose');
const Menu = require('../models/menu');

mongoose.connect('mongodb://localhost:27017/menuApp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error:'));
db.once('open', () => {
    console.log('Database Connected...')
});

const seedDB = async () => {
    await Menu.deleteMany({})
    
    const menu = new Menu ({
        name: 'July #1',  
    })
    await menu.save()
    
}

seedDB().then(() => {
    console.log('Database seeded...')
    mongoose.connection.close();
})