<template>
  <q-item v-if="link" clickable tag="a" target="_blank" :href="link">
    <MenuItem v-bind="{ title, caption, icon }"></MenuItem>
  </q-item>
  <q-item v-else clickable @click="$router.push(routePage)">
    <MenuItem v-bind="{ title, caption, icon }"></MenuItem>
  </q-item>
</template>

<script setup lang="ts">
import MenuItem from "components/MenuItem.vue";
export interface EssentialLinkProps {
  title: string;
  caption?: string;
  link?: string;
  routePage?: string;
  icon?: string;
}
withDefaults(defineProps<EssentialLinkProps>(), {
  caption: "",
  link: null,
  routePage: "/",
  icon: "",
});
</script>
