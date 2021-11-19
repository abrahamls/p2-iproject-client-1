import Vue from "vue";
import Vuex from "vuex";
import axios from "../apis/server";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogged: false,
    parties: [],
    leadParties: [],
    memberParties: [],
    pendingParties: [],
  },
  mutations: {
    SET_IS_LOGGED(state, payload) {
      state.isLogged = payload;
    },
    SET_PARTIES(state, payload) {
      state.parties = payload;
    },
    SET_LEAD_PARTIES(state, payload) {
      state.leadParties = payload;
    },
    SET_MEMBER_PARTIES(state, payload) {
      state.memberParties = payload;
    },
    SET_PENDING_PARTIES(state, payload) {
      state.pendingParties = payload;
    },
  },
  actions: {
    login(context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: "/login",
          method: "POST",
          data: payload,
        })
          .then(({ data }) => {
            context.commit("SET_IS_LOGGED", true);
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    register(_, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: "register",
          method: "POST",
          data: payload,
        })
          .then(() => {
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    fetchParties(context) {
      return new Promise((resolve, reject) => {
        axios({
          url: "/party",
          method: "GET",
          headers: {
            access_token: localStorage.access_token,
          },
        })
          .then(({ data }) => {
            context.commit("SET_PARTIES", data);
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    createParty(_, payload) {
      return new Promise((resolve, reject) => {
        axios({
          url: "/party",
          method: "POST",
          data: payload,
          headers: {
            access_token: localStorage.access_token,
          },
        })
          .then((res) => {
            console.log(res.data);
            resolve(res);
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      });
    },
    addRole(_, id) {
      return new Promise((resolve, reject) => {
        axios({
          url: "/player/role",
          method: "post",
          data: {
            RoleId: id,
          },
          headers: {
            access_token: localStorage.access_token,
          },
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    updateRank(_, rank) {
      return new Promise((resolve, reject) => {
        axios({
          url: "/player/rank",
          method: "patch",
          headers: {
            access_token: localStorage.access_token,
          },
          data: {
            rank,
          },
        })
          .then(() => {
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    requestParty(_, id) {
      return new Promise((resolve, reject) => {
        axios({
          url: `/party/${id}`,
          method: "post",
          headers: {
            access_token: localStorage.access_token,
          },
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    fetchLeadParty(context) {
      return new Promise((resolve, reject) => {
        axios({
          url: "/party/leadparties",
          method: "get",
          headers: {
            access_token: localStorage.access_token,
          },
        })
          .then(({ data }) => {
            context.commit("SET_LEAD_PARTIES", data);
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    fetchMemberParty(context) {
      return new Promise((resolve, reject) => {
        axios({
          url: "/party/memberparties",
          method: "GET",
          headers: {
            access_token: localStorage.access_token,
          },
        })
          .then(({ data }) => {
            context.commit("SET_MEMBER_PARTIES", data);
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    // fetchPendingParty(context) {
    //   return new Promise((resolve, reject) => {
    //     axios({
    //       url: "/party/pendingparties",
    //       method: "get",
    //       headers: {
    //         access_token: localStorage.access_token,
    //       },
    //     })
    //       .then(({ data }) => {
    //         context.commit("SET_PENDING_PARTIES", data);
    //         resolve();
    //       })
    //       .catch((err) => {
    //         reject(err);
    //       });
    //   });
    // },
    fetchPendingMembers(_, partyId) {
      return new Promise((resolve, reject) => {
        axios({
          url: `/party/pendingmembers/${partyId}`,
          method: "get",
          headers: {
            access_token: localStorage.access_token,
          },
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    acceptMember(_, payload) {
      return new Promise((resolve, reject) => {
        console.log(payload);
        axios({
          url: "/player/status",
          method: "patch",
          params: payload,
          headers: {
            access_token: localStorage.access_token,
          },
        })
          .then(() => {
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    fecthPartyMembers(_, partyId) {
      return new Promise((resolve, reject) => {
        axios({
          url: `/party/partymembers/${partyId}`,
          method: "get",
          headers: {
            access_token: localStorage.access_token,
          },
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
  modules: {},
});
