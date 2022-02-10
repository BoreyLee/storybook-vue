<template>
  <form>
    <slot />
  </form>
</template>

<script>
export default {
  name: "LbrForm",
  provide() {
    return {
      form: this,
    };
  },
  props: {
    model: {
      type: Object,
    },
    rules: {
      type: Object,
    },
  },
  methods: {
    validate(callback) {
      const tasks = this.$children
        .filter((child) => child.prop)
        .map((child) => {
          child.validate();
        });
      Promise.all(tasks)
        .then(() => {
          callback(true);
        })
        .catch(() => {
          callback(false);
        });
    },
  },
};
</script>
