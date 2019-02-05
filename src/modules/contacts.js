import api from "../api";

const state = {
    contacts: []
};
const actions = {
    async fetchContacts({ commit }) {
        const response = await api.fetchContacts();
        commit('setContacts', response.data);
    },
    async createContact({ commit }, contact) {
        const response = await api.createContact(contact);
        commit('setContacts', response.data);
    },
    async deleteContact({ commit}, id) {
        const response = await api.deleteContact(id);
        commit('deleteContact', response.data);
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
    },
    deleteContact(state, id) {
        state.contacts = state.contacts.filter(contact => contact.id != id);
    }
};

export default {
    state,
    actions,
    getters,
    mutations
}