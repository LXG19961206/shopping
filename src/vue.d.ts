import Vue from "vue"
declare module "vue/types/vue" {
   interface Vue {
     $toast: (arg:string|object)=>{}
   }
}

declare module "vue/types/vue" {
  interface Vue {
    $confirm: (arg:string|object)=>{}
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $: any
  }
}