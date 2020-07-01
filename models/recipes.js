const mongoose = require('mongoose');

const ingredientSchema = mongoose.Schema({
    ingredient: {type:String,required:true},
    amount: {type:String,required:true},
    units: {type:String,required:true},
    id:{type:Number}
},{_id:false});

const recipeSchema = mongoose.Schema({
    title:{type:String,required:true, unique:true},
    servingSize:{type:String,required:true},
    tte:{type:String,required:true},
    description:{type:String,required:true},
    shortDescription:{type:String},
    ingredients:[ingredientSchema],
    steps:{type:Array,required:true},
    mainImage:{type:String},
    extraImages:{type:String},
    youtube:{type:String},
    videoNotes:{type:String,default:""},
    active:{type:Boolean,default:false},
    featured:{type:Boolean,default:false},
    handle:{type:String,unique:true,required:true}
},{minimize:false});

recipeSchema.methods.serialize = function(){
    return {
        title:this.title,
        servingSize:this.servingSize,
        tte:this.tte,
        description:this.description,
        shortDescription:this.shortDescription,
        ingredients:this.ingredients,
        steps:this.steps,
        mainImage:this.mainImage,
        extraImages:this.extraImages,
        youtube:this.youtube,
        videoNotes:this.videoNotes,
        active:this.active,
        featured:this.featured,
        handle:this.handle
    }
}

const Recipe = mongoose.model("Recipe",recipeSchema);

module.exports = {Recipe};