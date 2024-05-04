const table = document.querySelector("#data_display table");
const trs = table.querySelectorAll("tr");

const data = [];

trs.forEach((tr) => {
  let obj = {};
  const td = tr.querySelectorAll("td");
  td.forEach((elem, index) => {
    const b = elem.querySelectorAll("b");
    const homeTeam = elem.querySelectorAll("p1 > b");
    Array.from(b).reduce((acc, elem, ind) => {
      const key = ind == 0 ? (ind = "home") : ind;
      acc[key] = elem.innerHTML;
      return acc;
    }, obj);

    Array.from(homeTeam).reduce((acc, elem, ind) => {
      acc["home"] = elem.innerHTML;
    }, obj);

    if (index == 2) {
      obj = { ...obj, away: elem.innerHTML };
    }
  });

  data.push(obj);
});

console.log(data);
