require '../node_modules/bootstrap/dist/css/bootstrap.css'

Vue = require 'vue'

PageOne = require './components/PageOne.vue'
PageTow = require './components/PageTwo.vue'

new Vue
  el: '#app'
  data:
    pages: [
      {name: 'page-one', title: 'Page One'}
      {name: 'page-two', title: 'Page Tow'}
    ]
    page:
      name: 'page-one', title: 'Page One'
  methods:
    route: (i) ->
      @page = @pages[i]

  components:
    'page-one': PageOne
    'page-two': PageTow