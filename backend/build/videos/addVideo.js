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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = require("path");
var fluent_ffmpeg_1 = __importDefault(require("fluent-ffmpeg"));
var uniqueString_1 = require("../utils/uniqueString");
var database_1 = __importDefault(require("../config/database"));
var supportedVideoType = function (type) {
    if (type === "mp4" || type === "mov") {
        return true;
    }
    return false;
};
var storeFS = function (stream, filename, type) {
    var uploadDir = (0, path_1.resolve)(__dirname, '../../public/VideoLibrary');
    var path = "".concat(uploadDir, "/").concat(filename, ".").concat(type);
    var location = "".concat(process.env.URL, "/static/VideoLibrary/").concat(filename, ".").concat(type);
    return new Promise(function (resolve, reject) {
        return stream.on('error', function (error) {
            if (stream.truncated) {
                fs_1.default.unlinkSync(path);
            }
            reject(error);
        }).pipe(fs_1.default.createWriteStream(path)).on('error', function (error) { return reject(error); }).on('finish', function () { return resolve({ path: location }); });
    });
};
var extractThumbnail = function (fileLocation, filename) { return __awaiter(void 0, void 0, void 0, function () {
    var size, uploadDir, thumbnails, i, path, location;
    return __generator(this, function (_a) {
        size = ["64x64", "128x128", "256x256"];
        uploadDir = (0, path_1.resolve)(__dirname, '../../public/VideoThumbnails');
        thumbnails = [];
        for (i = 0; i < size.length; i++) {
            path = "".concat(uploadDir, "/thumbnail_").concat(size[i]);
            location = "".concat(process.env.URL, "/static/VideoThumbnails/thumbnail_").concat(size[i]);
            (0, fluent_ffmpeg_1.default)(fileLocation).screenshots({
                count: 1,
                size: size[i],
                folder: path,
                filename: "".concat(filename, ".jpg")
            });
            thumbnails.push("".concat(location, "/").concat(filename, ".jpg"));
        }
        return [2 /*return*/, thumbnails];
    });
}); };
var addVideo = function (args) { return __awaiter(void 0, void 0, void 0, function () {
    var title, categoryId, _a, filename, mimetype, createReadStream, type, stream, uniqueFileName, pathObj, fileLocation, thumbNails, videoData;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                title = args.title, categoryId = args.categoryId;
                return [4 /*yield*/, args.video.file];
            case 1:
                _a = _b.sent(), filename = _a.filename, mimetype = _a.mimetype, createReadStream = _a.createReadStream;
                type = mimetype.split('/').pop();
                if (!supportedVideoType(type)) {
                    throw new Error('Invalid video type');
                }
                stream = createReadStream();
                uniqueFileName = (0, uniqueString_1.generateUniqueString)();
                return [4 /*yield*/, storeFS(stream, uniqueFileName, type)];
            case 2:
                pathObj = _b.sent();
                fileLocation = pathObj.path;
                return [4 /*yield*/, extractThumbnail(fileLocation, uniqueFileName)];
            case 3:
                thumbNails = _b.sent();
                return [4 /*yield*/, database_1.default.videos.create({
                        data: {
                            fileName: filename,
                            fileLocation: fileLocation,
                            thumbNails: thumbNails,
                            title: title,
                            categoryId: categoryId,
                        }
                    })];
            case 4:
                videoData = _b.sent();
                return [2 /*return*/, {
                        id: videoData.id,
                        fileLocation: videoData.fileLocation,
                        title: videoData.title
                    }];
        }
    });
}); };
exports.default = addVideo;
