import mongoose, { Schema } from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  message: {
    type: String,
    required: true
  }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;