import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

instance.interceptors.request.use(
  function (config) {
    const user = sessionStorage.getItem('token')
    if (!token) {
      config.headers.authorization = null;
      config.headers['refresh-token'] = null;
      return config
    }

    const token = user
    console.log(JSON.parse(user))
  }
)


const token = sessionStorage.getItem("token");
// const token = localStorage.getItem("token");

instance.defaults.headers.common["Authorization"] = token ? `${token}` : null;

export default instance;