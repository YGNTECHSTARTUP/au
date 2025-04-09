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
    // Day 1 Events - April 16
    {
      startTime: "09:00 AM",
      endTime: "10:00 AM",
      date: "2025-04-16",
      location: "Algorithm, 2nd Floor",
      title: "REGISTRATION & CHECK-IN",
      day: 1,
    },
    {
      startTime: "10:00 AM",
      endTime: "11:00 AM",
      date: "2025-04-16",
      location: "Algorithm, 2nd Floor",
      title: "INAUGURATION CEREMONY",
      day: 1,
    },
    {
      startTime: "11:00 AM",
      endTime: "01:00 PM",
      date: "2025-04-16",
      location: "Algorithm, 2nd Floor",
      title: "IDEATION & TEAM FORMATION",
      day: 1,
    },
    {
      startTime: "01:00 PM",
      endTime: "02:00 PM",
      date: "2025-04-16",
      location: "Algorithm, 2nd Floor",
      title: "LUNCH BREAK",
      day: 1,
    },
    {
      startTime: "02:00 PM",
      endTime: "07:00 PM",
      date: "2025-04-16",
      location: "Algorithm, 2nd Floor",
      title: "HACKING SESSION BEGINS",
      day: 1,
    },
    {
      startTime: "07:00 PM",
      endTime: "08:00 PM",
      date: "2025-04-16",
      location: "Algorithm, 2nd Floor",
      title: "DINNER BREAK",
      day: 1,
    },
    {
      startTime: "08:00 PM",
      endTime: "11:59 PM",
      date: "2025-04-16",
      location: "Algorithm, 2nd Floor",
      title: "LATE NIGHT CODING",
      day: 1,
    },
  
    // Day 2 Events - April 17
    {
      startTime: "12:00 AM",
      endTime: "08:00 AM",
      date: "2025-04-17",
      location: "Algorithm, 2nd Floor",
      title: "OVERNIGHT HACKING",
      day: 2,
    },
    {
      startTime: "08:00 AM",
      endTime: "09:00 AM",
      date: "2025-04-17",
      location: "Algorithm, 2nd Floor",
      title: "BREAKFAST",
      day: 2,
    },
    {
      startTime: "09:00 AM",
      endTime: "12:00 PM",
      date: "2025-04-17",
      location: "Algorithm, 2nd Floor",
      title: "FINAL CODING SPRINT",
      day: 2,
    },
    {
      startTime: "12:00 PM",
      endTime: "12:00 PM",
      date: "2025-04-17",
      location: "Algorithm, 2nd Floor",
      title: "CODE FREEZE",
      day: 2,
    },
    {
      startTime: "12:00 PM",
      endTime: "01:00 PM",
      date: "2025-04-17",
      location: "Algorithm, 2nd Floor",
      title: "LUNCH BREAK",
      day: 2,
    },
    {
      startTime: "01:00 PM",
      endTime: "02:00 PM",
      date: "2025-04-17",
      location: "Algorithm, 2nd Floor",
      title: "PROJECT DEMOS",
      day: 2,
    },
    {
      startTime: "02:00 PM",
      endTime: "03:00 PM",
      date: "2025-04-17",
      location: "Algorithm, 2nd Floor",
      title: "CLOSING & AWARD CEREMONY",
      day: 2,
    },
  ];
  