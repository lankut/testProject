import { useState } from "react"

export const Accordion = () => {

    const [accordion, setAccordion] = useState(false)

    console.log(accordion);


    return (
        <div>
            <AccordionTitle title={'Меню'} setAccordion={setAccordion} accordion={accordion} />
            <AccordionBody accordion={accordion} />
        </div>
    )
}

type AccordionTitleTypeProps = {
    title: string
    setAccordion: (value: boolean) => void
    accordion: boolean
}

const AccordionTitle = (props: AccordionTitleTypeProps) => {
    return (
        <h3 onClick={() => props.setAccordion(!props.accordion)}>{props.title}</h3>
    )
}

type AccordionBodyTypeProps = {
    accordion: boolean
}

const AccordionBody = (props: AccordionBodyTypeProps) => {

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

