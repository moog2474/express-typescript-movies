import {Schema, Types, model} from "mongoose";

interface IMovie {
    plot: string;
    genres: string[];
    runtime: number;
    cast: string[];
    title: string;
    countries: string[];
    released: string;
    directors: string[];
    type: string;
    imdb: {
        rating: number;
        votes: number;
        id: number
    }
}

const movieSchema = new Schema<IMovie>({
    plot: {type: String, required: true},
    genres: {type: [String], required: true},
    runtime: {type: Number, requred: true},
    cast: {type: [String], required: true},
    title: {type: String, required: true},
    countries: {type:[String], required: true},
    released: {type: String, required: true},
    directors: {type: [String]},
    type: {type:String},
    imdb: {
        rating: {type: Number},
        votes: {type: Number},
        id: {type: Number}
    }
})


const Movie = model<IMovie>("movies", movieSchema);

export default Movie;