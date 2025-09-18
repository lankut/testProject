import {type ChangeEvent, useState} from "react";

type Props = {
    onClick: (title: string) => void;
}

export const FullInput = (props: Props) => {
    // let value = ''

    const [title, setTitle] = useState('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    // const onClickButtonHandler = (val: MouseEventHandler<HTMLButtonElement>) => {
    //     // if (!val) return
    //     setTitle(val)
    // }
    const onClickButtonHandler = () => {
        props.onClick(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+
            </button>
        </div>
    );
};