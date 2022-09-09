import { Prisma } from '@prisma/client'
import PrismaDb from './database';

const categoriesData: Prisma.CategoriesCreateInput[] = [{
    name: "Exercise",
}, {
    name: "Education",
}, {
    name: "Recipe",
}]

const seed = async (): Promise<void> => {
    console.log(`Start seeding ...`)
    const categoriesLength = await PrismaDb.categories.count({});
    if (categoriesLength > 0) {
        console.log(`Seeding finished.`)
        return
    }
    await PrismaDb.categories.createMany({ data: categoriesData })
    console.log(`Seeding finished.`)
}


export default seed;