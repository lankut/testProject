import { useRef } from "react"

type InputRefPropsType = {
    setTitle: (title: string) => void
}


export const InputRef = (props: InputRefPropsType) => {
    const inputRef = useRef<HTMLInputElement>(null)

const onChangeHandler = ()=>{
    if (inputRef.current) {
        props.setTitle(inputRef.current.value)
    }
}

    return (
        <input ref={inputRef} onChange={onChangeHandler}/>
    )

}