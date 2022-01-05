import News from '../modal/news.js';

export const getNews = async (req, res) => {
    try {
        const size = Number(req.query.size);
        const skip = Number(req.query.page);
        //console.log(req.query)
        const newsData = await News.find({}).limit(size).skip(size * skip);
        //console.log(newsData)
        res.status(200).json(newsData);
    } catch (error) {
        res.status(500).json(error);
    }
}