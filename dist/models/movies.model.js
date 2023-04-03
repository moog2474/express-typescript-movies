"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const movieSchema = new mongoose_1.Schema({
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
});
const Movie = (0, mongoose_1.model)("movies", movieSchema);
exports.default = Movie;
