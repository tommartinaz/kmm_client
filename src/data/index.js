import moment from "moment";
import { parsePhoneNumberFromString } from 'libphonenumber-js';

export const project_fields = [
    { key: 'client_name', sortable: true },
    { key: 'company', sortable: true },
    { key: 'project_name', sortable: false },
    { key: 'published', sortable: true },
    { key: 'length', sortable: false },
    { key: 'vimeo_id', sortable: false },
    { key: 'c2', sortable: true },
    { key: 'c3', sortable: true },
    { key: 'edit', sortable: false },
    { key: 'delete', sortable: false }            
];

export const project_options = [
    { value: null, text: 'Select a category', disabled: true },
    { value: 'About', text: 'About' },
    { value: 'Audition/Talent', text: 'Audition/Talent' },
    { value: 'Campaign', text: 'Campaign' },
    { value: 'DIY', text: 'DIY' },
    { value: 'Social Media', text: 'Social Media' },
    { value: 'Testimonial', text: 'Testimonial' },
];

export const contact_fields = [
    { key: 'name', sortable: true },
    { key: 'company', sortable: true },
    { key: 'website', sortable: false },
    { key: 'email', sortable: false },
    { key: 'phone', sortable: false },
    { key: 'client_status', sortable: true },
    { 
        key: 'followUp_date',
        sortable: true,
        formatter: date => {
            return moment(date) ? moment(date).format('MM/DD/YYYY') : null
        },
    },
    { key: 'followUp_status', sortable: true },
    { key: 'message', sortable: false },
    { key: 'edit', sortable: false },
    { key: 'delete', sortable: false }
];

export const contact_options = [
    { value: null, text: 'Select a category', disabled: true },
    { value: 'Existing Client', text: 'Yes' },
    { value: 'New Client', text: 'No'}
];
