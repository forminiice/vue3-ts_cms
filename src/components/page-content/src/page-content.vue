<template>
  <div class="page-content">
    <hz-table :listData="dataList" v-bind="contentTableConfig">
      <!-- <template #header>哈哈哈</template> -->
      <template #headerHandler>
        <el-button type="primary">新建用户</el-button>
      </template>

      <!-- 列的插槽 -->
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
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue'
import { useStore } from '@/store'

import HzTable from '@/base-ui/table'

export default defineComponent({
  components: { HzTable },
  props: {
    contentTableConfig: {
      type: Object as PropType<any>,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    // const userCount = computed(() => store.state.system.userCount)
    return {
      dataList
    }
  }
})
</script>

<style lang="less" scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
