// @todo: usage of defineAppConfig break installation with giget and remote layers

export default {
  nui: {
    // #region base
    BaseAccordion: {
      action: 'dot',
      color: 'default',
      dotColor: 'primary',
      rounded: 'sm',
    },
    BaseAvatar: {
      color: 'muted',
      rounded: 'full',
      size: 'sm',
    },
    BaseAvatarGroup: {
      limit: 4,
      size: 'sm',
    },
    BaseBreadcrumb: {
      color: 'primary',
    },
    BaseButton: {
      color: 'default',
      rounded: 'sm',
      size: 'md',
      variant: 'solid',
    },
    BaseButtonAction: {
      color: 'default',
      rounded: 'sm',
    },
    BaseButtonClose: {
      color: 'default',
      rounded: 'full',
      size: 'sm',
    },
    BaseButtonGroup: {},
    BaseButtonIcon: {
      color: 'default',
      rounded: 'sm',
      size: 'md',
    },
    BaseCard: {
      color: 'default',
      rounded: 'sm',
    },
    BaseDropdown: {
      buttonColor: 'default',
      buttonSize: 'md',
      color: 'default',
      placement: 'bottom-start',
      rounded: 'sm',
      size: 'md',
      variant: 'button',
    },
    BaseDropdownDivider: {},
    BaseDropdownItem: {
      color: 'primary',
      contrast: 'default',
      rounded: 'sm',
    },
    BaseHeading: {
      as: 'p',
      lead: 'normal',
      size: 'xl',
      weight: 'semibold',
    },
    BaseIconBox: {
      color: 'default',
      rounded: 'sm',
      size: 'xs',
      variant: 'solid',
    },
    BaseKbd: {
      color: 'default',
      rounded: 'sm',
      size: 'sm',
    },
    BaseLink: {},
    BaseList: {},
    BaseListItem: {},
    BaseMessage: {
      color: 'default',
      rounded: 'sm',
      defaultIcons: {
        muted: 'akar-icons:info-fill',
        'muted-contrast': 'akar-icons:info-fill',
        default: 'akar-icons:info-fill',
        'default-contrast': 'akar-icons:info-fill',
        info: 'akar-icons:info-fill',
        success: 'carbon:checkmark-filled',
        warning: 'ci:warning',
        danger: 'ph:warning-octagon-fill',
        primary: 'akar-icons:info-fill',
      },
    },
    BasePagination: {
      color: 'primary',
      rounded: 'sm',
    },
    BaseParagraph: {
      as: 'p',
      lead: 'normal',
      size: 'md',
      weight: 'normal',
    },
    BasePlaceholderPage: {
      imageSize: 'xs',
    },
    BasePlaceload: {},
    BaseProgress: {
      color: 'primary',
      contrast: 'default',
      rounded: 'full',
      size: 'sm',
    },
    BaseProgressCircle: {
      color: 'primary',
    },
    BaseProse: {
      rounded: 'none',
    },
    BaseSnack: {
      color: 'default',
      size: 'md',
    },
    BaseTabs: {
      color: 'primary',
      justify: 'start',
      type: 'tabs',
    },
    BaseTabSlider: {
      color: 'default',
      justify: 'start',
      rounded: 'lg',
      size: 'md',
    },
    BaseTag: {
      color: 'default',
      rounded: 'lg',
      size: 'md',
      variant: 'solid',
    },
    BaseText: {
      lead: 'normal',
      size: 'md',
      weight: 'normal',
    },
    BaseThemeSwitch: {
      disableTransitions: false,
    },
    BaseThemeToggle: {
      disableTransitions: false,
    },
    // #endregion

    // #region form
    BaseAutocomplete: {
      contrast: 'default',
      i18n: {
        empty: 'Nothing found.',
        pending: 'Loading ...',
      },
      rounded: 'sm',
      size: 'md',
    },
    BaseAutocompleteItem: {
      rounded: 'sm',
    },
    BaseCheckbox: {
      color: 'default',
      rounded: 'sm',
    },
    BaseCheckboxAnimated: {
      color: 'primary',
    },
    BaseCheckboxHeadless: {},
    BaseFullscreenDropfile: {
      color: 'primary',
    },
    BaseInput: {
      contrast: 'default',
      rounded: 'sm',
      size: 'md',
    },
    BaseInputFile: {
      contrast: 'default',
      rounded: 'sm',
      size: 'md',
      i18n: {
        empty: 'No file chosen',
        invalid: 'Invalid file selected',
        multiple: '{count} files selected',
      },
    },
    BaseInputFileHeadless: {},
    BaseInputNumber: {
      contrast: 'default',
      rounded: 'sm',
      size: 'md',
    },
    BaseInputHelpText: {
      color: 'default',
    },
    BaseListbox: {
      contrast: 'default',
      placement: 'bottom-start',
      rounded: 'sm',
      size: 'md',
    },
    BaseListboxItem: {},
    BaseRadio: {
      color: 'default',
    },
    BaseRadioHeadless: {},
    BaseSelect: {
      contrast: 'default',
      rounded: 'sm',
      size: 'md',
    },
    BaseSwitchBall: {
      color: 'primary',
    },
    BaseSwitchThin: {
      color: 'primary',
    },
    BaseTextarea: {
      contrast: 'default',
      rounded: 'sm',
      size: 'md',
    },
    BaseTreeSelect: {},
    BaseTreeSelectItem: {
      rounded: 'sm',
    },
    // #endregion
  },
}
