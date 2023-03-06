<template>
    <div class="navbar">
        <!-- Navigation bar -->
        <header class="header">
            <!-- Logo -->
            <!-- Hamburger icon -->
            <input class="side-menu" type="checkbox" id="side-menu" />
            <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
            <!-- Menu -->
            <nav class="nav">
                <ul class="menu">
                    <li>
                        <img src="@/assets/img/nav-help.svg" /><a href="#">{{
                            $t("nav.help")
                        }}</a>
                    </li>
                    <li>
                        <img src="@/assets/img/nav-user.svg" /><a href="#"
                            @click="handleRoute('/checkout/step-1-my-data')">{{
                                $t("nav.sign_in")
                            }}</a>
                    </li>
                    <li class="subnav li-subnavbtn">
                        <p class="subnavbtn">
                            {{ $t("nav.lang") }}<i class="fa fa-caret-down"></i>
                        </p>
                        <div class="subnav-content">
                            <a v-for="(lang, i) in langs" :key="`lang-${i}`" href="#" @click="handleLangs(lang.value)">
                                {{ lang.label }}</a>
                        </div>
                    </li>
                    <li class="li-dropdown">
                        <a>
                            <SwitchLanguageVue />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script>
import SwitchLanguageVue from "./SwitchLanguage.vue";
import { langs } from "@/models/index.js"
export default {
    components: {
        SwitchLanguageVue,
    },
    name: "NavigatorSimple",
    data() {
        return { langs };
    },
    methods: {
        handleRoute(path) {
            if (this.$router.currentRoute.path == path) {
                return
            }
            this.$store.dispatch('step/backToCheckoutIndex')
            this.$router.push(path);
        },
        handleLangs(lang) {
            this.$i18n.locale = lang;
        },
    },
};
</script>
<style>
/* Theming */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
/* import font */

/* variables*/

/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
}

/* Header */
.header {
    background-color: var(--bg-grey);
    box-shadow: 1px 1px 5px 0px var(--gray);
    position: relative;
    /* top: 100px; */
    width: 100%;
}

/* Logo */
.logo {
    display: inline-block;
    color: var(--white);
    font-size: 60px;
    margin-left: 10px;
}

/* Nav menu */
.nav {
    width: 100%;
    height: 100%;
    background-color: var(--bg-grey);
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.5s ease-out;
}

.menu {
    float: none;
    text-align: center;
}

.menu a {
    display: block;
    color: black;
    width: 100%;
}

.menu a:hover {
    background-color: var(--gray);
}

.menu img {
    display: none;
}

.menu li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2% 0;
}

.menu li.li-subnavbtn {
    display: block;
}

.menu li.li-dropdown {
    display: none;
}

/* Menu Icon */
.hamb {
    cursor: pointer;
    float: right;
    padding: 40px 20px;
}

/* Style label tag */

.hamb-line {
    background: var(--black);
    display: block;
    height: 2px;
    position: relative;
    width: 24px;
}

/* Style span tag */

.hamb-line::before,
.hamb-line::after {
    background: var(--black);
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
}

.hamb-line::before {
    top: 5px;
}

.hamb-line::after {
    top: -5px;
}

.side-menu {
    display: none;
}

/* Hide checkbox */

/* Toggle menu icon */
.side-menu:checked~nav {
    max-height: 100%;
}

.side-menu:checked~.hamb .hamb-line {
    background: transparent;
}

.side-menu:checked~.hamb .hamb-line::before {
    transform: rotate(-45deg);
    top: 0;
}

.side-menu:checked~.hamb .hamb-line::after {
    transform: rotate(45deg);
    top: 0;
}

/* Sub nav */

.subnav-content {
    background-color: var(--white);
    width: 100%;
    z-index: 1;
    padding: 20px 0;
    display: none;
}

.subnav-content a {
    color: var(--black);
    text-decoration: none;
    padding: 0;
}

.subnav:hover .subnav-content {
    display: block;
}

/* Responsiveness */
@media (min-width: 768px) {
    .nav {
        width: 100%;
        max-height: none;
        top: 0;
        position: sticky;
        background-color: transparent;
    }

    .menu {
        box-sizing: border-box;
        margin-right: 2%;
        float: right;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .menu a {
        padding: 0 5px;
    }

    .menu a:hover {
        background-color: transparent;
        color: var(--gray);
    }

    .menu img {
        display: block;
    }

    .menu li {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
    }

    .menu li.li-subnavbtn {
        display: none;
    }

    .menu li.li-dropdown {
        display: block;
        color: black;
    }

    .el-dropdown-link {
        color: black;
    }

    .hamb {
        display: none;
    }

    .subnav {
        overflow: visible;
        height: 100%;
        z-index: 99;
        /* border: 1px springgreen solid; */
    }

    .subnav-content {
        position: absolute;
        display: block;
        overflow: visible;
        background-color: var(--white);
        border: 1px solid var(--black);
        width: auto;
        padding: 20px;
        z-index: 2;
    }

    .subnav-content a {
        color: black;
        border: 1px solid var(--black);
        margin: 0;
        width: 100%;
        height: 300px;
    }
}
</style>
