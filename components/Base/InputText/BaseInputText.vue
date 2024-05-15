<template>
  <div class="relative">
    <component :is="iconWrapper.component" v-bind="iconWrapper.props">
      <InputIcon v-if="$slots['prepend-icon'] || prependIcon">
        <slot name="prepend-icon">
          <Icon :name="prependIcon" size="24px" />
        </slot>
      </InputIcon>
      <InputText
        :id="label"
        :model-value="modelValue"
        class="w-full"
        :class="{
          filled: modelValue,
        }"
        :invalid="invalid || !!errorMessage"
        :placeholder="placeholder"
        :variant="variant"
        :size="size"
        :disabled="disabled"
        aria-error="error"
        @update:model-value="
          (newValue: string) => $emit('update:model-value', newValue)
        "
        @blur="$emit('blur')"
      />
    </component>
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
import IconField from "primevue/iconfield";

defineEmits(["update:model-value", "blur"]);
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  placeholder: {
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
  variant: {
    type: String as PropType<"filled" | "outlined">,
    default: "outlined",
  },
  size: {
    type: String as PropType<"small" | "large" | undefined>,
    default: undefined,
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
  prependIcon: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
  },
});

const slots = useSlots();
const iconWrapper = computed(() => {
  if (slots?.["prepend-icon"] || props.prependIcon)
    return { component: IconField, props: { iconPosition: "left" } };
  return { component: "div" };
});
</script>

<style scoped></style>
