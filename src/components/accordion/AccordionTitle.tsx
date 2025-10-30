import type { ActionType, StateType } from "./accordionReducer"
import { TOOGLE_COLLAPSED } from "./accordionReducer"

type AccordionTitleTypeProps = {
    title: string
    dispatch: (type: ActionType) => void
    state: StateType
}

export const AccordionTitle = (props: AccordionTitleTypeProps) => {
    return (
        <h3 onClick={() => props.dispatch({type: TOOGLE_COLLAPSED})}>{props.title}</h3>
    )
}