import axios from 'axios';

const ROOT_URL = "postgres://dbgluabxzbbktx:8885ab04edbb2b51b51acf5cbfdfe035438c9f0f1b6ebf1a24b6d67b0d02d364@ec2-23-21-244-254.compute-1.amazonaws.com:5432/d54p9sba513289";

export default {
    //PROJECTS
    fetchProjects() {
        return axios.get(`${ROOT_URL}/projects`);
    },
    editProject(project) {
        return axios.post(`${ROOT_URL}/update/${project.id}`, project)
    },
    createProject(project) {
        return axios.post(`${ROOT_URL}/projects`, project);
    },
    deleteProject(id) {
        return axios.delete(`${ROOT_URL}/delete/${id}`);
    },
    
    //CONTACTS
    fetchContacts() {
        return axios.get(`${ROOT_URL}/contacts`);
    },
    editContact(contact) {
        return axios.post(`${ROOT_URL}/contact/update/${contact.id}`, contact)
    },
    createContact(contact) {
        return axios.post(`${ROOT_URL}/contacts`, contact);
    },
    deleteContact(id) {
        return axios.delete(`${ROOT_URL}/contact/delete/${id}`);
    }
}