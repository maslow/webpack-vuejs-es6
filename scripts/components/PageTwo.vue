<template>
    <panel header="Page Two" :is-open="true">
        Content of page-two
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