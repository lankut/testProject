type AccordionTitleTypeProps = {
    title: string
    setAccordion: (value: boolean) => void
    accordion: boolean
}

export const AccordionTitle = (props: AccordionTitleTypeProps) => {
    return (
        <h3 onClick={() => props.setAccordion(!props.accordion)}>{props.title}</h3>
    )
}