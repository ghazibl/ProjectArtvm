import mongoose from 'mongoose';

const produitModel = mongoose.Schema(
    {
        nom: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        prix: {
            type: Number,
            required: true
        },
        quantite: {
            type: Number,
            required: true
        },
        categorie:{
            type: String,
            ref: 'Category',
            required: true
        },
        type:{
            type: String,
            required: false

        },
        couleur:{
            type: String,
            required: false

        },
        epaisseur:{
            type: Number,
            required: true

        },
     
        image : {
            type: String,
            required: true
        },
    }
)
module.exports = mongoose.model("product", produitModel)