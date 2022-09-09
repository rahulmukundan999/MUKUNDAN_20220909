"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_upload_1 = require("graphql-upload");
var videos_1 = __importDefault(require("../videos"));
var categories_1 = __importDefault(require("../categories"));
var root = __assign(__assign({ Upload: graphql_upload_1.GraphQLUpload }, videos_1.default), categories_1.default);
exports.default = root;
