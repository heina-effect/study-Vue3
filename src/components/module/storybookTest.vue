<template>
  <div class="storybookTest">
    테스트화면
    <p>{{ data }}</p>
    <p>{{ title }}</p>
    <p>{{ content }}</p>
  </div>
</template>
<script>
import { reactive } from 'vue';

export default {
  name: 'storybookTest',
  props: {
    data: {
      type: Array,
      default: () => []
    },
  },
  setup(props) {
    props = reactive(props);
    return props;
  },
  data() {
    return {
      num: 0,
    };
  },
};
</script>