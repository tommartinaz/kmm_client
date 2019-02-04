<template>
    <div>
        <ProjectsList></ProjectsList>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import ProjectsList from './components/ProjectsList';
export default {
    name: "App",
    components: {
        ProjectsList
    },
    methods: {
        ...mapActions([
            'fetchProjects'
        ]),
    },
    created() {
        this.fetchProjects();
    }
}
</script>
