<template>
  <component 
    :is="tag"
    :href="href"
    :to="to"
    class="btn"
    :class="[`btn-${variant}`, `btn-${size}`, { 'btn-block': block, 'btn-disabled': disabled }]"
    @click="handleClick"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts">
export default {
  name: 'Button',
  props: {
    variant: {
      type: String,
      default: 'primary', // primary, secondary, outline, ghost
    },
    size: {
      type: String,
      default: 'medium', // small, medium, large
    },
    href: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    },
    block: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    tag() {
      if (this.href) return 'a';
      if (this.to) return 'router-link';
      return 'button';
    }
  },
  methods: {
    handleClick(event: Event) {
      if (this.disabled) {
        event.preventDefault();
        return;
      }
      this.$emit('click', event);
    }
  }
}
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: 6px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  white-space: nowrap;
  font-family: inherit;
}

.btn:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(44, 90, 160, 0.3);
}

/* Variants */
.btn-primary {
  background: #2c5aa0;
  color: white;
  border-color: #2c5aa0;
}

.btn-primary:hover {
  background: #1e3a6f;
  border-color: #1e3a6f;
}

.btn-secondary {
  background: #ffd700;
  color: #2c5aa0;
  border-color: #ffd700;
}

.btn-secondary:hover {
  background: #e6c200;
  border-color: #e6c200;
}

.btn-outline {
  background: transparent;
  color: #2c5aa0;
  border-color: #2c5aa0;
}

.btn-outline:hover {
  background: #2c5aa0;
  color: white;
}

.btn-ghost {
  background: transparent;
  color: #2c5aa0;
  border-color: transparent;
}

.btn-ghost:hover {
  background: rgba(44, 90, 160, 0.1);
}

/* Sizes */
.btn-small {
  padding: 8px 16px;
  font-size: 0.875rem;
}

.btn-medium {
  padding: 12px 24px;
  font-size: 1rem;
}

.btn-large {
  padding: 16px 32px;
  font-size: 1.125rem;
}

/* Modifiers */
.btn-block {
  width: 100%;
}

.btn-disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Dark theme variants */
.bg-blue .btn-primary,
.bg-dark .btn-primary {
  background: #ffd700;
  color: #2c5aa0;
  border-color: #ffd700;
}

.bg-blue .btn-primary:hover,
.bg-dark .btn-primary:hover {
  background: #e6c200;
  border-color: #e6c200;
}

.bg-blue .btn-outline,
.bg-dark .btn-outline {
  color: #ffd700;
  border-color: #ffd700;
}

.bg-blue .btn-outline:hover,
.bg-dark .btn-outline:hover {
  background: #ffd700;
  color: #2c5aa0;
}

.bg-blue .btn-ghost,
.bg-dark .btn-ghost {
  color: #ffd700;
}

.bg-blue .btn-ghost:hover,
.bg-dark .btn-ghost:hover {
  background: rgba(255, 215, 0, 0.1);
}
</style> 