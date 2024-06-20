import { date, setDate, timezone } from "@/stores/dateStore";
import { today } from "@internationalized/date";
import { useStore } from "@nanostores/react";
import { Calendar } from "@nextui-org/react";
import { useEffect } from "react";

export function SelectDate() {
    const userTimezone = useStore(timezone)
    const userDate = useStore(date)
    const todayDate = today(userTimezone)   

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
        />
    )
}