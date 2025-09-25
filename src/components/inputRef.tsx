import { useRef } from "react"

type InputRefPropsType = {
    setTitle: (title: string) => void
    titleRef: string
}


export const InputRef = (props: InputRefPropsType) => {
    const inputRef = useRef<HTMLInputElement>(null)

const onChangeHandler = ()=>{
    if (inputRef.current) {
        props.setTitle(inputRef.current.value)
    }
}

    return (
        <input value={props.titleRef} ref={inputRef} onChange={onChangeHandler}/>
    )

}