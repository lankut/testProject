import type { StateType } from "./accordionReducer"

type AccordionBodyTypeProps = {
    state: StateType
}

export const AccordionBody = (props: AccordionBodyTypeProps) => {

    return (
        <>
            {props.state.collapsed ? <span></span> :
                <ul style={{ listStyleType: 'none' }}>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            }
        </>
    )
}