import { buildSchema } from "graphql"

const schema = buildSchema(`
    
    scalar Upload

    type Video {
        id: Int,
        fileLocation: String,
        title: String
    }


    type Category {
        id: Int,
        name: String
    }

    type VideoData {
        id : Int,
        fileName:String,
        fileLocation:String,
        thumbNails:[String],
        title:String,
        category:Category
    }

    type Mutation {
        addVideo(video: Upload!, title: String, categoryId : Int): Video
    }


    type Query {
        findVideos : [VideoData]
        fetchCategories : [Category]
    }
`)


export default schema;