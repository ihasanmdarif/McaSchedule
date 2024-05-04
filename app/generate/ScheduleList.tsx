"use client";

type Schedule = {
  "1": string;
  "2": string;
  "3": string;
  "4": string;
  "5": string;
  home: string;
  away: string;
};

type ScheduleListProps = {
  schedules: Schedule[];
  teamName: string;
};

export function ScheduleList({ schedules, teamName }: ScheduleListProps) {
  return (
    <div>
      <div className="flex flex-col items-center m-4">
        <div className="flex flex-col col gap-2">
          <h3 className="text-3xl font-platypi">MCA SUMMER LEAGUE 2024</h3>
          <h1 className="text-4xl font-platypi bg-red-500 p-2 rounded-sm text-center m-auto text-white">
            {teamName}
          </h1>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
          {schedules.map((schedule, ind) => {
            return (
              <li
                key={ind}
                className="px-4 py-2 bg-white text-slate-900 grid items-center shadow-md rounded place-items-center position-relative grid-row-2 gap-4"
              >
                <div className="place-self-start flex gap-1 font-platypi text-md">
                  <span>{schedule[3]} | </span>
                  <span>
                    {formatDateTime(schedule[1].replaceAll("|", " ")).dateOnly},
                  </span>
                  <span>
                    {formatDateTime(schedule[1].replaceAll("|", " ")).month}
                  </span>
                  <span>
                    {formatDateTime(schedule[1].replaceAll("|", " ")).time}
                  </span>
                </div>
                <div className="grid  grid-cols-[2fr,1fr,2fr]">
                  <span className="flex flex-col items-center">
                    <img
                      className="rounded-full w-12 h-12"
                      src={`https://cricketsasa.ca/cricket/${extractImgSrc(
                        schedule.home
                      )}`}
                      alt={extractTeamName(schedule.home)}
                    ></img>
                    <span>Home: {extractTeamName(schedule.home)}</span>
                  </span>
                  <span
                    className="text-3xl font-platypi rounded-full p-4
                "
                  >
                    VS
                  </span>
                  <span className="flex flex-col items-center">
                    <img
                      className="rounded-full w-12 h-12"
                      src={`https://cricketsasa.ca/cricket/${extractImgSrc(
                        schedule.away
                      )}`}
                      alt={extractTeamName(schedule.away)}
                    ></img>
                    <span>Away: {extractTeamName(schedule.away)}</span>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const extractImgSrc = (html: string) => {
  const src = html.match(/src="([^"]*)"/);
  return src ? src[1] : "assets/teams/team.png";
};

function extractTeamName(htmlString: string) {
  var regex = /<br[^>]*>\s*([^<]+)\s*/i;
  // Use match method to find the pattern in the HTML string
  var match = htmlString.match(regex);
  // If a match is found
  if (match && match.length > 1) {
    // Extract the team name from the matched group
    var teamName = match[1].trim();
    return teamName;
  }
  // If no match found, return null
  return "No team";
}
const formatDateTime = (date: string) => {
  const dateObj = new Date(date);

  const formatedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "America/Winnipeg",
  }).format(dateObj);

  const day = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    timeZone: "America/Winnipeg",
  }).format(dateObj);

  const dateOnly = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    timeZone: "America/Winnipeg",
  }).format(dateObj);

  const time = new Intl.DateTimeFormat("en-US", {
    timeStyle: "short",
    timeZone: "America/Winnipeg",
  }).format(dateObj);

  const month = new Intl.DateTimeFormat("en-US", {
    month: "short",
    timeZone: "America/Winnipeg",
  }).format(dateObj);

  return { day, dateOnly, time, month, formatedDate };
};

//  return (
//    <div className="flex flex-col items-center m-4">
//      <div className="flex flex-col col gap-2">
//        <h3 className="text-3xl font-platypi">MCA SUMMER LEAGUE 2024</h3>
//        <h1 className="text-4xl font-platypi bg-red-500 p-2 rounded-sm text-center m-auto text-white">
//          {teamName}
//        </h1>
//      </div>
//      <div>
//        <ul className="grid grid-cols-1 md:grid-cols-2">
//          {schedules.map((schedule, ind) => (
//            <li key={ind}>
//              <div className="grid grid-cols-[2fr,8fr] p-2 rounded-sm m-2 gap-2 shadow-md border">
//                <div className="flex flex-col font-platypi text-slate-700 px-4 rounded text-2xl  bg-white text-start">
//                  <div className="flex gap-2">
//                    <span>
//                      {
//                        formatDateTime(schedule["1"].replaceAll("|", " "))
//                          .dateOnly
//                      }
//                      ,
//                    </span>
//                    <span>
//                      {formatDateTime(schedule["1"].replaceAll("|", " ")).month}
//                    </span>
//                  </div>
//                  <span className="text-sm">
//                    {formatDateTime(schedule["1"].replaceAll("|", " ")).time}
//                  </span>
//                </div>
//                <div className="flex gap-2 flex-col">
//                  <span className="font-bold">{schedule[3]}</span>
//                  <div className="flex gap-4">
//                    <span>
//                      Home:{" "}
//                      <img
//                        className="rounded-full w-12 h-12"
//                        src={`https://cricketsasa.ca/cricket/${extractImgSrc(
//                          schedule.home
//                        )}`}
//                        alt={extractTeamName(schedule.home)}
//                      ></img>
//                      <span>{extractTeamName(schedule.home)}</span>
//                    </span>
//                    <span>
//                      Away:{" "}
//                      <img
//                        className="rounded-full w-12 h-12"
//                        src={`https://cricketsasa.ca/cricket/${extractImgSrc(
//                          schedule.away
//                        )}`}
//                        alt={extractTeamName(schedule.away)}
//                      ></img>
//                      <span>{extractTeamName(schedule.away)}</span>
//                    </span>
//                  </div>
//                </div>
//              </div>
//            </li>
//          ))}
//        </ul>
//      </div>
//    </div>
//  );
