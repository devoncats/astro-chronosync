import { tz } from '@/lib/timezones'
import { setTimezone, timezone } from '@/stores/dateStore'
import { useStore } from '@nanostores/react'

import { Select, SelectItem, SelectSection  } from '@nextui-org/react'

export function SelectTimezone() {
    const timezones = tz
    const userTimezone = useStore(timezone)

    const handleSelectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newTimezone = event.target.value
        setTimezone(newTimezone);
    }

    return (
        <Select
            placeholder='Select timezone'
            aria-label='timezone'
            variant='bordered'
            onChange={handleSelectionChange}
            defaultSelectedKeys={[userTimezone]}
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