import axios from 'axios';

const ROOT_URL = "http://localhost:8000";

export default {
    fetchProjects() {
        return axios.get(`${ROOT_URL}/projects`);
    },
    editProject(project) {
        return axios.post(`${ROOT_URL}/update/${project.id}`, project)
    },
    createProject(project) {
        console.log("PROJECT CREATE", project)
        return axios.post(`${ROOT_URL}/projects`, project);
    },
    deleteProject(id) {
        console.log("DELETE", id);
        return axios.delete(`${ROOT_URL}/delete/${id}`);
    }
}