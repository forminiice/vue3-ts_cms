import hzRequest from '@/service'
import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return hzRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
