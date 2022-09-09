import { useFetchCategoriesQuery, useAddVideoMutation } from '../../generated/graphql';

export const useUpload = () => {
    const { data: categoryData } = useFetchCategoriesQuery();
    const [uploadVideoMuation] = useAddVideoMutation();

    const UploadVideo = async (data: { title: any; categoryId: any; file: any; }) => {
        try {
            const res = await uploadVideoMuation({
                variables: {
                    title: data.title,
                    categoryId: parseInt(data.categoryId),
                    video: data.file
                }
            })
            alert("Successful");
            console.log("res", res)
        } catch (error) {
            alert("Error Uploading");
            console.log("Error", error)
        }
    }
    return {
        categories: categoryData?.fetchCategories,
        UploadVideo
    }
}