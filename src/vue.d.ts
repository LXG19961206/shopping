import Vue from "vue"
declare module "vue/types/vue" {
     interface Vue {
       $toast: any
     }
}

declare module "vue/types/vue" {
  interface Vue {
    $confirm: any
  }
}

