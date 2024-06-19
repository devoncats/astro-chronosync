import { useStore } from '@nanostores/react'
import { date, timezone } from '@/stores/dateStore'

export default function SelectMeetingTime({
    avaliability,
}: {
    avaliability: Avaliability[]
}) {
    const userDate = useStore(date)
    const userTimezone = useStore(timezone)

    const dayAvaliability = avaliability.filter(
        (hours) => hours.day === userDate.toString()
    )

    const hourAvaliability = dayAvaliability.map((hours) => hours.hours)

    console.log(hourAvaliability)

    return (
        <>
            {userDate.toDate(userTimezone).toUTCString()}
            <div className='flex flex-col'>
                {hourAvaliability.map((hours, index) => (
                    <div
                        className='flex flex-col'
                        key={index}
                    >
                        {hours.map((hour, index) => (
                            <button
                                key={index}
                                className='border border-gray-200 rounded p-2 m-1'
                            >
                                {hour}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}
