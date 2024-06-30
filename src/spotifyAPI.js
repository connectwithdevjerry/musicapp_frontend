import { Buffer } from "buffer/";

// const client_id = process.env.CLIENT_ID;
// const client_secret = process.env.CLIENT_SECRET;
const client_id = "95c0f5916cb74a6790328f5ff99b7206";
const client_secret = "003ce7c639ef464a8c5b81bf5a3bd3d2";

export async function getToken() {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body: new URLSearchParams({
      grant_type: "client_credentials",
    }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret).toString("base64"),
    },
  });

  return await response.json();
}

export async function getTrackInfo(access_token) {
  const response = await fetch(
    "https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B",
    {
      method: "GET",
      headers: { Authorization: "Bearer " + access_token },
    }
  );

  return await response.json();
}
