<template>
    <b-container fluid id="contact-list" class="flex-cols pr-2 pl-2">
        <b-row no-gutters>
            <b-col cols="12" class="create-btn-row">
                <div>
                    <b-btn
                        v-b-modal.modalContact
                        v-b-modal.modal-center
                        class="create-btn mt-2 px-2"
                    >
                        Create New Contact
                    </b-btn>

                    <b-modal
                        id="modalContact"
                        ref="modal"
                        :title="!form_data.id ? 'Enter Contact Information' : 'Update Contact Information'"
                        @ok="handleSubmit"
                        @hidden="clearName"
                    >
                        <form @submit.stop.prevent="handleSubmit">
                            <b-form-input class="contact-id" v-model="form_data.id">
                            </b-form-input>

                            <p>Name</p>
                            <b-form-input class="mb-3" type="text" v-model="form_data.name">
                            </b-form-input>

                            <p>Company</p>
                            <b-form-input class="mb-3" type="text" v-model="form_data.company">
                            </b-form-input>

                            <p>Website</p>
                            <b-form-input class="mb-3" type="text" v-model="form_data.website">
                            </b-form-input>

                            <p>Email</p>
                            <b-form-input class="mb-3" type="text" v-model="form_data.email">
                            </b-form-input>

                            <p>Phone</p>
                            <b-form-input class="mb-3" type="text" v-model="form_data.phone">
                            </b-form-input>

                            <p>Existing Client? (select one)</p>
                            <b-form-select :options="options" class="mb-3" v-model="form_data.client_status">
                            </b-form-select>

                            <p>Message</p>
                            <b-form-textarea
                                class="mb-3"
                                type="textarea"
                                v-model="form_data.message"
                                :rows="3"
                                :max-rows="6"
                            >
                            </b-form-textarea>
                        </form>
                    </b-modal>
                </div>
            </b-col>
        </b-row>
        <b-row no-gutters>
            <b-col cols="12" class="text-left ml-2 mt-5">
                <h3 id="title-contact-list" class="display-5 mt-3">Contact Management</h3>
            </b-col>
        </b-row>
        <b-row no-gutters class="contact-table-container">
            <b-col cols="12">
                <b-table
                    class="contact-table"
                    responsive
                    stacked="lg"
                    small
                    hover
                    outlined
                    :items="contacts"
                    :fields="fields"
                    :sort-by="sortBy"
                    no-sort-reset
                >
                    <template slot="edit" slot-scope="row">
                        <i
                            class="fa fa-pencil-square-o"
                            style="color:blue; display: flex; justify-content: center;"
                            aria-hidden="true"
                            v-b-modal.modalContact
                            v-b-modal.modal-center
                            @click="loadEdit(row.index)"
                        ></i>
                    </template>
                    <template slot="delete" slot-scope="row" style="text-align:center;">
                        <i
                            class="fa fa-trash-o"
                            style="color:red; display:flex; justify-content:center;"
                            aria-hidden="true"
                            @click="delContact(row.item.id)"
                        ></i>
                    </template>
                </b-table>
            </b-col>
        </b-row>

    </b-container>
</template>

<script>
    import {
        contact_fields,
        contact_options
    } from '../data';
    import { mapActions } from 'vuex';

    export default {
        name: "Contacts",
        data() {
            return {
                form_data: {
                    id: "",
                    name: "",
                    company: "",
                    website: "",
                    email: "",
                    phone: "",
                    client_status: null,
                    message: ""
                },
                fields: contact_fields,
                options: contact_options,
                sortBy: "id"
            }
        },
        computed: {
            contacts() {
                return this.$store.state.contacts.contacts;
            }
        },
        methods: {
            loadEdit(id) {
                this.form_data = this.contacts[id];
            },
            handleSubmit() {
                if(this.form_data.id) {
                    this.$store.dispatch('editContact', this.form_data)
                } else {
                    this.$store.dispatch('createContact', this.form_data)
                }
                this.clearName();
                this.$refs.modal.hide();
            },
            delContact(id) {
                this.$store.dispatch('deleteContact', id);
            },
            clearName() {
                this.form_data = {
                    id: "",
                    name: "",
                    company: "",
                    website: "",
                    email: "",
                    phone: "",
                    client_status: null,
                    message: ""
                }
            }
        }
    }
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#contact-list {
  display: flex;
  flex-direction: column;
  height: 86vh;
  margin: 5px;
  overflow-y: scroll;
  overflow-x: hidden;
}

/* column header */
.contact-table-container >>> th:nth-child(1) {
  text-align: center;
}

.contact-table-container >>> th:nth-child(6),
.contact-table-container >>> th:nth-child(7) {
  width: 130px;
}

.contact-table-container >>> th:nth-child(2),
.contact-table-container >>> th:nth-child(3)  {
  width: 170px;
}

/* column data */
.contact-table-container >>> td:nth-of-type(1) {
  text-align: center;
}

.contact-table-container >>> tr,
.contact-table-container >>> th,
.contact-table-container >>> td {
  border: 1px solid grey;
}

.contact-table-container >>> th {
  background-color: #555555;
  color: white;
}

.contact-table {
  margin: 10px 0 20px 0;
}

.create-btn-row {
  display: flex;
  justify-content: flex-end;
}

.create-btn {
  padding: 5px;
  background-color: lightgreen;
  color: #222222;
  border-color: #888888;
}
.create-btn:hover {
  padding: 5px;
  background-color: green;
  color: #dddddd;
  border-color: #222222;
}

.edit-btn {
  background-color: orange;
  padding: 1px 0;
  border-color: #aaaaaa;
}

.del-btn {
  background-color: red;
  padding: 1px 0;
  border-color: #aaaaaa;
}
#contacttitle-project-list {
  margin-bottom: 30px;
}

.contact-id {
    display: none;
}
</style>
