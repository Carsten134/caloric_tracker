import { defineNuxtRouteMiddleware } from "nuxt/app";
import { useAuthStore } from "~/auth";

export default defineNuxtRouteMiddleware((to, from) =>{
    const authStore = useAuthStore();
    if(!authStore.authed) {
        return navigateTo('/sites/login');
    } else {
        return navigateTo('/sites/home');
    }
})