// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

import App from '../shared/components/App'
import Index from '../shared/components/Index'

export default {
  path: '/',
  component: App,
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./AboutRoute')
      ])
    })
  },
  indexRoute: {
    component: Index
  }
}
