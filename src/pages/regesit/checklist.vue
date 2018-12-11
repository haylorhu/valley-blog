<template>
  <div class="page-checklist">
    <mt-checklist
      class="page-part"
      v-model="value2"
      :options="options2">
    </mt-checklist>
  </div>
</template>

<script>
export default {
  name: 'page-checklist',

  data() {
    return {
      value2: ['countIsOk','passwordIsOk'],
    };
  },

  created() {

    this.options2 = [
      {
        label: '用户名, 长度1到15个字符，只能是字母数字下划线中文',
        value: '值F',
        disabled: true
      },
      {
        label: '密码, 长度6到16个任意字符',
        value: 'countI1sOk',
        disabled: true
      },

    ];
  }
};
</script>

<style lang="less">
  .page-checklist .page-part {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

.mint-checkbox-input[disabled] + .mint-checkbox-core{
  background-color: rgb(236, 246, 251);
  border-color: rgb(136, 203, 255)
}
  }
</style>
