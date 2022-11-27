<template>
  <div class="page-search">
    <hz-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="Refresh">重置</el-button>
          <el-button type="primary" icon="Search">搜索</el-button>
        </div>
      </template>
    </hz-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HzForm from '@/base-ui/form'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: { HzForm },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return { formData }
  }
})
</script>

<style lang="less" scoped>
.handle-btns {
  padding: 0 50px 20px 0;
  text-align: right;
}
</style>
