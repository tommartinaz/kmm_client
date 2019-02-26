<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "App",
    methods: {
        ...mapActions([
            'fetchProjects',
            'fetchContacts'
        ]),
    },
    created() {
        this.fetchProjects();
        this.fetchContacts();
    }
}

</script>
