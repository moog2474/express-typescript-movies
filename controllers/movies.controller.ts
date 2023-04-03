import Movie from '../models/movies.model';
import { Request, Response } from 'express';


const getAll = async (req: Request, res: Response) => {
    try {
        const result = await Movie.find().limit(5);
        res.json({ status: true, result })
    }
    catch (err) {
        res.json({ status: false, message: err })
    }

}

export { getAll }