import axios from "axios";

export const getAllNotes = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    const { data } = res;
    return data;
  });
};

export const createNote = ({ title, body, userid }) => {
  //forzar el error
  // return Promise.reject("something bad happend");
  return axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      userId: userid,
      title: title,
      body: body,
    })
    .then((res) => {
      const { data } = res;
      return data;
    });
};
