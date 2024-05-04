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
  const trimmedDate = date.trim().replaceAll("|", "").replace(/-/g, "/");
  const dateObj = new Date(trimmedDate);
  const formatedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
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

export { extractImgSrc, extractTeamName, formatDateTime };
