interface Timezone {
  offset: string;
  id: string;
  name: string;
}

interface TimezoneRegion {
  region: string;
  timezones: Timezone[];
}
