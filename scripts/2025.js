const table = document.querySelector("#data_display table");
const trs = table.querySelectorAll("tr");

const data = [];

trs.forEach((tr) => {
  const obj = {};
  const tds = tr.querySelectorAll("td");

  tds.forEach((td, index) => {
    const label = td.querySelector("i")?.textContent || "";
    const rawHTML = td.innerHTML;

    // Extract text after <br>, which is the actual team name
    const parts = rawHTML.split("<br>");
    const matchId = parts[1]?.match(/M\.Id (\d+)/);
    const teamName = parts[1]?.trim().replace(/<\/?[^>]+(>|$)/g, "") || "";
    const imgSrc = parts[0]?.match(/<img src="([^"]+)"/)?.[1];
    const date = parts[1]?.match(/\d{4}-\d{2}-\d{2}/)?.[0];
    const time = parts[1]?.match(/\d{2}:\d{2}/)?.[0];

    const venue = parts[2]?.replace(/<\/?[^>]+(>|$)/g, "").trim();

    if (matchId) {
      obj.matchId = matchId[1];
    }
    if (imgSrc) {
      obj.opponentLogo = imgSrc;
    }
    if (date) {
      obj.date = date;
    }
    if (time) {
      obj.time = time;
    }
    if (venue) {
      obj.venue = venue;
    }

    if (label.includes("[Home Team]")) {
      obj.home = teamName;
      obj.away = "bengal tigers";
      obj.isHome = false;
    } else if (label.includes("[Away Team]")) {
      obj.away = teamName;
      obj.home = "bengal tigers";
      obj.isHome = true;
    }
  });

  if (obj.home && obj.away) {
    data.push(obj);
  }
});

console.log(data);
