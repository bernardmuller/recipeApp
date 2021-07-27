const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const menuSchema = new Schema ({
    name: String,
    period: Number,
    ingredientsList: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Ingredient'
        }
    ]
});

module.exports = mongoose.model("Menu", menuSchema);