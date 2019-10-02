import axios from "axios";

export default {
  getCards: function() {
    return axios.get("/api/cards");
  },
  getCard: function(id) {
    return axios.get("/api/cards/" + id);
  }
};
