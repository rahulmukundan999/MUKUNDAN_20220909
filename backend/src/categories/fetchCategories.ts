import PrismaDb from '../config/database';

const fetchCategories = async (): Promise<object[]> => {
    const categories = await PrismaDb.categories.findMany({});
    return categories;
}

export default fetchCategories;