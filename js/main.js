const Riotopts = {
  method: "GET",
  headers: {},
};

const key = "RGAPI-954667d5-18e2-4037-addf-5b0d07520fef";

fetch(
  "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/RayRey?api_key=" +
    key,
  Riotopts
)
  .then(function (response) {
    return response.json();
  })
  .then(function (body) {
    fetch(
      "https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/" +
        body.id +
        "?api_key=" +
        key,
      Riotopts
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (body) {
        const ranked = document.querySelector("#rank");
        const lp = document.querySelector("#lp");
        const win = document.querySelector("#win");
        const lose = document.querySelector("#lose");

        ranked.innerHTML = body[0].tier + " " + body[0].rank;
        lp.innerHTML = body[0].leaguePoints;
        win.innerHTML = body[0].wins;
        lose.innerHTML = body[0].losses;
      });
  });
