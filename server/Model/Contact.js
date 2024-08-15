import { Schema, model } from "mongoose";

const ContactSchema = new Schema(
    {
        Name: {
            type: String,

        },
       
        PhoneNumber: {
            type: String

        },
        Email: { 
            type: String,

        },
        Message: {
            type: String,
        },
        

    }
)
const Contact = model("Contact", ContactSchema);
export default Contact;