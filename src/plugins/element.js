import Vue from "vue";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/zh-TW";
import VueI18n from "vue-i18n";
import VueRouter from "vue-router";
import VueAxios from "vue-axios";
import axios from "axios";
// import alertPlugin from "@/models/alert"
import '@/api';

Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.use(Element, { locale });
Vue.use(VueAxios, axios);
// Vue.use(alertPlugin)
