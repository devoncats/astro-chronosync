import { date, todayDate } from '@/stores/dateStore'
import { CalendarDate } from '@internationalized/date'
import { useStore } from '@nanostores/react'

interface SelectTimeProps {
    availability: Availability[]
}

export function SelectTime({ availability }: SelectTimeProps) {
    const userDate = useStore(date)

    const isDateSelected =
        userDate.toString() === new CalendarDate(1999, 1, 1).toString()

    const dayAvaliability = availability.filter(
        (hours) => hours.day === userDate.toString()
    )

    const hoursAvailible = dayAvaliability.map((day) => day.hours).flat()
    
    

    console.log(hoursAvailible)

    return (
        <div>
            {!isDateSelected && (
                <div className='grid grid-cols-2 gap-4'>
                    {hoursAvailible.map((hour) => {
                        return (
                            <button
                                key={hour}
                                className='p-2 rounded w-32 border'
                            >
                                {hour}
                            </button>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
