import { Schema, model } from "mongoose";

const RagisterSchema = new Schema(
    {
        FullName: {
            type: String,

        },
    
        Email: { 
            type: String,

        },
        Mobile: {
            type: String,
        },

      Address:{
        type:String,
      },
      

    }
)
const Ragister = model("Ragister", RagisterSchema);
export default Ragister;