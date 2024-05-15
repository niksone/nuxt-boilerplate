<template>
  <div class="relative">
    <FloatLabel>
      <Password
        :id="label"
        :model-value="modelValue"
        class="w-full"
        aria-error="error"
        :invalid="invalid || !!errorMessage"
        toggle-mask
        :feedback="feedback"
        @update:model-value="
          (newValue) => $emit('update:model-value', newValue)
        "
        @blur="$emit('blur')"
      >
        <!-- <template #header></template>
        <template #content></template>
        <template #footer>
          <slot name="footer"><PasswordRules :password="modelValue" /> </slot>
        </template> -->
      </Password>
      <label :for="label">{{ label }}</label>
    </FloatLabel>
    <small
      id="error"
      class="text-red-500"
      :class="{
        absolute: absoluteError,
      }"
    >
      {{ errorMessage }}
    </small>
  </div>
</template>

<script setup lang="ts">
defineEmits(["update:model-value", "blur"]);
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  invalid: {
    type: Boolean,
  },
  errorMessage: {
    type: String,
    default: "",
  },
  absoluteError: {
    type: Boolean,
  },
  feedback: {
    type: Boolean,
  },
});
</script>

<style scoped></style>
