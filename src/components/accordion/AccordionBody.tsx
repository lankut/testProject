type AccordionBodyTypeProps = {
    accordion: boolean
}

export const AccordionBody = (props: AccordionBodyTypeProps) => {

    return (
        <>
            {props.accordion ? <span></span> :
                <ul style={{ listStyleType: 'none' }}>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            }
        </>
    )
}