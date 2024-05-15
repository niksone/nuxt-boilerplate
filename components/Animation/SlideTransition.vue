<template>
  <transition name="expand">
    <div v-show="isExpanded" ref="content">
      <slot />
    </div>
  </transition>
</template>

<script setup lang="ts">
defineProps<{ isExpanded: boolean }>();
const content = ref();
const height = ref();

onMounted(() => {
  content.value.style.display = "flex";
  height.value = `${content.value.getBoundingClientRect().height}px`;
  content.value.style.display = "none";
});
</script>

<style scoped lang="scss">
.expand-leave-active,
.expand-enter-active {
  transition: all 350ms ease;
  overflow: hidden;
}

.expand-enter-to,
.expand-leave-from {
  height: v-bind(height);
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  height: 0;
}
</style>
