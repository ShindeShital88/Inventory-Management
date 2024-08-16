import { Schema, model } from "mongoose";

const SignSchema =new Schema(
    {
        UserName: {
            type: String,
          
        },
        EmailID: {
            type: String,
           
        },
        Password: {
            type: String
        },
        
       Address: {
                type:String
            },




            
    },

)
const Sign =model("Sign",SignSchema)
export default Sign;
