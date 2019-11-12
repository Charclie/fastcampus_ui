import Banner from "./packages/Banner/Banner.vue";

const components = [Banner];

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  version: "0.1.0",
  Banner
};
