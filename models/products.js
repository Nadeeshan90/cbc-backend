import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        productId : {
            type : String,
            required : true,
            unique : true
        },
        productName : {
            type : String,
            required : true
        },
        altName : {
            type : [String],
            default : [],
            required : true
        },
        description : {
            type : String,
            required : true
        },
        image : {
            type : [String],
            required : true,
            default : []
        },
        price : {
            type : String,
            required : true
        },
        labelledPrice : {
            type : String,
            required : true
        }
    }
)

const Product = mongoose.model ("Product", productSchema);
export default Product
