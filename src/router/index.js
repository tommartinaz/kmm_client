import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import ProjectList from '../components/ProjectList';
import ContactList from '../components/ContactList';
import OnLoad from '../components/OnLoad';

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {
          path: '/',
          name: 'Login',
          component: Login
        },
        {
          path: '/dashboard',
          component: Dashboard,
          children: [
            {
              path: '',
              name: 'OnLoad',
              component: OnLoad
            },
            {
                path: '/dashboard/project-mgmt',
                name: 'ProjectList',
                component: ProjectList
            },
            {
                path: '/dashboard/contact-mgmt',
                name: 'ContactList',
                component: ContactList
            }
          ]
        },
      ]
    ,
    mode: 'history'
});