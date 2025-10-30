// import { useState } from "react"
import { AccordionTitle } from "./AccordionTitle"
import { AccordionBody } from "./AccordionBody"
import { reducer } from './accordionReducer'
import { useReducer } from "react"

export const Accordion = () => {

    // const [accordion, setAccordion] = useState(true)
    const [state, dispatch] = useReducer(reducer, {collapsed: true})


    return (
        <div>
            <AccordionTitle title={'Меню (скрыть раскрыть)'} dispatch={dispatch} state={state} />
            <AccordionBody state={state} />
        </div>
    )
}





