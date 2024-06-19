import { useEffect } from 'react'
import { useStore } from '@nanostores/react'

import { Calendar, type DateValue } from '@nextui-org/react'
import { parseDate, today } from '@internationalized/date'
import { timezone, setDate, date } from '@/stores/dateStore'
import { getAvailableDates, getFirstAvaliableDateFromToday, isInvalidDate } from '@/utils/dateUtils'
import { setDateQueryParams } from '@/utils/queryUtils'

export default function SelectMeetingDate({ availability }: { availability: Availability[] }) {
    const userTimezone = useStore(timezone)
    const userDate = useStore(date)

    const getAvailableDates = availability.map((date) => date.day)
    
    
    const isInvalidDate = (availableDates: string[], date: DateValue) => {
        return !availableDates.includes(date.toString())
    }
    
    const getFirstAvaliableDateFromToday = () => {
        const todayDate = today(userTimezone)
        const avaliableDate = getAvailableDates.find((date) => date >= todayDate.toString())
    
        return avaliableDate ? parseDate(avaliableDate) : todayDate
    }

    setDateQueryParams(getFirstAvaliableDateFromToday())

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
                // isDateUnavailable={invalidDate}
                // defaultValue={firstAvalibleDate}
                // onChange={handleSelectionChange}
                // minValue={today(userTimezone)}
            />
        </>
    )
}
