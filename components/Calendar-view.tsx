"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { formatDateTime, formattedAppDate } from "@/lib/utils";
import { useEffect, useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { Match } from "@/context/AppContext";
type CalendarViewProps = {
  matches: Match[];
};

type Event = {
  id: string;
  title: string;
  start: string;
  end: string;
  backgroundColor: string;
  time: string;
  ground: string;
};

export function CalendarView({ matches }: CalendarViewProps) {
  const [eventList, setEventList] = useState<Event[]>();

  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event>();

  useEffect(() => {
    const events = matches.map((match) => {
      return {
        id: crypto.randomUUID(),
        title: `${match.home.toUpperCase()} vs ${match.away.toUpperCase()}`,
        start: formatDateTime(match.date).formatedDateShort,
        end: formatDateTime(match.date).formatedDateShort,
        time: match.time,
        backgroundColor: match.teamId == "1" ? "#b91c1c" : "#fbbf24",
        ground: match.venue,
      };
    });
    setEventList(events);
  }, [matches]);

  const handleEventClick = (id: string) => {
    setShowModal(true);
    setSelectedEvent(eventList?.find((event) => event.id === id));
  };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={eventList}
        eventClick={(info) => {
          handleEventClick(info.event.id);
        }}
      />
      {showModal && (
        <ModalPopup
          event={selectedEvent}
          handleClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

type ModalPopupProps = {
  event: Event | undefined;
  handleClose: () => void;
};

const ModalPopup = ({ event, handleClose }: ModalPopupProps) => {
  if (!event) return null;
  return (
    <div className="inset-0 bg-black bg-opacity-80 flex justify-center items-center fixed z-[100]">
      <div className="relative bg-white px-8 py-6 rounded">
        <button
          className="absolute top-2 right-2 text-bold text-3xl"
          onClick={() => handleClose()}
        >
          <XCircleIcon className="size-6 text-blue-500" />
        </button>
        <h2 className="text-xl font-bold">{event?.title}</h2>
        <p>{event?.ground}</p>
        <p className="text-md">
          {formattedAppDate(event.start)} | {event?.time}
        </p>
      </div>
    </div>
  );
};
