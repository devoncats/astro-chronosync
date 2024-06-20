import { useEffect } from 'react'
import { useStore } from '@nanostores/react'

import { Calendar } from '@nextui-org/react'
import { today } from '@internationalized/date'
import { timezone, date, setDate } from '@/stores/dateStore'

export default function SelectMeeting() {
    const userTimezone = useStore(timezone)
    const userDate = useStore(date)
    const base = today(userTimezone)
    
    useEffect(() => {
        setDate(today(userTimezone))
    }, [userTimezone])
    return (
        <>
            <h1 className='font-medium text-lg'>Select date and time</h1>
            <Calendar
                className='shadow-none border'
                color='secondary'
                defaultValue={userDate}
                minValue={base}
                onChange={setDate}
            />
        </>
    )
}
