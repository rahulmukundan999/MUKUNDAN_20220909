"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var addVideo_1 = __importDefault(require("./addVideo"));
var findVideos_1 = __importDefault(require("./findVideos"));
var root = {
    addVideo: addVideo_1.default,
    findVideos: findVideos_1.default
};
exports.default = root;
