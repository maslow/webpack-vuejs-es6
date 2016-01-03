import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import PageOne from './components/PageOne.vue'
import PageTwo from './components/PageTwo.vue'
import * as VueStrap from 'vue-strap';

const vm = new Vue({
    el: 'body',
    data: {
        pages: [
            {name: 'page-one', title: 'Page One'},
            {name: 'page-two', title: 'Page Two'}
        ],
        page: {name: 'page-one', title: 'Page One'}
    },
    methods: {
        route (i) {
            this.page = this.pages[i]
        }
    },
    components: {
        'page-one': PageOne,
        'page-two': PageTwo,
        'accordion': VueStrap.accordion,
        'panel': VueStrap.panel
    }
});
