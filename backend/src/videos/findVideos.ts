import PrismaDb from '../config/database';

const findVideos = async (): Promise<object[]> => {
    const videos = await PrismaDb.videos.findMany({
        include: {
            category: true
        }
    });
    return videos;
}

export default findVideos;