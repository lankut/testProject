import { useState } from "react"
import s from '../select/select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: string) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {
console.log('Select отрисован');

    const [active, setActive] = useState(false)

    const onChangeHandler = () => setActive(!active)
    // const onSetValue = () => props.onChange()

    const onClickItem = (value: any) => {
        props.onChange(value)
        setActive(!active)
    }

    const selectedItem = props.items.find((i) => i.value === props.value)

    return (
        <>
            {/* <select>
                {props.items.map(e => <option value={e.value}>{e.title}</option>)}
            </select> */}
            <div className={s.select} onClick={onChangeHandler}>{selectedItem && selectedItem.title}</div>
            <div className={s.main}>
                {active && props.items.map(el => <div className={s.light} onClick={() => onClickItem(el.value)}>{el.title}</div>)}
            </div>

        </>
    )
}