export const animeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "66bd408c7cmsh2e0609eaa118480p1ea8c8jsn61a83b5271dd",
    "X-RapidAPI-Host": "gogoanime2.p.rapidapi.com",
  },
};
export const trendingOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "66bd408c7cmsh2e0609eaa118480p1ea8c8jsn61a83b5271dd",
    "X-RapidAPI-Host": "gogoanime2.p.rapidapi.com",
  },
};

export const searchOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "66bd408c7cmsh2e0609eaa118480p1ea8c8jsn61a83b5271dd",
    "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
