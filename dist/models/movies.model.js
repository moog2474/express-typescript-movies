"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const movieSchema = new mongoose_1.Schema({
    plot: { type: String, required: true },
    genres: { type: [String], required: true },
    runtime: { type: Number, requred: true },
    cast: { type: [String], required: true },
    title: { type: String, required: true },
    countries: { type: [String], required: true },
    released: { type: String, required: true },
    directors: { type: [String] },
    type: { type: String },
    imdb: {
        rating: { type: Number },
        votes: { type: Number },
        id: { type: Number }
    }
});
const Movie = (0, mongoose_1.model)("movies", movieSchema);
exports.default = Movie;
