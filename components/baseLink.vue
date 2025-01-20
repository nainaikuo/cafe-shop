<script setup lang="ts">
const props = defineProps<{ href: string }>();
</script>

<template>
  <a :href="props.href" class="link" target="_blank">
    <slot />
  </a>
</template>

<style lang="scss" scoped>
.link {
  position: relative;
  color: $black;

  &:hover {
    text-decoration: underline;
  }
}
</style>
