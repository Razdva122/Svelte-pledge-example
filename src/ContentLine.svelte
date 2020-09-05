<svelte:options tag="pledges-content-line" immutable={true} />

<div class:content-line--close="{close}" class="content-line">
  <span class="content-line__title" class:content-line__title--close="{close}">{title}</span>
  <span class="content-line__value" class:content-line__value--danger="{danger}">
    {value}
  </span>
</div>

<script lang="ts">
  export let close: boolean = false;
  export let danger: boolean = false;
  export let title: string;
  export let value: string;
</script>

<style>
  .content-line {
    display: flex;
    width: 100%;
    font-size: 14px;
    letter-spacing: -0.02em;
  }

  .content-line__title {
    width: 50%;
    padding-right: 8px;
    font-weight: 300;
  }

  .content-line__value {
    width: 100%;
    font-weight: 400;
  }

  .content-line__value--danger {
    color: #ff0624;
  }

  .content-line--close {
    width: auto;
  }

  .content-line__title--close {
    width: auto;
  }
</style>
