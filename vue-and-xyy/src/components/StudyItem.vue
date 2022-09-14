<template>
  <van-swipe-cell>
    <van-cell :border="false" size="large">
      <template #title>
        Fuck
      </template>
      <template #right-icon>
        <van-circle
          :current-rate="90"
          :rate="30"
          :speed="100"
          :stroke-width="60"
          size="30px"
        />

      </template>
    </van-cell>
    <template #right>
      <van-button square type="danger" text="删除" />
      <van-button square type="primary" text="编辑" />
    </template>
  </van-swipe-cell>
</template>

<script>
  

</script>

