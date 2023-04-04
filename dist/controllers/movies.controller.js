"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.getOne = exports.getAll = void 0;
const movies_model_1 = __importDefault(require("../models/movies.model"));
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movie = yield movies_model_1.default.find({}).limit(100);
        res.json({ status: true, movie });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.getAll = getAll;
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    try {
        const movie = yield movies_model_1.default.findById({ _id });
        res.json({ status: true, movie });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.getOne = getOne;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movie = new movies_model_1.default(req.body);
        const savedMovie = yield movie.save();
        res.json({ status: true, savedMovie });
    }
    catch (error) {
        res.json({ status: false, message: error });
    }
});
exports.create = create;
