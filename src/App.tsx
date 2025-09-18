import {useState} from 'react'
import './App.css'
import {Button} from "./components/Button.tsx";
import {Input} from "./components/Input.tsx";

export type MessageType = {
    message: string
}

function App() {
    const [message, setMessage] = useState<MessageType[]>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
        {message: 'message4'},
    ])
    const [title, setTitle] = useState('')

    const callBack = () => {
        setMessage([{message: title}, ...message])
        setTitle('')
    }


    return (
        <div className="App">
            {/*<FullInput onClick={onClickButtonHandler}/>*/}
            <Input title={title} setTitle={setTitle}/>
            <Button callBack={callBack} name={'Add'}/>

            {/*<div>*/}
            {/*    <input/>*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}
            {message.map((mess, index) => {
                return <div key={index}>
                    {mess.message}
                </div>
            })}
        </div>
    )
}

export default App
