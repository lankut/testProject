import { useState } from 'react'
import './App.css'
import { Button } from "./components/Button.tsx";
import { Input } from "./components/Input.tsx";
import { InputRef } from './components/inputRef.tsx';
import { UncontrolledRating } from './uncontrolledRating.tsx';
import { Accordion } from './components/accordion/accordion.tsx';
import { Select } from './components/select/select.tsx';
import {Clock} from './components/Clock.tsx'

export type MessageType = {
    message: string
}

function App() {
    const [message, setMessage] = useState<MessageType[]>([
        { message: 'message1' },
        { message: 'message2' },
        { message: 'message3' },
        { message: 'message4' },
    ])
    const [title, setTitle] = useState('')
    const [titleRef, setTitleRef] = useState('')

    const callBack = () => {
        setMessage([{ message: title }, ...message])
        setTitle('')
    }

    const callBackRef = () => {
        setMessage([{ message: titleRef }, ...message])
        setTitleRef('')
    }

    const [value, setValue] = useState('2')

    return (
        <div className="App">
            <Clock/>
            {/*<FullInput onClick={onClickButtonHandler}/>*/}
            <Input title={title} setTitle={setTitle} />
            <Button callBack={callBack} name={'Add'} />
            <InputRef setTitle={setTitleRef} titleRef={titleRef} />
            <Button callBack={callBackRef} name={'Add'} />
            {/*<div>*/}
            {/*    <input/>*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}
            {message.map((mess, index) => {
                return <div key={index}>
                    {mess.message}
                </div>
            })}
            <UncontrolledRating />
            <Accordion />
            <Select value={value} onChange={setValue} items={[
                { value: '1', title: 'iPhone6' },
                { value: '2', title: 'iPhone7' },
                { value: '3', title: 'iPhone8' },
                { value: '4', title: 'iPhoneXP' },
                { value: '5', title: 'iPhone15' },
                { value: '6', title: 'iPhone12' },
            ]} />

               
        </div>
    )
}

export default App
