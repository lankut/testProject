import { useState } from "react"
import { AccordionTitle} from "./AccordionTitle"
import { AccordionBody } from "./AccordionBody"

export const Accordion = () => {

    const [accordion, setAccordion] = useState(false)

    return (
        <div>
            <AccordionTitle title={'Меню'} setAccordion={setAccordion} accordion={accordion} />
            <AccordionBody accordion={accordion} />
        </div>
    )
}





