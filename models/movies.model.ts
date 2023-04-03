import { Schema, Types, model } from "mongoose";

interface IMovie {
    plot: string;
    genres: string[];
    runtime: number;
    cast: string[];
    num_mflix_comments: number;
    poster: string;
    title: string;
    fullplot: string;
    countries: string[];
    released: string;
    directors: string[];
    writers: string[];
    awards: {
        wins: number;
        nominations: number;
        text: string
    };
    lastupdated: string;
    type: string;
    imdb: {
        rating: number;
        votes: number;
        id: number
    }
    year: number;
    tomatoes: {
        viewer: {
            rating: number;
            numReviews: number;
            meter: number
        };
        fresh: number;
        critic: {
            rating: number;
            numReviews: number;
            meter: number
        }
        rotten: number;
        lastUPdated: number
    }
}

const movieSchema = new Schema<IMovie>({
    plot: { type: String, required: true },
    genres: { type: [String], required: true },
    runtime: { type: Number, requred: true },
    cast: { type: [String], required: true },
    num_mflix_comments: Number,
    poster: String,
    title: { type: String, required: true },
    fullplot: String,
    countries: { type: [String], required: true },
    released: { type: String, required: true },
    directors: [String],
    writers: [String],
    awards: {
        wins: Number,
        nominations: Number,
        text: String
    },
    lastupdated: String,
    type: String,
    imdb: {
        rating: Number,
        votes: Number,
        id: Number
    },
    year: Number,
    tomatoes: {
        viewer: {
            rating: Number,
            numReviews: Number,
            meter: Number
        },
        fresh: Number,
        critic: {
            rating: Number,
            numReviews: Number,
            meter: Number
        },
        rotten: Number,
        lastUPdated: Date
    }
})


const Movie = model<IMovie>("movies", movieSchema);

export default Movie;