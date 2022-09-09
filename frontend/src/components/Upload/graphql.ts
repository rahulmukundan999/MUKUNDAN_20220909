import { gql } from '@apollo/client';

export const FETCH_CATEGORIES = gql`
  query fetchCategories {
    fetchCategories {
       id
       name
    }
  }
`;




export const ADD_VIDEOS = gql`
  mutation addVideo($video: Upload!,$title: String,$categoryId: Int) {
    addVideo(video : $video,title : $title,categoryId : $categoryId) {
        id
        title
        fileLocation
    }
  }
`;