<template>
  <div class="toggle-set" @click="handleChange">
    <input
      :id="toggleId"
      :checked="checkedValue"
      type="checkbox"
      class="toggle-set__input"
    />
    <label :for="toggleId" class="toggle-set__button"></label>
  </div>
</template>
F
<script setup>
import { computed } from "vue";
const emit = defineEmits(["change", "update:value"]);

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: Boolean,
  },
  toggleId: {
    type: String,
    required: true,
  },
});

const checkedValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

function handleChange(e) {
  if (props.disabled) {
    e.preventDefault();
  }
  emit("change", props.toggleId, checkedValue.value);
  console.log(checkedValue.value);
}
</script>


<style scoped lang="scss">
.toggle-set {
  position:relative;
  &:after {
    content:"";
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;

  }
  &__input {
    display: none;

    &:checked + .toggle-set__button {
      background: #23ee3f;
    }

    &:checked + .toggle-set__button::after {
      transform: translateX(19px);
    }
  }

  &__button {
    position: relative;
    display: block;
    width: 46px;
    height: 26px;
    border-radius: 13px;
    padding: 2px 3px;
    background: #dbddde;
    transition: all .2s ease;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      top: 2px;
      left: 3px;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: #fff;
      transition: all .2s ease;
    }
  }
}
</style>