import axios from 'axios';

const ROOT_URL = "ec2-23-21-244-254.compute-1.amazonaws.com:5432";

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