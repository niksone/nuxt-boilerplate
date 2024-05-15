<template>
  <div>
    <div
      v-ripple
      class="text-lg p-ripple w-full flex justify-between p-4 cursor-pointer text-surface-600"
      @click="expanded = !expanded"
    >
      <slot name="title">
        <slot name="header-title">
          {{ title }}
        </slot>
        <Icon name="ion:chevron-down" size="24px" />
      </slot>
    </div>

    <AnimationSlideTransition :is-expanded="expanded">
      <slot name="content" />
    </AnimationSlideTransition>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "",
  },
});
const expanded = ref(false);
</script>

<style scoped></style>
