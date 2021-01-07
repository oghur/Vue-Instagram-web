<template>
  <figure class="avatar">
    <img :src="src" :alt="alt" :width="size" :height="size" />
  </figure>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    src: {
      type: String,
      default:
        'https://instagram.fyei2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/133685664_2837041949907272_8927811605184593977_n.jpg?_nc_ht=instagram.fyei2-1.fna.fbcdn.net&_nc_ohc=OQGXN8RaGwQAX8NPHDK&tp=1&oh=ae014d934300e652e8f40b67253760a9&oe=601F25CC'
    },
    alt: {
      type: String
    },
    size: {
      type: Number
    }
  }
}
</script>

<style scoped>
.avatar {
  display: inline-flex;
  padding: 2px;
  border-radius: 999px;
  background: linear-gradient(
    219deg,
    rgba(184, 63, 140, 1) 0%,
    rgba(237, 158, 90, 1) 100%
  );

  img {
    border-radius: inherit;
    border: 2px solid white;
  }
}
</style>
