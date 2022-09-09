"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUniqueString = void 0;
var generateUniqueString = function () {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
};
exports.generateUniqueString = generateUniqueString;
