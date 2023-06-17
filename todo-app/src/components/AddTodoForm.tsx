import React, { useState } from "react";

interface AddTodoFormProps{
    onAdd: (text: string) => void;
}

const AddTodoForm:React.FC<AddTodoFormProps> = ({onAdd}) =>  {

    const[inputValue, setInputValue] = useState('');

    const handleInputChange= (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>)=>{
        event.preventDefault();

        if(inputValue.trim() !== ''){
            onAdd(inputValue);
            setInputValue('');
        }


    };

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button type="submit">Add Todo</button>
        </form>
        </>
    )
}

export default AddTodoForm;