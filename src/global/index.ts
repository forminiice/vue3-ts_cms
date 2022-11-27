import { App } from 'vue'
import registerElementIcon from './register-element-icon'
import registerProperties from './register-properties'

export function globalRegister(app: App): void {
  app.use(registerElementIcon)
  app.use(registerProperties)
}
