<template>
  <Button
    :icon="icon ? 'with-icon' : undefined"
    :loading="loading"
    :rounded="rounded"
    :severity="severity"
    :outlined="outlined"
    :size="size"
    :text="text"
  >
    <span v-if="loading" class="mr-2">
      <Icon name="svg-spinners:ring-resize" />
    </span>
    <slot />
  </Button>
</template>

<script setup lang="ts">
import type { BaseButtonSeverity } from "../../../types/Button";

defineProps({
  loading: {
    type: Boolean,
  },
  rounded: {
    type: Boolean,
  },
  outlined: {
    type: Boolean,
  },
  icon: {
    type: Boolean,
  },
  severity: {
    type: String as PropType<BaseButtonSeverity>,
    default: null,
  },
  size: {
    type: String as PropType<"small" | "large" | undefined>,
    default: undefined,
  },
  text: {
    type: Boolean,
  },
});
</script>

<style scoped></style>
