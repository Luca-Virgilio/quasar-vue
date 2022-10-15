<template>
  <q-item-section v-if="icon" avatar>
    <q-icon :name="icon" />
  </q-item-section>
  <q-item-section>
    <q-item-label>{{ title }}</q-item-label>
    <q-item-label caption>{{ caption }}</q-item-label>
  </q-item-section>
</template>
<script setup lang="ts">
export interface MenuItemProps {
  title: string;
  caption?: string;
  icon?: string;
}
withDefaults(defineProps<MenuItemProps>(), {
  caption: "",
  icon: "",
});
</script>
