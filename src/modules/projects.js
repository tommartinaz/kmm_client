import api from '../api';

const state = {
    projects: []
};

const actions = {
    async fetchProjects({ commit }) {
        const response = await api.fetchProjects();
        commit('setProjects', response.data)
    },
    async editProject({ commit }, project) {
        const response = await api.editProject(project);
        commit('setProjects', response.data);
    },
    async createProject({ commit }, project) {
        const response = await api.createProject(project);
        console.log("RESPONSE CREATE", response);
        commit('setProjects', response.data);
    },
    async deleteProject({ commit }, id) {
        const response = await api.deleteProject(id);
        console.log(response);
        commit('deleteProject', response.data);
    }
};

const mutations = {
    setProjects(state, projects) {
        state.projects = projects;
    },
    addProject(state, project) {
        state.projects.push(project);
    },
    deleteProject(state, id) {
        state.projects = state.projects.filter(project => project.id != id);
    }
};

const getters = {
    allProjects(state) {
        return state.projects;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
}