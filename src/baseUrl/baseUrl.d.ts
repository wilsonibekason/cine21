import axios from "axios";

export const IMDBURL: string =
  "https://imdb-api.com/en/API/Top250Movies/k_0n6018ff";

export default axios.create({
  baseURL: "https://myjournserver.herokuapp.com",
  timeout: 30000,
  headers: {
    // Accept: "multipart/form-data",
    //"Content-Type": "multipart/form-data",
    Authorization: `Bearer ${token}`,
  },
});

axios
  .request<ServerData>({
    url: "https://example.com/path/to/data",
    transformResponse: (r: ServerResponse) => r.data,
  })
  .then((response) => {
    // `response` is of type `AxiosResponse<ServerData>`
    const { data } = response;
    // `data` is of type ServerData, correctly inferred
  });

axios.create<ServerData>({
  baseURL: IMDBURL,
  timeout: 30000,
});

export const options = {
  method: "GET",
  url: "https://movie-database-alternative.p.rapidapi.com/",
  params: { s: "Avengers Endgame", r: "json", page: "1" },
  headers: {
    "X-RapidAPI-Key": "3994bcea9dmshc19239942a67f80p1f2d7djsnb91328436a1a",
    "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
