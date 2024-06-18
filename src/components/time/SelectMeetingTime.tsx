import { useStore } from "@nanostores/react"
import { date, timezone } from "@/stores/dateStore"

export default function SelectMeetingTime() {
    const userDate = useStore(date)
    const userTimezone = useStore(timezone)

    return (
        <>
            {userDate.toDate(userTimezone).toUTCString()}
        </>
    )
}