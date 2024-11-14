import mongoose from "mongoose";    


const appSchema = new mongoose.Schema({
   title: {
        type: String,
        required: true
    },
   artist: {
        type: String,
        required: true,
        unique: true
    },
   movie: {
        type: String,
        required: true
    },
    year: {
        type: Number,
      required: true
    }
})

const app = mongoose.model("app", appSchema);

export default app;