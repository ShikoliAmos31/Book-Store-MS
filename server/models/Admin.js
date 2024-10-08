import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: true, required: true}
})

const adminModel = mongoose.model('Admin', adminSchema)
export {adminModel as Admin}