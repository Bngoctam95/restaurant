<template>
  <a href="#" class="btn"><slot /></a>
</template>
<script>
export default {
  name: 'BaseButton'
}
</script>
<style lang="scss" scoped>
  .btn {
    margin-top: 1rem;
    display: inline-block;
    font-size: 1.7rem;
    color: #fff;
    background-color: var(--black);
    border-radius: .5rem;
    cursor: pointer;
    padding: .8rem 3rem;

    &:hover {
      background-color: var(--green);
      letter-spacing: .1rem;
    }
  }
</style>
