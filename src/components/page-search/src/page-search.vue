<template>
  <div class="page-search">
    <hz-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="Refresh" @click="handleResetClick">重置</el-button>
          <el-button type="primary" icon="Search" @click="handleQueryClick">
            搜索
          </el-button>
        </div>
      </template>
    </hz-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HzForm from '@/base-ui/form'

export default defineComponent({
  emits: ['resetBtnClick', 'queryBtnClick'],
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: { HzForm },
  setup(props, { emit }) {
    // 双向绑定的属性应该是由配置文件的field来决定
    // formData中的属性应该动态来决定
    const formItems = props.searchFormConfig.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    // 2. 当用户点击重置
    const handleResetClick = () => {
      formData.value = formOriginData
      emit('resetBtnClick')
    }

    // 3. 当用户点击搜索
    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }

    return { formData, handleResetClick, handleQueryClick }
  }
})
</script>

<style lang="less" scoped>
.handle-btns {
  padding: 0 50px 20px 0;
  text-align: right;
}
</style>
