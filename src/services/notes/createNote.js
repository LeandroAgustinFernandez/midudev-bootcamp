import axios from "axios";

export const createNote = ({ title, body, userid }) => {
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
