interface Meeting {
    name: string
    description: string
    duration: string
}

interface Avaliability {
    day: string
    hours: string
}

interface User {
    id: string
    name: string
    greeting: string
    meetings: Meeting[]
    avaliability: Avaliability[]
}
