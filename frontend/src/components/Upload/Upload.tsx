import React, { useState } from 'react';
import { useUpload } from './useUpload';


export const Upload: React.FC = () => {
    const [title, setTitle] = useState<string>();
    const [video, setVideo] = useState<File>();
    const [categoryId, setCategoryId] = useState<string>();
    const { categories, UploadVideo } = useUpload();

    const disableButton = !title || !video;


    const addVideo = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        UploadVideo({ title, categoryId: categoryId ? categoryId : categories?.[0]?.id, file: video })
    }

    return (
        <div>
            <form onSubmit={addVideo}>
                <label>
                    title:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>
                    video:
                    <input type="file" accept="video/mp4,video/mov"
                        onChange={(e: any) => setVideo(e.target.files[0])} />
                </label>

                <label>
                    category:
                    <select value={categoryId} onChange={(e: any) => setCategoryId(e.target.value)}>
                        {categories?.map((category: any) => {
                            return <option className="player-selection" key={category.id} value={category.id}>{category.name}</option>
                        })}
                    </select>
                </label>

                <input type="submit" value="Submit" disabled={disableButton} />
            </form>
        </div>
    )
}