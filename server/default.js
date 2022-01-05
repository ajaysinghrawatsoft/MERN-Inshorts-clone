import News from './modal/news.js'
import { data } from "./constants/data.js";


const Default = async () => {
    try {
        //await News.deleteMany({});
        await News.insertMany(data);
        console.log('data imported')
    } catch (error) {
        console.log('Error', error.message)
    }
}

export default Default;