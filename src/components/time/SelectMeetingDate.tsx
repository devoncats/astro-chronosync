import { useEffect } from 'react'
import { useStore } from '@nanostores/react'

import { Calendar, type DateValue } from '@nextui-org/react'
import { parseDate, today } from '@internationalized/date'
import { timezone, setDate, date } from '@/stores/dateStore'

export default function SelectMeeting({ avaliability }: { avaliability: Avaliability[] }) {
    const userTimezone = useStore(timezone)
    const userDate = useStore(date)

    const avaliableDates = avaliability.map((date) => date.day)

    const invalidDate = (date: DateValue) => {
        return !avaliableDates.includes(date.toString())
    }

    const firstAvaliableDateFromToday = () => {
        const todayDate = today(userTimezone)
        const avaliableDate = avaliableDates.find((date) => date >= todayDate.toString())

        return avaliableDate ? parseDate(avaliableDate) : todayDate
    }

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search)
        const dateParam = queryParams.get('date')

        dateParam ? setDate(parseDate(dateParam)) : setDate(firstAvaliableDateFromToday())
    }, [])


    const handleSelectionChange = (event: DateValue) => {
        const newDate = event.toString()

        setDate(parseDate(newDate))

        const queryParams = new URLSearchParams(window.location.search)
        queryParams.set('date', newDate)
        window.history.replaceState(null, '', `${window.location.pathname}?${queryParams.toString()}`)
    }

    return (
        <>
            <h1 className='font-medium text-lg'>Select date and time</h1>
            <Calendar
                className='shadow-none border'
                color='secondary'
                isDateUnavailable={invalidDate}
                defaultValue={firstAvaliableDateFromToday()}
                onChange={handleSelectionChange}
                minValue={today(userTimezone)}
            />
        </>
    )
}
