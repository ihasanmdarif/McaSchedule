"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Schedule } from "./ScheduleTable";
import { extractTeamName, formatDateTime } from "@/libs/utils";
import { useEffect, useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
type CalendarViewProps = {
  schedules: Schedule[];
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

export function CalendarView({ schedules }: CalendarViewProps) {
  const [eventList, setEventList] = useState<Event[]>();

  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event>();

  useEffect(() => {
    const events = schedules.map((schedule) => {
      return {
        id: crypto.randomUUID(),
        title: `${extractTeamName(schedule.home)} vs ${extractTeamName(
          schedule.away
        )}`,
        start: formatDateTime(schedule["1"]).formatedDateShort,
        end: formatDateTime(schedule["1"]).formatedDateShort,
        time: formatDateTime(schedule["1"]).time,
        backgroundColor: isPremierTeam(schedule[5]) ? "#b91c1c" : "#fbbf24",
        ground: schedule[3],
      };
    });
    setEventList(events);
  }, [schedules]);

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
        height={"auto"}
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
          {event?.start} | {event?.time}
        </p>
      </div>
    </div>
  );
};

function isPremierTeam(team: string) {
  return team.toLowerCase().includes("premier");
}
