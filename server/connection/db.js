import mongoose from "mongoose";

const Connection = async () => {
    try {
        const URL = "mongodb+srv://pickup:pickup@cluster0.rah7w.mongodb.net/pickup?retryWrites=true&w=majority";
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log('DB Connected');

    } catch (error) {
        console.log('Error while connecting', error)
    }
}

export default Connection