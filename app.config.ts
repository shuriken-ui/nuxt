export default defineAppConfig({
  nui: {
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
