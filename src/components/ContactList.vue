<template>
    <div>
        {{contacts}}
    </div>
</template>

<script>
import { contact_fields, contact_options } from '../data';

export default {
    name: "Contacts",
    computed: {
        contacts() {
            return this.$store.state.contacts.contacts;
        }
    }
}
</script>

