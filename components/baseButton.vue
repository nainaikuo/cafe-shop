<template>
  <button class="button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  --button-bg-color: #{$secondary};
  --button-border-color: #{$black};
  --button-text-color: #{$black};
  cursor: pointer;
  background: var(--button-bg-color);
  color: var(--button-text-color);
  padding: 4px 12px;
  border: 1px solid var(--button-border-color);
  border-radius: 4px;
  &:hover {
    --button-bg-color: #{$primary};
    --button-text-color: #{$white};
    --button-border-color: #{$white};
  }
}
</style>
