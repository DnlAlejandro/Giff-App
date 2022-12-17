import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState("");

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) =>{

        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        setInputValue('')
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input 
            type="text"
            placeholder="Search gifs"
            value={inputValue}
            onChange={onInputChange}
            />
        </form>
        
    )
}
