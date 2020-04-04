var Riotopts = {
  method: "GET",
  headers: {},
};
fetch(
  "https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/hVnA4aaJn9mfQByRyY4EAbfb-tZiG9SM_pxG_oDJ-Qv8nfY?api_key=RGAPI-81dbd514-27ea-4eaa-9128-2f16562d429d",
  Riotopts
)
  .then(function (response) {
    return response.json();
  })
  .then(function (body) {
    console.log(body);
  });
  