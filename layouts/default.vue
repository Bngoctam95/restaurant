<template>
  <div>
    <PageHeader />
    <Nuxt />
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from '@/components/pages/header'
import PageFooter from '@/components/pages/footer'

export default {
  name: 'DefaultLayout',
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style lang="scss" scoped>
</style>
