import { parseDate, today, type DateValue } from "@internationalized/date"

export const getAvailableDates = (availability: Availability[]) => {
    return availability.map((date) => date.day)
} 

export const isInvalidDate = (availableDates: string[], date: DateValue) => {
    return !availableDates.includes(date.toString())
}

export const getFirstAvaliableDateFromToday = (userTimezone: string, availableDates: string[]) => {
    const todayDate = today(userTimezone)
    const avaliableDate = availableDates.find((date) => date >= todayDate.toString())

    return avaliableDate ? parseDate(avaliableDate) : todayDate
}

export const setDateQueryParams = ({}) => {}

