import axios from "axios";

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
