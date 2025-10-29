'use client';

import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

interface CalendarEvent {
  title: string;
  start: string;
  end?: string;
  backgroundColor?: string;
  borderColor?: string;
}

export default function Calendar() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  // Load FullCalendar CSS dynamically
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/fullcalendar@6.1.19/index.global.min.css';
    document.head.appendChild(link);

    return () => {
      // Cleanup: remove the link when component unmounts
      const existingLink = document.querySelector(`link[href="${link.href}"]`);
      if (existingLink) {
        document.head.removeChild(existingLink);
      }
    };
  }, []);

  // Example events - you can replace this with actual data from an API
  useEffect(() => {
    // Sample available tour dates
    const sampleEvents: CalendarEvent[] = [
      {
        title: 'Bitcoin Tour Available',
        start: new Date().toISOString().split('T')[0],
        backgroundColor: '#10B981',
        borderColor: '#059669',
      },
      {
        title: 'Bitcoin Tour Available',
        start: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Tomorrow
        backgroundColor: '#10B981',
        borderColor: '#059669',
      },
      {
        title: 'Bitcoin Tour Available',
        start: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0], // 3 days from now
        backgroundColor: '#10B981',
        borderColor: '#059669',
      },
    ];
    setEvents(sampleEvents);
  }, []);

  const handleDateSelect = (selectInfo: any) => {
    const title = prompt('Please enter a title for your tour booking:');
    if (title) {
      setEvents([
        ...events,
        {
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          backgroundColor: '#3B82F6',
          borderColor: '#2563EB',
        },
      ]);
    }
  };

  const handleEventClick = (clickInfo: any) => {
    if (
      confirm(
        `Are you sure you want to book the tour on ${clickInfo.event.title}?`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  return (
    <div className="w-full">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        events={events}
        select={handleDateSelect}
        eventClick={handleEventClick}
        height="auto"
        aspectRatio={1.8}
        // Custom styling
        eventColor="#10B981"
        eventTextColor="#ffffff"
        nowIndicator={true}
        // Custom button text
        buttonText={{
          today: 'Today',
          month: 'Month',
          week: 'Week',
          day: 'Day',
        }}
        // Custom date formatting
        dayHeaderFormat={{ weekday: 'long' }}
        titleFormat={{ year: 'numeric', month: 'long' }}
      />
      
      {/* Custom styles */}
      <style jsx global>{`
        .fc {
          font-family: inherit;
        }
        .fc-button {
          background-color: #3B82F6 !important;
          border-color: #3B82F6 !important;
          color: white !important;
          border-radius: 0.5rem !important;
          padding: 0.5rem 1rem !important;
          font-weight: 500 !important;
          transition: all 0.3s ease !important;
        }
        .fc-button:hover {
          background-color: #2563EB !important;
          border-color: #2563EB !important;
          transform: translateY(-2px);
        }
        .fc-button-active {
          background-color: #1E40AF !important;
          border-color: #1E40AF !important;
        }
        .fc-today-button {
          background-color: #06B6D4 !important;
          border-color: #06B6D4 !important;
        }
        .fc-today-button:hover {
          background-color: #0891B2 !important;
          border-color: #0891B2 !important;
        }
        .fc-header-toolbar {
          margin-bottom: 1.5rem !important;
        }
        .fc-event {
          cursor: pointer;
          border-radius: 0.375rem !important;
          padding: 0.25rem 0.5rem !important;
        }
        .fc-daygrid-day:hover {
          background-color: rgba(59, 130, 246, 0.1) !important;
        }
        .fc-day-today {
          background-color: rgba(59, 130, 246, 0.05) !important;
        }
        .fc-col-header-cell {
          padding: 0.75rem 0.5rem !important;
          background-color: #F3F4F6 !important;
          font-weight: 600 !important;
          color: #374151 !important;
        }
        .fc-daygrid-day-number {
          padding: 0.5rem !important;
          color: #374151 !important;
        }
        .fc-daygrid-day.fc-day-today .fc-daygrid-day-number {
          background-color: #3B82F6 !important;
          color: white !important;
          border-radius: 50% !important;
          width: 2rem !important;
          height: 2rem !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          margin: 0.25rem !important;
        }
        .fc-scrollgrid {
          border-radius: 0.75rem !important;
          overflow: hidden !important;
          border: 1px solid #E5E7EB !important;
        }
        .fc-scrollgrid-section > td {
          border-color: #E5E7EB !important;
        }
      `}</style>
    </div>
  );
}

