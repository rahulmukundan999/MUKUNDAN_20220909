"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var schema = (0, graphql_1.buildSchema)("\n    \n    scalar Upload\n\n    type Video {\n        id: Int,\n        fileLocation: String,\n        title: String\n    }\n\n\n    type Category {\n        id: Int,\n        name: String\n    }\n\n    type VideoData {\n        id : Int,\n        fileName:String,\n        fileLocation:String,\n        thumbNails:[String],\n        title:String,\n        category:Category\n    }\n\n    type Mutation {\n        addVideo(video: Upload!, title: String, categoryId : Int): Video\n    }\n\n\n    type Query {\n        findVideos : [VideoData]\n        fetchCategories : [Category]\n    }\n");
exports.default = schema;
