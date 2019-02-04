import api from "../api";

const state = {
    contacts: []
};
const actions = {
    async fetchContacts({ commit }) {
        const response = await api.fetchContacts();
        commit('setContacts', response.data);
    }
};
const getters = {
    allContacts(state) {
        return state.contacts;
    }
};
const mutations = {
    setContacts(state, contacts) {
        state.contacts = contacts;
    }
};

export default {
    state,
    actions,
    getters,
    mutations
}