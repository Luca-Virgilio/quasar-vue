<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Quasar library </q-toolbar-title>

        <div>{{ formattedDate }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above :width="250" :breakpoint="400">
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <EssentialLink v-for="link in items" :key="link.title" v-bind="link" />
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">Razvan Stoenescu</div>
          <div>@rstoenescu</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import EssentialLink, { EssentialLinkProps } from "components/EssentialLink.vue";
import { date } from "quasar";

const timeStamp = Date.now();
const formattedDate = date.formatDate(timeStamp, "Do MMM YYYY");

const items: EssentialLinkProps[] = [
  {
    title: "Display & style",
    icon: "laptop_mac",
    routePage: "/display",
  },
  {
    title: "Pinia",
    icon: "local_grocery_store",
    routePage: "/store",
  },
  {
    title: "Doc",
    caption: "quasar.dev",
    icon: "text_snippet",
    link: "https://quasar.dev",
  },
  {
    title: "Git hub",
    caption: "github.com/quasarframework",
    icon: "developer_mode",
    link: "https://github.com/quasarframework",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
