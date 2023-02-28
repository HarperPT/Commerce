<template>
  <el-dropdown class="nav-dropdown" @command="handleLangs">
    <span class="el-dropdown-link">
      {{ $t("nav.lang") }}<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="(lang, i) in langs" :key="`lang-${i}`" :command="lang.value">
        {{ lang.label }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
import { langs } from "@/models/index.js"
export default {
  name: "SwitchLocale",
  data() {
    return {
      langs
    }
  },
  methods: {
    handleLangs(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>
<style scoped></style>
