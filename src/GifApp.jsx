import { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifApp</h1>
            <AddCategory
                onNewCategory={event => onAddCategory(event)}
            />
            {
                categories.map((category) => (<GifGrid key={category} category={category}/>))
            }
        </>
    )
}
