import { setDate } from "@/stores/dateStore" 
import { parseDate, type DateValue } from "@internationalized/date"

export const setDateQueryParams = (firstAvaliableDate: DateValue) => {
    const queryParams = new URLSearchParams(window.location.search)
    const dateParam = queryParams.get('date')

    dateParam ? setDate(parseDate(dateParam)) : setDate(firstAvaliableDate)
}
