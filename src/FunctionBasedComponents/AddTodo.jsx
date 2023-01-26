import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const AddTodo = (props) => {
    const [currentTaskName, setcurrentTaskName] = React.useState('')
    // manipulating dom
    const inputRef=React.useRef(null)

    // getting the values from the input box
    const onChangeHandler = (e) => {
        setcurrentTaskName(e.target.value)
    }

    const onSaveHandler = () => {
        let inputValue =inputRef.current.value
        //handling errors if there is no value in input box
        if (inputValue === "") {
            alert(" Add something ...")
        } else {
            props.callback(currentTaskName)
            console.log(inputRef.current.value)
            inputRef.current.value=''
        }

    }
    return (
        <>
            <section id='add-todo'>
                {/* add todo input goes here */}
                <InputGroup className="mb-3 mt-4">
                    <Form.Control
                        placeholder="Add Tasks"
                        aria-describedby="basic-addon2" autoComplete='off'
                         ref={inputRef} onChange={onChangeHandler}
                    />
                    <Button onClick={onSaveHandler} variant="outline-secondary" id="button-addon2" >
                        Save
                    </Button>
                </InputGroup>
            </section>
        </>
    )
}

export default AddTodo