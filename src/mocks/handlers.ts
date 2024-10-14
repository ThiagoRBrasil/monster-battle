import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/monsters", () => {
    return HttpResponse.json([
      {
        name: "Gorila",
        attack: 100,
        defense: 155,
        speed: 100,
        hp: 100,
        image_url: "https://robohash.org/mail@ashallendesign.co.uk",
      },
      {
        name: "Visão",
        attack: 110,
        defense: 100,
        speed: 80,
        hp: 110,
        image_url: "https://robohash.org/mail@ashallendesign.co.uk",
      },
      {
        name: "Homem de Ferro",
        attack: 150,
        defense: 111,
        speed: 110,
        hp: 90,
        image_url: "https://robohash.org/mail@ashallendesign.co.uk",
      },
      {
        name: "Homem Aranha",
        attack: 150,
        defense: 111,
        speed: 110,
        hp: 90,
        image_url: "https://robohash.org/mail@ashallendesign.co.uk",
      },
      {
        name: "Gavião",
        attack: 150,
        defense: 111,
        speed: 110,
        hp: 90,
        image_url: "https://robohash.org/mail@ashallendesign.co.uk",
      },
    ]);
  }),

  http.post("/monsters", async ({ request }) => {
    const body = await request.json();
    return new HttpResponse(JSON.stringify({ id: 1, body }), { status: 201 });
  }),
];
