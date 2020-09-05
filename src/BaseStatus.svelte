<div class="base-status">
  <div class="base-status-pointer base-status-pointer--{status}">
  </div>
  <slot>
  </slot>
</div>

<script lang="ts">
  type TStatus = 'neutral' | 'danger' | 'info';
  export let status: TStatus;
</script>

<style>
  .base-status {
    display: flex;
    align-items: center;
  }
  
  .base-status-pointer {
    height: 8px;
    min-width: 8px;
    border-radius: 50%;
    margin-right: 8px;
  }
  
  .base-status-pointer--neutral {
    background-color: #e5e9ed;
  }
  
  .base-status-pointer--danger {
    background-color: #ff0624;
  }
  
  .base-status-pointer--info {
    background-color: #067eff;
  }
</style>