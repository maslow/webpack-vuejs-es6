<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <ul class="nav nav-pills nav-stacked">
                    <li v-link="{ path: '/page1' }"><a>Page 1</a></li>
                    <li v-link="{ path: '/page2' }"><a>Page 2</a></li>
                </ul>
            </div>
            <div class="col-md-8">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .container {
        margin-top:50px;
    }
</style>