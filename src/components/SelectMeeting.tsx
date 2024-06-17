import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";

import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";
import type { DateValue } from "@nextui-org/react";
import { timezone } from "@/stores/timezone";

export default function SelectMeeting() { 
    const userTimezone: string = useStore(timezone)
    const todayDate: DateValue = today(userTimezone)  

    const [date, setDate] = useState<DateValue>(todayDate)    

    useEffect(() => {
        setDate(today(userTimezone))
    }, [userTimezone])
    
    return (
        <>
        <h1 className="font-medium text-lg">Select date and time</h1>
          <Calendar
            className="shadow-none border"
            color="secondary"
            defaultValue={todayDate}
            minValue={todayDate} 
            onChange={setDate}
          />
        </>
    )
}