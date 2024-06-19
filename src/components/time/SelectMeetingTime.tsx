import { useStore } from '@nanostores/react'
import { date, timezone } from '@/stores/dateStore'

export default function SelectMeetingTime({ availability }: { availability: Availability[] }) {
    // const userDate = useStore(date)
    // const userTimezone = useStore(timezone)

    // const dayAvaliability = availability.filter(
    //     (date) => date.day === userDate.toString()
    // )

    // const hourAvaliability = dayAvaliability.map((hours) => hours.hours)

    // console.log(hourAvaliability)

    // return (
    //     <>
    //         {userDate.toDate(userTimezone).toUTCString().slice(0, 16)}
    //         <div className='flex flex-col'>
    //             {hourAvaliability.map((hours, index) => (
    //                 <div
    //                     className='grid grid-cols-2 gap-2'
    //                     key={index}
    //                 >
    //                     {hours.map((hour, index) => (
    //                         <button
    //                             key={index}
    //                             className='border border-gray-200 rounded w-32 p-2 m-1'
    //                         >
    //                             {hour}
    //                         </button>
    //                     ))}
    //                 </div>
    //             ))}
    //         </div>
    //     </>
    // )
}
