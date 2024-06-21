import { atom } from 'nanostores'
import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date'
import type { DateValue } from '@internationalized/date'

const timezone = atom<string>(getLocalTimeZone())
const date = atom<DateValue>(new CalendarDate(1999, 1, 1))
const todayDate = atom<DateValue>(today(timezone.get()))

const setTimezone = (value: string) => {
    timezone.set(value)
}

const setDate = (value: DateValue) => {
    date.set(value)
}

export { timezone, setTimezone, date, setDate, todayDate }
