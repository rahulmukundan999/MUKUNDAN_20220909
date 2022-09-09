import { GraphQLUpload } from 'graphql-upload'
import videoRoot from '../videos'
import categoryRoot from '../categories'

const root = {
    Upload: GraphQLUpload,
    ...videoRoot,
    ...categoryRoot
}

export default root;