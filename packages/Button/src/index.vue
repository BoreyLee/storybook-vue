<template>
  <div>
    <button :class="classes" @click="onClick">
      <span v-if="label">{{ label }}</span>
      <slot v-else />
    </button>
  </div>
</template>

<script>
export default {
  name: "LbrButton",
  props: {
    label: {
      type: String,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "medium",
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    classes() {
      return {
        "lbr-button": true,
        "lbr-button--primary": this.primary,
        "lbr-button--secondary": !this.primary,
        [`lbr-button--${this.size}`]: true,
      };
    },
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
      e.preventDefault();
    },
  },
};
</script>

<style>
.lbr-button {
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
}
.lbr-button--primary {
  color: white;
  background-color: #1ea7fd;
}
.lbr-button--secondary {
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
}
.lbr-button--small {
  font-size: 12px;
  padding: 10px 16px;
}
.lbr-button--medium {
  font-size: 14px;
  padding: 11px 20px;
}
.lbr-button--large {
  font-size: 16px;
  padding: 12px 24px;
}
</style>
