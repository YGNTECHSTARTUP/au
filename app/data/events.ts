// import type { TimelineEvent } from "../types/timeline"
export interface TimelineEvent {
    startTime: string
    endTime?: string
    date: string
    location: string
    title: string
    day: 1 | 2
  }
  
   
  


export const timelineEvents: TimelineEvent[] = [
     // Day 1 Events
  {
    startTime: "12:00 AM",
    endTime: "11:59 PM",
    date: "2025-03-16",
    location: "ONLINE",
    title: "REGISTRATIONS OPEN",
    day: 1,
  },
  {
    startTime: "11:59 PM",
    endTime: "11:59 PM",
    date: "2025-04-07",
    location: "ONLINE",
    title: "REGISTRATIONS CLOSE",
    day: 1,
  },
  {
    startTime: "08:30 AM",
    endTime: "10:00 AM",
    date: "2025-04-12",
    location: "AKCNB HALL",
    title: "TEAM CONFIRMATION & IDENTITY BANDS DISTRIBUTION",
    day: 1,
  },
  {
    startTime: "09:00 AM",
    endTime: "10:00 AM",
    date: "2025-04-12",
    location: "AKCNB HALL",
    title: "OPENING CEREMONY",
    day: 1,
  },
  {
    startTime: "10:00 AM",
    endTime: "10:00 AM",
    date: "2025-04-12",
    location: "3RD FLOOR LABS",
    title: "HACKATHON KICKOFF",
    day: 1,
  },
  {
    startTime: "01:00 PM",
    endTime: "02:00 PM",
    date: "2025-04-12",
    location: "CANTEEN",
    title: "LUNCH BREAK",
    day: 1,
  },
  {
    startTime: "02:00 PM",
    endTime: "06:00 PM",
    date: "2025-04-12",
    location: "3RD FLOOR LABS",
    title: "HACKING SESSION CONTINUES",
    day: 1,
  },
  {
    startTime: "06:00 PM",
    endTime: "07:30 PM",
    date: "2025-04-12",
    location: "3RD FLOOR LABS",
    title: "MIDWAY PROJECT REVIEW",
    day: 1,
  },
  {
    startTime: "08:00 PM",
    endTime: "09:00 PM",
    date: "2025-04-12",
    location: "CANTEEN",
    title: "DINNER BREAK",
    day: 1,
  },

  // Day 2 Events
  {
    startTime: "12:00 AM",
    endTime: "08:00 AM",
    date: "2025-04-13",
    location: "3RD FLOOR LABS",
    title: "OVERNIGHT HACKING SESSION",
    day: 2,
  },
  {
    startTime: "08:00 AM",
    endTime: "09:00 AM",
    date: "2025-04-13",
    location: "CANTEEN",
    title: "BREAKFAST",
    day: 2,
  },
  {
    startTime: "09:00 AM",
    endTime: "12:00 PM",
    date: "2025-04-13",
    location: "3RD FLOOR LABS",
    title: "FINAL HACKING HOURS",
    day: 2,
  },
  {
    startTime: "12:00 PM",
    endTime: "12:00 PM",
    date: "2025-04-13",
    location: "3RD FLOOR LABS",
    title: "CODE FREEZE",
    day: 2,
  },
  {
    startTime: "12:30 PM",
    endTime: "02:00 PM",
    date: "2025-04-13",
    location: "CANTEEN",
    title: "LUNCH BREAK",
    day: 2,
  },
  {
    startTime: "02:00 PM",
    endTime: "05:00 PM",
    date: "2025-04-13",
    location: "AKCNB HALL",
    title: "PROJECT PRESENTATIONS",
    day: 2,
  },
  {
    startTime: "05:30 PM",
    endTime: "06:30 PM",
    date: "2025-04-13",
    location: "AKCNB HALL",
    title: "JUDGING & EVALUATION",
    day: 2,
  },
  {
    startTime: "07:00 PM",
    endTime: "08:00 PM",
    date: "2025-04-13",
    location: "AKCNB HALL",
    title: "CLOSING CEREMONY & AWARDS",
    day: 2,
  },
]
