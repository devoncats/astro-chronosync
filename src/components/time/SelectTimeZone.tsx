import { useStore } from '@nanostores/react'

import { Select, SelectItem, SelectSection } from '@nextui-org/react'

import { timezone, setTimezone } from '@/stores/dateStore'
import { tz } from '@/lib/timezones'

export default function SelectTimeZone() {
    const timezones = tz
    const userTimezone = useStore(timezone)

    const handleSelectionChange = (event: any) => {
        const newTimezone = event.values().next().value
        setTimezone(newTimezone)
    }

    return (
        <Select
            placeholder='Select timezone'
            defaultSelectedKeys={[userTimezone]}
            aria-label='timezone'
            variant='bordered'
            onSelectionChange={(event) => handleSelectionChange(event)}
        >
            {timezones.map((timezone) => {
                return (
                    <SelectSection
                        key={timezone.region}
                        title={timezone.region}
                        className='uppercase'
                        showDivider
                    >
                        {timezone.timezones.map((zone) => {
                            return (
                                <SelectItem
                                    key={zone.id}
                                    value={zone.id}
                                    className='normal-case'
                                >
                                    {zone.name}
                                </SelectItem>
                            )
                        })}
                    </SelectSection>
                )
            })}
        </Select>
    )
}
