import axios from "axios";

export default  {
  // Gets all logged in users
  getUsers: function() {
    return axios.get("/api/users");
  },
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};
