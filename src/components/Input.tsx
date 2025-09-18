import type {ChangeEvent} from "react";

type InputPropsType = {
    setTitle: (e: string) => void
    title: string
}

export const Input = (props: InputPropsType) => {


    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }

    return (
        <input value={props.title} onChange={onChangeInputHandler}/>
    );
};
// ChangeEvent<HTMLInputElement>
