
interface Meeting {
    name: string;
    description: string;
    duration: string;
  
}

interface User {
    id: string;
    name: string;
    greeting: string;
    meetings: Meeting[];
  }