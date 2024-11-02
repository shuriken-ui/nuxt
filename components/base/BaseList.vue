<script lang="ts">
export default defineComponent({
  props: {
    /**
     * If the list should be ordered.
     */
    ordered: {
      type: Boolean,
      default: false,
    },
    /**
     * Force the list to be media.
     */
    media: {
      type: Boolean,
      default: undefined,
    },
  },
  setup(props, { slots }) {
    return () => {
      const ordered = props.ordered ? 'nui-list-ol' : 'nui-list-ul'
      const children = slots.default?.()
      const hasMedia
        = props.media
        ?? children?.some((vnode) => {
          return typeof vnode.type !== 'string'
        })

      return h(
        props.ordered ? 'ol' : 'ul',
        {
          class: [
            'nui-list',
            hasMedia && 'nui-list-media',
            !hasMedia && `nui-list-base ${ordered}`,
          ],
        },
        children,
      )
    }
  },
})
</script>
