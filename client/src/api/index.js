import axios from "axios";

const url = "http://localhost:5000/city/";

export const fetchWeather = (city) => /*axios.get(url);*/
{
  console.log(url + city );
  return axios.get(url + city );
};
//export const createPost = (newPost) => axios.post(url, newPost);
