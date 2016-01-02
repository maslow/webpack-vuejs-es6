import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import PageOne from './components/PageOne.vue'
import PageTwo from './components/PageTwo.vue'

new Vue({
    el: 'body',
    data: {
        pages: [
            {name: 'page-one', title: 'Page One'},
            {name: 'page-two', title: 'Page Tow'}
        ],
        page: {name: 'page-one', title: 'Page One'}
    },
    methods: {
        route: function (i) {
            this.page = this.pages[i]
        }
    },
    components: {
        PageOne,
        PageTwo
    }
});