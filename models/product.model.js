const mongoose = require('mongoose');
const { type } = require('os');

const ProductSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: [true, "Por favor, ingrese el nombre del producto"],
        },

        cantidad: {
            type: Number,
            required: true,
            default: 0
        },

        precio: {
            type: Number,
            required: true,
            default: 0
        },

        imagen: {
            type: String,
            required: false
        },
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model("Producto", ProductSchema);

module.exports = Product;