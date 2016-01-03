<template>
    <panel header="Page One" :is-open="true">
        Content of page-one
    </panel>
</template>

<script>
    import {panel} from 'vue-strap'
    export default {
        components: {
            panel
        }
    }
</script>