<template>
  <div class="header-item">
    <div>
      <slot name="welcome"></slot>
    </div>
    <slot name="header-img"></slot>
    <div>
      <slot name="to-user-name"></slot>
    </div>
    <cut-off-rule></cut-off-rule>
  </div>
</template>

<script>
  import CutOffRule from "./CutOffRule";
  export default {
    name: "HeaderItem",
    components:{
      CutOffRule
    }
  }
</script>

<style scoped>

</style>