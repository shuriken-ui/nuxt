<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The sizes of the image to display
     */
    sizes?: string

    /**
     * The width of the image to display
     */
    width?: number

    /**
     * The height of the image to display.
     */
    height?: number

    /**
     * The object fit property of the image to display.
     */
    fit?: 'fill' | 'cover' | 'contain' | 'none' | 'scale-down'

    /**
     * The shape of the image.
     */
    shape?: 'straight' | 'rounded' | 'curved' | 'full'

    /**
     * The alt props of the image to display.
     */
    alt?: string

    /**
     * The source of the image to display.
     */
    src?: string

    /**
     * The source of the image to display when the provided src is wrong.
     */
    fallbacSrc?: string

    /**
     * The list of images source with their corresponding widths.
     */
    srcSet?: string

    /**
     * The aspect ratio of the image to display.
     */
    aspectRatio?: string

    /**
     * The image loading mode.
     */
    loading?: 'lazy' | 'eager'
  }>(),
  {
    sizes: undefined,
    width: undefined,
    height: undefined,
    fit: 'fill',
    shape: 'straight',
    alt: undefined,
    src: undefined,
    fallbacSrc: undefined,
    srcSet: undefined,
    aspectRatio: undefined,
    loading: 'eager',
  }
)

const appConfig = useAppConfig()

const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.image)
const ratio = computed(() =>
  props.aspectRatio && /^\d+\/\d+$/.test(props.aspectRatio)
    ? props.aspectRatio?.split('/')
    : undefined
)
const imgClass = computed(() => {
  let ret = ''

  ret += props.fit && `object-${props.fit}`
  ret += ratio.value && ratio.value[0] && `aspect-w-${ratio.value[0]}`
  ret += ratio.value && ratio.value[1] && `aspect-w-${ratio.value[1]}`

  return ret
})
</script>

<template>
  <img
    :sizes="props.sizes"
    :width="props.width"
    :height="props.height"
    :alt="props.alt"
    :src="props.src ?? props.fallbacSrc"
    :srcset="props.srcSet"
    :loading="props.loading"
    :class="[
      imgClass,
      shape === 'full' && 'rounded-full',
      shape === 'rounded' && 'rounded-lg',
      shape === 'curved' && 'rounded-2xl',
    ]"
  />
</template>
