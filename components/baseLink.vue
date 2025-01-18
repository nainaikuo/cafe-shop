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
  --underline-width: 0;

  position: relative;
  color: $black;

  @media screen and (max-width: 768px) {
    --underline-width: 100%;
  }

  &:hover {
    --underline-width: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    width: var(--underline-width);
    background: $black;
    height: 1px;
    transition: 500ms;
  }
}
</style>
