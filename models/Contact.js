import mongoose from "mongoose";

const ContactSchema= new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
        },
        email : {
            type : String,
            required : true,
        },
        info: {
            type : String,
        }
    }
);

const Contact= mongoose.model("Contact", ContactSchema);
export default Contact;