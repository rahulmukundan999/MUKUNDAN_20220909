import { useFindVideosQuery } from '../../generated/graphql';


export const useHome = () => {
    const { data, error, loading } = useFindVideosQuery();
    return {
        videos: data?.findVideos,
        error: error?.message,
        loading
    }
}