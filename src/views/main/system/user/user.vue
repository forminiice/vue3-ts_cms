<template>
  <div class="user">
    <div class="search">
      <page-search :searchFormConfig="searchFormConfig" />

      <div class="content">
        <hz-table
          :listData="userList"
          :propList="propList"
          :show-index-column="showIndexColumn"
          :show-select-column="showSelectColumn"
        >
          <template #status="scope">
            <el-button
              size="small"
              :type="scope.row.enable ? 'success' : 'danger'"
              plain
            >
              {{ scope.row.enable ? '启用' : '禁用' }}
            </el-button>
          </template>
          <template #createAt="scope">
            <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
          </template>
          <template #updateAt="scope">
            <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
          </template>
          <template #handler>
            <div class="handle-btns">
              <el-link type="primary">
                <el-icon><Edit /></el-icon>编辑
              </el-link>
              <el-link type="primary">
                <el-icon><Delete /></el-icon>删除
              </el-link>
            </div>
          </template>
        </hz-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import HzTable from '@/base-ui/table'

export default defineComponent({
  name: 'user',
  components: { PageSearch, HzTable },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => store.state.system.userList)
    // const userCount = computed(() => store.state.system.userCount)

    const propList = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '手机号码', minWidth: '120' },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '250',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '250',
        slotName: 'updateAt'
      },
      {
        label: '操作',
        minWidth: '120',
        slotName: 'handler'
      }
    ]
    const showIndexColumn = true
    const showSelectColumn = true

    return {
      searchFormConfig,
      userList,
      propList,
      showIndexColumn,
      showSelectColumn
    }
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
