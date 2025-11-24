import { useEffect, useState } from "react"


export const Clock = () => {

    const [time, setTime] = useState(new Date())

    useEffect(() => {

        const interval = setInterval(() => {
            setTime(new Date())

        }, 1000)
        return ()=>{
            clearInterval(interval)
        }

    }, [])

    const dogitalNumber = (num: number) => num < 10 ? '0' + num : num

    let hours = dogitalNumber(time.getHours())
    const minutes = dogitalNumber(time.getMinutes())
    const seconds = dogitalNumber(time.getSeconds())

    return <div>
        <span>{hours}</span>:
        <span>{minutes}</span>:
        <span>{seconds}</span>
    </div>
}