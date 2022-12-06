import { useStore } from '@/store'

export function usePermission(pageName: string, handleName: string) {
  if (pageName === 'user') pageName = 'users' // 懒得和接口统一了，这里单独做个判断
  const store = useStore()
  const permissions = store.state.login.permissions
  const verifyPermission = `system:${pageName}:${handleName}`

  return permissions.includes(verifyPermission)
}
