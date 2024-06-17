import { atom } from "nanostores";
import { getLocalTimeZone } from "@internationalized/date";

const initialValue = getLocalTimeZone();

const timezone = atom(initialValue);

const setTimezone = (value: string) => {
    timezone.set(value);
}

export { timezone, setTimezone };