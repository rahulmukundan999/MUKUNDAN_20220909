import { gql } from '@apollo/client';
export const FETCH_VIDEOS = gql`
  query findVideos {
    findVideos {
        id
        fileLocation
        fileName
        title
        thumbNails
        category {
            id
            name
        }
    }
  }
`;