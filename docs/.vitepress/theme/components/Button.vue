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
@import "open-props/style";

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: var(--border-size-2) solid transparent;
  border-radius: var(--radius-2);
  font-weight: var(--font-weight-5);
  text-decoration: none;
  transition: all var(--animation-fade-in) var(--ease-3);
  cursor: pointer;
  white-space: nowrap;
  font-family: inherit;
  position: relative;
  overflow: hidden;
}

.btn:focus-visible {
  outline: var(--border-size-2) solid var(--blue-6);
  outline-offset: var(--size-1);
}

/* Variants */
.btn-primary {
  background: var(--blue-6);
  color: var(--gray-0);
  border-color: var(--blue-6);
}

.btn-primary:hover {
  background: var(--blue-7);
  border-color: var(--blue-7);
  transform: translateY(calc(-1 * var(--size-1)));
  box-shadow: var(--shadow-3);
}

.btn-secondary {
  background: var(--yellow-3);
  color: var(--blue-6);
  border-color: var(--yellow-3);
}

.btn-secondary:hover {
  background: var(--yellow-4);
  border-color: var(--yellow-4);
  transform: translateY(calc(-1 * var(--size-1)));
  box-shadow: var(--shadow-3);
}

.btn-outline {
  background: transparent;
  color: var(--blue-6);
  border-color: var(--blue-6);
}

.btn-outline:hover {
  background: var(--blue-6);
  color: var(--gray-0);
  transform: translateY(calc(-1 * var(--size-1)));
}

.btn-ghost {
  background: transparent;
  color: var(--blue-6);
  border-color: transparent;
}

.btn-ghost:hover {
  background: var(--blue-1);
  transform: translateY(calc(-1 * var(--size-1)));
}

/* Sizes with fluid scaling */
.btn-small {
  padding: var(--size-2) var(--size-3);
  font-size: clamp(var(--font-size-0), 1vw, var(--font-size-1));
  gap: var(--size-1);
}

.btn-medium {
  padding: var(--size-3) var(--size-5);
  font-size: clamp(var(--font-size-1), 1.2vw, var(--font-size-2));
  gap: var(--size-2);
}

.btn-large {
  padding: var(--size-4) var(--size-6);
  font-size: clamp(var(--font-size-2), 1.5vw, var(--font-size-3));
  gap: var(--size-3);
}

/* Modifiers */
.btn-block {
  width: 100%;
  justify-self: stretch;
}

.btn-disabled {
  opacity: var(--opacity-5);
  cursor: not-allowed;
  pointer-events: none;
}

/* Enhanced interaction states */
.btn:active {
  transform: translateY(0);
  box-shadow: var(--shadow-1);
}

/* Dark theme and context variants */
.bg-blue .btn-primary,
.bg-dark .btn-primary {
  background: var(--yellow-3);
  color: var(--blue-6);
  border-color: var(--yellow-3);
}

.bg-blue .btn-primary:hover,
.bg-dark .btn-primary:hover {
  background: var(--yellow-4);
  border-color: var(--yellow-4);
}

.bg-blue .btn-outline,
.bg-dark .btn-outline {
  color: var(--yellow-3);
  border-color: var(--yellow-3);
}

.bg-blue .btn-outline:hover,
.bg-dark .btn-outline:hover {
  background: var(--yellow-3);
  color: var(--blue-6);
}

.bg-blue .btn-ghost,
.bg-dark .btn-ghost {
  color: var(--yellow-3);
}

.bg-blue .btn-ghost:hover,
.bg-dark .btn-ghost:hover {
  background: var(--yellow-3-hsl) / 0.1;
}

/* Responsive adjustments */
@media (width <= 768px) {
  .btn-small {
    padding: var(--size-2) var(--size-3);
  }
  
  .btn-medium {
    padding: var(--size-2) var(--size-4);
  }
  
  .btn-large {
    padding: var(--size-3) var(--size-5);
  }
}

@media (width <= 480px) {
  .btn {
    min-height: var(--size-8); /* Better touch targets */
  }
  
  .btn-block {
    margin-block: var(--size-1);
  }
}

/* Animation enhancements */
@media (prefers-reduced-motion: no-preference) {
  .btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: currentColor;
    opacity: 0;
    transition: opacity var(--animation-fade-in) var(--ease-3);
  }
  
  .btn:hover::before {
    opacity: 0.1;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: background-color var(--animation-fade-in) var(--ease-3);
  }
  
  .btn:hover {
    transform: none;
    box-shadow: none;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .btn {
    border-width: var(--border-size-3);
  }
  
  .btn-ghost {
    border-color: currentColor;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .btn-primary {
    background: var(--blue-5);
    border-color: var(--blue-5);
  }
  
  .btn-primary:hover {
    background: var(--blue-4);
    border-color: var(--blue-4);
  }
  
  .btn-ghost:hover {
    background: var(--blue-9);
  }
}
</style> 