import Vue from 'vue'
import helpers from '@/helpers/helper'

const helper = {
  install () {
    Vue.prototype.$helpers = helpers
  }
}

Vue.use(helper)
