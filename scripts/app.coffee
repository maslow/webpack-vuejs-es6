Vue = require 'vue'

new Vue
  el: '#app'
  data:
    messages: []
    message: ''
  methods:
    add: () ->
      @messages.push(text: @message) if @message.trim()
      @message = ''
    remove: (i) -> @messages.splice i, 1