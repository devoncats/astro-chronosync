import { date, setDate, timezone } from "@/stores/dateStore";
import { today } from "@internationalized/date";
import { useStore } from "@nanostores/react";
import { Calendar, type DateValue } from "@nextui-org/react";
import { useEffect } from "react";

interface SelectDateProps {
    availability: Availability[]
}

export function SelectDate({ availability }: SelectDateProps) {
    const userTimezone = useStore(timezone)
    const userDate = useStore(date)
    const todayDate = today(userTimezone)   

    const avalibleDates = availability.map((date) => {
        return date.day
    })

    const isUnavalible = (date: DateValue) => {
        return !avalibleDates.includes(date.toString()) || date < todayDate
    }

    useEffect(() => {
        window.history.pushState(
            null,
            "",
            `?date=${userDate}&timezone=${userTimezone}`
        )
    }, [userTimezone, userDate])

    return (
        <Calendar
        className='shadow-none border'
        color='secondary' 
        minValue={todayDate}
        onChange={setDate}
        isDateUnavailable={isUnavalible}
        />
    )
}