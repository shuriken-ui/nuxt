export default defineAppConfig({
  nui: {
    BaseAccordion: {
      rounded: 'sm',
      action: 'dot',
    },
    BaseAvatar: {
      size: 'sm',
      rounded: 'full',
    },
    BaseAvatarGroup: {
      limit: 4,
      size: 'sm',
    },
    BaseButton: {
      variant: 'solid',
      rounded: 'sm',
      color: 'default',
      size: 'md',
    },
    BaseButtonAction: {
      rounded: 'sm',
      color: 'default',
    },
    BaseButtonClose: {
      rounded: 'full',
    },
    BaseButtonIcon: {
      rounded: 'sm',
      color: 'default',
      size: 'md',
    },
    BaseCard: {
      rounded: 'sm',
      color: 'white',
    },
    BaseDropdown: {
      variant: 'button',
      buttonColor: 'default',
      color: 'white',
      rounded: 'sm',
      size: 'md',
    },
    BaseDropdownItem: {
      rounded: 'sm',
      color: 'default',
    },
    BaseHeading: {
      as: 'p',
      size: 'xl',
      weight: 'semibold',
      lead: 'normal',
    },
    BaseIconBox: {
      variant: 'solid',
      color: 'default',
      size: 'xs',
      rounded: 'sm',
    },
    BaseMessage: {
      type: 'success',
      rounded: 'sm',
      closable: false,
    },
    BasePagination: {
      rounded: 'sm',
    },
    BaseParagraph: {
      as: 'p',
      size: 'md',
      weight: 'normal',
      lead: 'normal',
    },
    BasePlaceholderPage: {
      imageSize: 'xs',
    },
    BaseProgress: {
      size: 'sm',
      contrast: 'default',
      color: 'primary',
      rounded: 'full',
    },
    BaseProse: {
      rounded: 'md',
    },
    defaultShapes: {
      accordion: 'rounded',
      autocompleteItem: 'rounded',
      avatar: 'full',
      button: 'rounded',
      buttonAction: 'rounded',
      buttonIcon: 'rounded',
      buttonClose: 'full',
      card: 'rounded',
      dropdown: 'rounded',
      iconBox: 'rounded',
      input: 'rounded',
      message: 'curved',
      pagination: 'rounded',
      progress: 'full',
      prose: 'rounded',
      tabSlider: 'rounded',
      tag: 'rounded',
    },
  },
})
