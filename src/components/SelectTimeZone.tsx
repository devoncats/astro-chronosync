import { useStore } from "@nanostores/react";

import { Select, SelectItem, SelectSection } from "@nextui-org/react";
import { tz } from "@/lib/timezones";

import { timezone, setTimezone } from "@/stores/timezone";
import { useEffect } from "react";

export default function SelectTimeZone () {
    const timezones = tz;
    const userTimezone = useStore(timezone);

    const handleSelectionChange = (event: any) => {
        const newTimezone = event.values().next().value
        setTimezone(newTimezone)
    }

    useEffect(() => {
        console.log(userTimezone)
    }, [userTimezone])
    
    return (
        <Select placeholder="Select timezone" aria-label="timezone" variant="bordered" onSelectionChange={(event) => handleSelectionChange(event)}>
            {
                timezones.map((timezone) => {
                    return (
                        <SelectSection key={timezone.region} title={timezone.region} className="uppercase">
                            {
                                timezone.timezones.map((zone) => {
                                    return (
                                        <SelectItem key={zone.id} value={zone.id} className="normal-case">{zone.name}</SelectItem>
                                    )
                                })
                            }
                        </SelectSection>
                    )
                })
            }
        </Select>
    )
}