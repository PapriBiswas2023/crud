import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true,trim: true, index: true },
    password: { type: String, required: true , trim: true }
},{
    timestamps: true
});

//export default mongoose.model('User', userSchema);
export const User=mongoose.model("User",userSchema);

