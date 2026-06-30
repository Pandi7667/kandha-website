import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  whoAreYou: {
    type: String,
    // required: [true, "Name is required."],
    trim: true,
    // minLength: [2, "Name must be larger than 2 characters"],
    // maxLength: [50, "Name must be lesser than 50 characters"],
  },

  message: {
    type: String,
    // required: [true, "Messaage is required"],
  },

  file: {
    type: String,
  },

  name: {
    type: String,
    // required: [true, "Name is required"],
  },

  phoneNumber: {
    type: String,
    // required: [true, "Phone number is required"],
  },

  email: {
    type: String,
    // required: [true, "Email is required."],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },

  country: {
    type: String,
    // required: [true, "Country is required."],
  },

  city: {
    type: String,
    // required: [true, "city is required"],
  },

  zipCode: {
    type: String,
    // required: [true, "zipCode is required"],
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
