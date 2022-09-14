<script>
export default {
    data() {
        return {
            count: 0
        }
    }
}
</script>

<template>
    <el-button @click="count++">Count is: {{ count }}</el-button>
</template>