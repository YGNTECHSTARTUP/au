export interface TimelineEvent {
    startTime: string
    endTime?: string
    date: string
    location: string
    title: string
    day: 1 | 2
  }
  
  export interface TimelineProps {
    events: TimelineEvent[]
    title: string
    description: string
  }
  