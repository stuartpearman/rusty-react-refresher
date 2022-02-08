import axios from 'axios';
import cache from 'memory-cache';

export default async function handler (req, res) {
    const url = 'https://opentdb.com/api.php?amount=10&category=10';
    const cachedResponse = cache.get(url);
    try {
        if (cachedResponse) {
            res.status(200).json(cachedResponse);
        } else {
            const hours = 24;
            const { data, status } = await axios.get(url);
            cache.put(url, data.results, hours * 1000 * 60 * 60);
            res.status(200).json(data.results);
        }
    } catch (error) {
        console.log(error);
    }
};