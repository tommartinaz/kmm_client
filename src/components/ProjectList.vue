<template>
  <b-container fluid id="project-list" class="flex-cols pr-2 pl-2">
    <b-row no-gutters>
      <b-col cols="12" class="create-btn-row">
        <div>
          <b-btn
          v-b-modal.modalEdit
          v-b-modal.modal-center
          class="create-btn mt-2 px-2">
            Create New Project
          </b-btn>
        </div>
      </b-col>
    </b-row>

    <b-row no-gutters>
      <b-col cols="12" class="text-left ml-2 mt-5">
        <h3 id="title-project-list" class="display-5">Portfolio Management</h3>
      </b-col>
    </b-row>
    <div>
      <b-modal id="modalEdit"
         ref="modal"
         :title="form_data.id ? 'Edit Existing Project Details' : 'Enter New Project Details'"
         @ok="handleSubmit"
         @hidden="clearName">
        <form @submit.stop.prevent="handleEdit">
          <b-form-input
            class="mb-3 project-id"
            type="text"
            disabled
            v-model="form_data.id">
          </b-form-input>
          <p>Client Name</p>
          <b-form-input
            class="mb-3"
            type="text"
            v-model="form_data.client_name">
          </b-form-input>

          <p>Company</p>
          <b-form-input
            class="mb-3"
            type="text"
            v-model="form_data.company">
          </b-form-input>

          <p>Project Name</p>
          <b-form-input
            class="mb-3"
            type="text"
            v-model="form_data.project_name">
          </b-form-input>

          <p>Date Published (Mon. YYYY)</p>
          <b-form-input
            class="mb-3"
            type="text"
            v-model="form_data.published">
          </b-form-input>

          <p>Runtime/Length (Ex. 3:45)</p>
          <b-form-input
            class="mb-3"
            type="text"
            v-model="form_data.length">
          </b-form-input>

          <p>Vimeo ID# (Ex. 222111333)</p>
          <b-form-input
            class="mb-3"
            type="number"
            v-model="form_data.vimeo_id">
          </b-form-input>

          <p>Project Description</p>
          <b-form-textarea
            class="mb-3"
            type="textarea"
            v-model="form_data.description"
            :rows="3"
            :max-rows="6">
          </b-form-textarea>

          <p>Select a category</p>
          <b-form-select
            :options="options"
            class="mb-3"
            v-model="form_data.c2">
          </b-form-select>

          <p>Select a category</p>
          <b-form-select
            :options="options"
            class="mb-3"
            v-model="form_data.c3">
          </b-form-select>
        </form>
      </b-modal>
    </div>

      <b-row no-gutters class="project-table-container mt-3">
          <b-col cols="12">
            <b-table
                class="project-table"
                responsive
                stacked="lg"
                small
                hover
                outlined
                tdClass="text-center"
                :items="projects"
                :fields="fields"
            >
                <template slot="edit" slot-scope="row">
                    <i class="fa fa-pencil-square-o"
                    style="color:blue; display:flex; justify-content:center;"
                    aria-hidden="true"
                    v-b-modal.modalEdit
                    v-b-modal.modal-center
                    @click="loadEdit(row.index)"
                    ></i>
                </template>

                <template slot="delete" slot-scope="row" style="text-align:center;">
                    <i class="fa fa-trash-o"
                    style="color:red; display:flex; justify-content:center;"
                    aria-hidden="true"
                    @click="delProject(row.item.id)"
                    ></i>
                </template>
            </b-table>
          </b-col>
      </b-row>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex';
import { project_fields, project_options } from '../data';
export default {
    name: "ProjectList",
    data() {
        return {
            selected: null,
            fields: project_fields,
            options: project_options,
            form_data: {
                id: "",
                client_name:"",
                company: "",
                project_name:"",
                date_published: "",
                length:"",
                vimeo_id:"",
                description:"",
                c2:null,
                c3:null
            },
        }
    },
    methods: {
        ...mapActions([
            'editProject', 'createProject', 'deleteProject'
        ]),
        loadEdit(id) {
            // this.edit_form_data = this.projects[id]
            this.form_data = this.projects[id];
        },
        delProject(id) {
            this.deleteProject(id);
        },
        clearName() {
            this.form_data = {
                client_name: "",
                company: "",
                project_name: "",
                date_published: "",
                length: "",
                vimeo_id: "",
                description: "",
                c2: "",
                c3: "",
            }
        },
        handleSubmit() {
            console.log("HANDLE SUBMIT", this.$refs);
            if(this.form_data.id) {
              this.editProject(this.form_data);
            } else {
              this.createProject(this.form_data);
            }
            this.clearName();
            this.$refs.modal.hide();
        }
    },
    computed: {
        projects() {
            return this.$store.state.projects.projects;
        }
    },
    // methods: {
    //     ...mapActions()
    // },
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.project-table-container >>> th:nth-child(1),
.project-table-container >>> th:nth-child(6),
.project-table-container >>> th:nth-child(7),
.project-table-container >>> th:nth-child(10),
.project-table-container >>> th:nth-child(11) {
  text-align: center;
}

.project-table-container >>> tr,
.project-table-container >>> th,
.project-table-container >>> td {
  border: 1px solid grey;
}

.project-table-container >>> th {
  background-color: #555555;
  color: white;
}

.project-table {
  /* margin-top: 10px; */
  margin-bottom: 20px;
}

.project-table-container >>> td:nth-of-type(1),
.project-table-container >>> td:nth-of-type(6),
.project-table-container >>> td:nth-of-type(7) {
  text-align: center;
}

#project-list {
  display: flex;
  flex-direction: column;
  height: 86vh;
  margin: 5px;
  overflow-y: scroll;
  overflow-x: hidden;
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
  padding-top: 1px;
  padding-botton: 1px;
  border-color: #aaaaaa;
}

.del-btn {
  background-color: red;
  padding-top: 1px;
  padding-botton: 1px;
  border-color: #aaaaaa;
}
#title-project-list {
  margin-bottom: 30px;
}

.project-id {
  display: none
}
</style>

