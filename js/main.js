var opts = {
  method: "GET",
  mode: "no-cors",
  headers: {
    "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, HEAD, OPTIONS",
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json"
  }
};
fetch(
  "https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/hVnA4aaJn9mfQByRyY4EAbfb-tZiG9SM_pxG_oDJ-Qv8nfY?api_key=RGAPI-aae43291-7f23-4f90-ba62-46498a1bc200",
  opts
)
  .then(function(response) {
    return response;
  })
  .then(function(body) {
    console.log(body);
  });
