import { Nav } from "../components/Nav";
import { ScheduleList } from "../components/ScheduleList";
import ScheduleTable from "../components/ScheduleTable";

const schedules = [
  {
    "1": " | 2024-05-12 | 15:15:00",
    "2": "Venue : ",
    "3": "Waverly ground (WPG)",
    "4": "Tournament : ",
    "5": "MCA Division-2 2024",
    home: ' <br><img src="assets/teams/159.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Sher E Maples 2',
    away: '<br><img src="assets/teams/130.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Bengal Tigers 2',
  },
  {
    "1": " | 2024-05-19 | 15:15:00",
    "2": "Venue : ",
    "3": "Waverly ground (WPG)",
    "4": "Tournament : ",
    "5": "MCA Division-2 2024",
    home: ' <br><img src="assets/teams/130.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Bengal Tigers 2',
    away: '<br><img src="assets/teams/150.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Crescent Dragons',
  },
  {
    "1": " | 2024-05-20 | 15:15:00",
    "2": "Venue : ",
    "3": "Winkler Cricket Ground",
    "4": "Tournament : ",
    "5": "MCA Division-2 2024",
    home: ' <br><img src="assets/teams/155.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Blues 4',
    away: '<br><img src="assets/teams/130.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Bengal Tigers 2',
  },
  {
    "1": " | 2024-05-26 | 15:15:00",
    "2": "Venue : ",
    "3": "Waverly ground (WPG)",
    "4": "Tournament : ",
    "5": "MCA Division-2 2024",
    home: ' <br><img src="assets/teams/130.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Bengal Tigers 2',
    away: '<br><img src="assets/teams/139.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Lions 2',
  },
  {
    "1": " | 2024-05-26 | 09:00:00",
    "2": "Venue : ",
    "3": "Labarriere Park 2 (WPG)",
    "4": "Tournament : ",
    "5": "MCA Premier Division 2024",
    home: ' <br><img src="assets/teams/129.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Bengal Tigers',
    away: '<br><img src="assets/teams/165.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>MB Eagles',
  },
  {
    "1": " | 2024-06-02 | 09:00:00",
    "2": "Venue : ",
    "3": "Labarriere Park 2 (WPG)",
    "4": "Tournament : ",
    "5": "MCA Premier Division 2024",
    home: ' <br><img src="assets/teams/140.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Royal Kings',
    away: '<br><img src="assets/teams/129.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Bengal Tigers',
  },
  {
    "1": " | 2024-06-09 | 09:00:00",
    "2": "Venue : ",
    "3": "Labarriere Park 2 (WPG)",
    "4": "Tournament : ",
    "5": "MCA Premier Division 2024",
    home: ' <br><img src="assets/teams/129.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Bengal Tigers',
    away: '<br><img src="assets/teams/138.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Lions',
  },
  {
    "1": " | 2024-06-16 | 09:00:00",
    "2": "Venue : ",
    "3": "Labarriere Park 2 (WPG)",
    "4": "Tournament : ",
    "5": "MCA Premier Division 2024",
    home: ' <br><img src="assets/teams/144.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Royal Razir',
    away: '<br><img src="assets/teams/129.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Bengal Tigers',
  },
  {
    "1": " | 2024-06-16 | 15:15:00",
    "2": "Venue : ",
    "3": "Labarriere Park 2 (WPG)",
    "4": "Tournament : ",
    "5": "MCA Division-2 2024",
    home: ' <br><img src="assets/teams/130.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Bengal Tigers 2',
    away: '<br><img src="assets/teams/131.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Cosmos Spartans',
  },
  {
    "1": " | 2024-06-23 | 15:15:00",
    "2": "Venue : ",
    "3": "Waverly ground (WPG)",
    "4": "Tournament : ",
    "5": "MCA Division-2 2024",
    home: ' <br><img src="assets/teams/130.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Bengal Tigers 2',
    away: '<br><img src="assets/teams/141.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Royal Challengers',
  },
  {
    "1": " | 2024-06-23 | 09:00:00",
    "2": "Venue : ",
    "3": "Labarriere Park 2 (WPG)",
    "4": "Tournament : ",
    "5": "MCA Premier Division 2024",
    home: ' <br><img src="assets/teams/129.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Bengal Tigers',
    away: '<br><img src="assets/teams/121.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Black Hawks',
  },
  {
    "1": " | 2024-06-30 | 09:00:00",
    "2": "Venue : ",
    "3": "Labarriere Park 2 (WPG)",
    "4": "Tournament : ",
    "5": "MCA Premier Division 2024",
    home: ' <br><img src="assets/teams/129.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Bengal Tigers',
    away: '<br><img src="assets/teams/119.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Bloomfield',
  },
  {
    "1": " | 2024-06-30 | 15:15:00",
    "2": "Venue : ",
    "3": "Winkler Cricket Ground",
    "4": "Tournament : ",
    "5": "MCA Division-2 2024",
    home: ' <br><img src="assets/teams/123.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Winnipeg Warriors',
    away: '<br><img src="assets/teams/130.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Bengal Tigers 2',
  },
  {
    "1": " | 2024-07-07 | 09:00:00",
    "2": "Venue : ",
    "3": "Waverly ground (WPG)",
    "4": "Tournament : ",
    "5": "MCA Premier Division 2024",
    home: ' <br><img src="assets/teams/129.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Bengal Tigers',
    away: '<br><img src="assets/teams/134.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Cosmos Kingz',
  },
  {
    "1": " | 2024-07-14 | 15:15:00",
    "2": "Venue : ",
    "3": "Labarriere Park 2 (WPG)",
    "4": "Tournament : ",
    "5": "MCA Division-2 2024",
    home: ' <br><img src="assets/teams/130.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Bengal Tigers 2',
    away: '<br><img src="assets/teams/185.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Winnipeg Aces',
  },
  {
    "1": " | 2024-07-21 | 15:15:00",
    "2": "Venue : ",
    "3": "Labarriere Park 3 (WPG)",
    "4": "Tournament : ",
    "5": "MCA Division-2 2024",
    home: ' <br><img src="assets/teams/120.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Bloomfield Knights',
    away: '<br><img src="assets/teams/130.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Bengal Tigers 2',
  },
  {
    "1": " | 2024-07-28 | 09:00:00",
    "2": "Venue : ",
    "3": "Labarriere Park 2 (WPG)",
    "4": "Tournament : ",
    "5": "MCA Premier Division 2024",
    home: ' <br><img src="assets/teams/129.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Bengal Tigers',
    away: '<br><img src="assets/teams/152.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Blues 2',
  },
  {
    "1": " | 2024-08-11 | 09:00:00",
    "2": "Venue : ",
    "3": "Labarriere Park 3 (WPG)",
    "4": "Tournament : ",
    "5": "MCA Premier Division 2024",
    home: ' <br><img src="assets/teams/148.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Crescent Stars',
    away: '<br><img src="assets/teams/129.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Bengal Tigers',
  },
  {
    "1": " | 2024-08-11 | 15:15:00",
    "2": "Venue : ",
    "3": "Winkler Cricket Ground",
    "4": "Tournament : ",
    "5": "MCA Division-2 2024",
    home: ' <br><img src="assets/teams/162.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Royal Tuskers',
    away: '<br><img src="assets/teams/130.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Bengal Tigers 2',
  },
  {
    "1": " | 2024-08-25 | 09:00:00",
    "2": "Venue : ",
    "3": "Labarriere Park 1 (WPG)",
    "4": "Tournament : ",
    "5": "MCA Premier Division 2024",
    home: ' <br><img src="assets/teams/129.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Bengal Tigers',
    away: '<br><img src="assets/teams/145.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Trailblazers',
  },
  {
    "1": " | 2024-09-01 | 15:15:00",
    "2": "Venue : ",
    "3": "Labarriere Park 1 (WPG)",
    "4": "Tournament : ",
    "5": "MCA Division-2 2024",
    home: ' <br><img src="assets/teams/130.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Bengal Tigers 2',
    away: '<br><img src="assets/teams/163.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>AICC',
  },
  {
    "1": " | 2024-09-01 | 09:00:00",
    "2": "Venue : ",
    "3": "Waverly ground (WPG)",
    "4": "Tournament : ",
    "5": "MCA Premier Division 2024",
    home: ' <br><img src="assets/teams/127.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Sher X1',
    away: '<br><img src="assets/teams/129.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Bengal Tigers',
  },
  {
    "1": " | 2024-09-14 | 09:00:00",
    "2": "Venue : ",
    "3": "Waverly ground (WPG)",
    "4": "Tournament : ",
    "5": "MCA Division-2 2024",
    home: ' <br><img src="assets/teams/130.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Bengal Tigers 2',
    away: '<br><img src="assets/teams/178.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Winnipeg Raiders',
  },
  {
    "1": " | 2024-09-14 | 09:00:00",
    "2": "Venue : ",
    "3": "Labarriere Park 1 (WPG)",
    "4": "Tournament : ",
    "5": "MCA Premier Division 2024",
    home: ' <br><img src="assets/teams/170.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Winnipeg Shooters',
    away: '<br><img src="assets/teams/129.png" width="50px" height="50px" onerror="this.onerror=null;this.src=\'assets/teams/team.png\';"><br>Bengal Tigers',
  },
]
  .map((item) => ({ ...item, 1: item[1].replace("|", "") }))
  .sort((a, b) => a[1].localeCompare(b[1]));

const Page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const team = searchParams["team"] as string | undefined;

  const teamOne = schedules.filter(
    (schedule) => schedule[5] !== "MCA Division-2 2024"
  );
  const teamTwo = schedules.filter(
    (schedule) => schedule[5] === "MCA Division-2 2024"
  );

  const teamName =
    team == "bt"
      ? "Bengal Tigers"
      : team == "bt2"
      ? "Bengal Tigers 2"
      : "All Teams";

  return (
    <div>
      <div className="flex flex-col items-center p-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg sm:text-xl md:text-2xl font-platypi text-center">
            MCA SUMMER LEAGUE 2024
          </h3>
        </div>
        <Nav
          teamName={teamName}
          scheduleList={
            team == "bt" ? teamOne : team === "bt2" ? teamTwo : schedules
          }
        />
      </div>
    </div>
  );
};
export default Page;
