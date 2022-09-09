import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type Category = {
  __typename?: 'Category';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addVideo?: Maybe<Video>;
};


export type MutationAddVideoArgs = {
  categoryId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  video: Scalars['Upload'];
};

export type Query = {
  __typename?: 'Query';
  fetchCategories?: Maybe<Array<Maybe<Category>>>;
  findVideos?: Maybe<Array<Maybe<VideoData>>>;
};

export type Video = {
  __typename?: 'Video';
  fileLocation?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type VideoData = {
  __typename?: 'VideoData';
  category?: Maybe<Category>;
  fileLocation?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  thumbNails?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
};

export type FindVideosQueryVariables = Exact<{ [key: string]: never; }>;


export type FindVideosQuery = { __typename?: 'Query', findVideos?: Array<{ __typename?: 'VideoData', id?: number | null, fileLocation?: string | null, fileName?: string | null, title?: string | null, thumbNails?: Array<string | null> | null, category?: { __typename?: 'Category', id?: number | null, name?: string | null } | null } | null> | null };

export type FetchCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchCategoriesQuery = { __typename?: 'Query', fetchCategories?: Array<{ __typename?: 'Category', id?: number | null, name?: string | null } | null> | null };

export type AddVideoMutationVariables = Exact<{
  video: Scalars['Upload'];
  title?: InputMaybe<Scalars['String']>;
  categoryId?: InputMaybe<Scalars['Int']>;
}>;


export type AddVideoMutation = { __typename?: 'Mutation', addVideo?: { __typename?: 'Video', id?: number | null, title?: string | null, fileLocation?: string | null } | null };


export const FindVideosDocument = gql`
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

/**
 * __useFindVideosQuery__
 *
 * To run a query within a React component, call `useFindVideosQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindVideosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindVideosQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindVideosQuery(baseOptions?: Apollo.QueryHookOptions<FindVideosQuery, FindVideosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindVideosQuery, FindVideosQueryVariables>(FindVideosDocument, options);
      }
export function useFindVideosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindVideosQuery, FindVideosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindVideosQuery, FindVideosQueryVariables>(FindVideosDocument, options);
        }
export type FindVideosQueryHookResult = ReturnType<typeof useFindVideosQuery>;
export type FindVideosLazyQueryHookResult = ReturnType<typeof useFindVideosLazyQuery>;
export type FindVideosQueryResult = Apollo.QueryResult<FindVideosQuery, FindVideosQueryVariables>;
export const FetchCategoriesDocument = gql`
    query fetchCategories {
  fetchCategories {
    id
    name
  }
}
    `;

/**
 * __useFetchCategoriesQuery__
 *
 * To run a query within a React component, call `useFetchCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<FetchCategoriesQuery, FetchCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchCategoriesQuery, FetchCategoriesQueryVariables>(FetchCategoriesDocument, options);
      }
export function useFetchCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchCategoriesQuery, FetchCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchCategoriesQuery, FetchCategoriesQueryVariables>(FetchCategoriesDocument, options);
        }
export type FetchCategoriesQueryHookResult = ReturnType<typeof useFetchCategoriesQuery>;
export type FetchCategoriesLazyQueryHookResult = ReturnType<typeof useFetchCategoriesLazyQuery>;
export type FetchCategoriesQueryResult = Apollo.QueryResult<FetchCategoriesQuery, FetchCategoriesQueryVariables>;
export const AddVideoDocument = gql`
    mutation addVideo($video: Upload!, $title: String, $categoryId: Int) {
  addVideo(video: $video, title: $title, categoryId: $categoryId) {
    id
    title
    fileLocation
  }
}
    `;
export type AddVideoMutationFn = Apollo.MutationFunction<AddVideoMutation, AddVideoMutationVariables>;

/**
 * __useAddVideoMutation__
 *
 * To run a mutation, you first call `useAddVideoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddVideoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addVideoMutation, { data, loading, error }] = useAddVideoMutation({
 *   variables: {
 *      video: // value for 'video'
 *      title: // value for 'title'
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useAddVideoMutation(baseOptions?: Apollo.MutationHookOptions<AddVideoMutation, AddVideoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddVideoMutation, AddVideoMutationVariables>(AddVideoDocument, options);
      }
export type AddVideoMutationHookResult = ReturnType<typeof useAddVideoMutation>;
export type AddVideoMutationResult = Apollo.MutationResult<AddVideoMutation>;
export type AddVideoMutationOptions = Apollo.BaseMutationOptions<AddVideoMutation, AddVideoMutationVariables>;