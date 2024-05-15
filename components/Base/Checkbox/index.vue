<template>
  <div class="flex items-center cursor-pointer">
    <Checkbox
      :model-value="modelValue"
      :input-id="label"
      :binary="!group"
      @update:model-value="(newValue) => $emit('update:model-value', newValue)"
    />
    <label :for="label" class="ml-2 cursor-pointer">
      <slot> {{ label }}</slot>
    </label>
  </div>
</template>

<script setup lang="ts">
defineEmits(["update:model-value"]);
defineProps({
  modelValue: {
    type: Boolean,
  },
  label: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  group: {
    type: Boolean,
  },
});
</script>

<style scoped></style>
