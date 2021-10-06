import { FETCH_WEATHER } from "./types";

export const fetchWeather = () => async (dispatch) => {
  // Islamabad, Karachi, Lahore
  const ids = {
    Islamabad: 1162015,
    Karachi: 1174872,
    Lahore: 1172451,
  };

  const fetches = await Promise.all(
    Object.values(ids).map((e) =>
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?id=${e}&appid=0c7a18a8180f633ee8c938d39a3b3df7`
      ).then((e) => e.json())
    )
  );

  dispatch({
    type: FETCH_WEATHER,
    payload: {
      // iterating through object does not guarantee order, so I chose manually
      Islamabad: fetches[0],
      Karachi: fetches[1],
      Lahore: fetches[2],
    },
  });
};
