import Movie from '../models/movies.model';
import { Request, Response } from 'express';


const getAll = async (req: Request, res: Response): Promise<void> => {
    try {
        const movie = await Movie.find({}).limit(100);
        res.json({ status: true, movie })
    }
    catch (err) {
        res.json({ status: false, message: err })
    }
}

const getOne = async (req: Request, res: Response) => {
    const { _id } = req.params
    try {
        const movie = await Movie.findById({ _id });
        res.json({ status: true, movie })

    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const create = async (req: Request, res: Response): Promise<void> => {
    try {
        const movie = new Movie(req.body);
        const savedMovie = await movie.save();
        res.json({ status: true, savedMovie })
    } catch (error) {
        res.json({ status: false, message: error })
    }
};
export { getAll, getOne, create }