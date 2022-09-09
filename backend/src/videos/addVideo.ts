import fs from 'fs';
import { resolve } from 'path';
import ffmpeg from 'fluent-ffmpeg';
import { generateUniqueString } from '../utils/uniqueString'
import PrismaDb from '../config/database';

interface PathObj {
    path: string;
}


const supportedVideoType = (type: string): Boolean => {
    if (type === "mp4" || type === "mov") {
        return true
    }
    return false;
}

const storeFS = (stream: any, filename: string, type: string): Promise<object> => {
    const uploadDir = resolve(__dirname, '../../public/VideoLibrary');
    const path = `${uploadDir}/${filename}.${type}`;
    const location = `http://localhost:${process.env.PORT}/static/VideoLibrary/${filename}.${type}`
    return new Promise((resolve, reject) =>
        stream.on('error', (error: any) => {
            if (stream.truncated) {
                fs.unlinkSync(path);
            }
            reject(error);
        }).pipe(fs.createWriteStream(path)).on('error', (error: any) => reject(error)).on('finish', () => resolve({ path: location }))
    );
}

const extractThumbnail = async (fileLocation: string, filename: string): Promise<string[]> => {
    const size = ["64x64", "128x128", "256x256"]
    const uploadDir = resolve(__dirname, '../../public/VideoThumbnails');
    const thumbnails = [];
    for (let i = 0; i < size.length; i++) {
        const path = `${uploadDir}/thumbnail_${size[i]}`;
        const location = `http://localhost:${process.env.PORT}/static/VideoThumbnails/thumbnail_${size[i]}`
        ffmpeg(fileLocation).screenshots({
            count: 1,
            size: size[i],
            folder: path,
            filename: `${filename}.jpg`
        })
        thumbnails.push(`${location}/${filename}.jpg`)
    }
    return thumbnails;
}

const addVideo = async (args: any): Promise<object> => {
    const { title, categoryId } = args;
    const { filename, mimetype, createReadStream } = await args.video.file;
    const type = mimetype.split('/').pop();
    if (!supportedVideoType(type)) {
        throw new Error('Invalid video type');
    }
    const stream = createReadStream();
    const uniqueFileName = generateUniqueString()
    const pathObj = await storeFS(stream, uniqueFileName, type) as PathObj;
    const fileLocation = pathObj.path;
    const thumbNails = await extractThumbnail(fileLocation, uniqueFileName)
    const videoData = await PrismaDb.videos.create({
        data: {
            fileName: filename,
            fileLocation,
            thumbNails,
            title: title,
            categoryId,
        }
    })
    return {
        id: videoData.id,
        fileLocation: videoData.fileLocation,
        title: videoData.title
    }
}




export default addVideo;