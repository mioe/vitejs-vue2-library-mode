<template>
  <button
    :class="[
      'ju-btn',
      kind ? `ju-btn--${kind}` : '',
      size ? `ju-btn--${size}` : '',
    ]"
    :disabled="disabled"
    :type="type"
    @click="handleClick"
  >
    <slot />
  </button>
</template>


<script>
export default {
  name: 'JamButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'button',
      validator: string => {
        return ['button', 'submit', 'reset'].includes(val)
      },
    },
    kind: {
      type: String,
      default: 'primary',
      validator: val => {
        return [
          'primary',
          'secondary',
          'tertiary',
          'danger',
          'ghost',
        ].includes(val)
      },
    },
    size: {
      type: String,
      default: 'default',
      validator: val => {
        return [
          'default',
          'field',
          'small',
        ].includes(val)
      },
    },
  },
  methods: {
    handleClick(ev) {
      this.$emit('click', ev)
    }
  },
}
</script>
