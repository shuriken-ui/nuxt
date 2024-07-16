export default defineNuxtSchema({
  appConfig: {
    nui: {
      // #region base
      BaseAccordion: {
        /**
         * The action icon of the accordion.
         *
         * @type {'dot' | 'chevron' | 'plus'}
         */
        action: 'dot',
        /**
         * Default color for the accordion dot
         *
         * @type {'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'dark' | 'black'}
         */
        dotColor: 'primary',
        /**
         * The color of the accordion.
         *
         * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast'}
         */
        color: 'default',
        /**
         * The radius of the accordion.
         *
         * @type {'none' | 'sm' | 'md' | 'lg'}
         */
        rounded: 'sm',
      },
      BaseAvatar: {
        /**
         * Default color for the avatar
         *
         * @type {'white' | 'muted' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'pink' | 'yellow' | 'indigo' | 'violet'}
         */
        color: 'muted',
        /**
         * The radius of the avatar.
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'full',
        /**
         * The size of the avatar.
         *
         * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'}
         */
        size: 'sm',
      },
      BaseAvatarGroup: {
        /**
         * The limit of avatars to display.
         *
         * @type {number}
         */
        limit: 4,
        /**
         * The size of the avatar group.
         *
         * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'}
         */
        size: 'sm',
      },
      BaseBreadcrumb: {
        /**
         * Defines the hover color of the breadcrumb links
         *
         * @type {'primary' | 'dark' | 'black'}
         */
        color: 'primary',
      },
      BaseButton: {
        /**
         * Default color for the BaseButton component
         *
         * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast' | 'light' | 'dark' | 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'none'}
         */
        color: 'default',
        /**
         * Default rounded for the BaseButton component
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'md',
        /**
         * Default size for the BaseButton component
         *
         * @type {'sm' | 'md' | 'lg' | 'xl'}
         */
        size: 'md',
        /**
         * Default variant for the BaseButton component
         *
         * @type {'solid' | 'pastel' | 'outline'}
         */
        variant: 'solid',
      },
      BaseButtonAction: {
        /**
         * Default color for the BaseButtonAction component
         *
         * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast' | 'light' | 'dark' | 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'none'}
         */
        color: 'default',
        /**
         * Default rounded for the BaseButtonAction component
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'md',
      },
      BaseButtonClose: {
        /**
         * Default color for the BaseButtonClose component
         *
         * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast' | 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'none'}
         */
        color: 'default',
        /**
         * Default rounded for the BaseButtonClose component
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'full',
        /**
         * Default size for the BaseButtonClose component
         *
         * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl'}
         */
        size: 'sm',
      },
      BaseButtonGroup: {},
      BaseButtonIcon: {
        /**
         * Default color for the BaseButtonIcon component
         *
         * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast' | 'light' | 'dark' | 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'none'}
         */
        color: 'default',
        /**
         * Default rounded for the BaseButtonIcon component
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'md',
        /**
         * Default size for the BaseButton component
         *
         * @type {'sm' | 'md' | 'lg' | 'xl'}
         */
        size: 'md',
      },
      BaseCard: {
        /**
         * Default color for the BaseCard component
         *
         * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast' | 'dark' | 'black' | 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'none'}
         */
        color: 'default',
        /**
         * Default rounded for the BaseCard component
         *
         * @type {'none' | 'sm' | 'md' | 'lg'}
         */
        rounded: 'sm',
      },
      BaseDropdown: {
        /**
         * The color of the dropdown button.
         *
         * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast' | 'light' | 'dark' | 'black' | 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'none'}
         */
        buttonColor: 'default',
        /**
         * The size of the dropdown button.
         *
         * @type {'sm' | 'md' | 'lg' | 'xl'}
         */
        buttonSize: 'md',
        /**
         * The color of the dropdown.
         *
         * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast' | 'none'}
         */
        color: 'default',
        /**
         * The placement of the dropdown via floating-ui
         *
         * @type {'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'}
         */
        placement: 'bottom-start',
        /**
         * Default rounded for the BaseDropdown component
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'sm',
        /**
         * Default size for the BaseDropdown component menu
         *
         * @type {'md' | 'lg'}
         */
        size: 'md',
        /**
         * The variant of the dropdown.
         *
         * @type {'button' | 'context' | 'text'}
         */
        variant: 'button',
      },
      BaseDropdownDivider: {},
      BaseDropdownItem: {
        /**
         * The hover color of the dropdown item inner elements.
         *
         * @type {'primary' | 'info' | 'success' | 'warning' | 'danger' | 'dark' | 'black'}
         */
        color: 'primary',
        /**
         * The contrast of the dropdown item.
         *
         * @type {'default' | 'contrast'}
         */
        contrast: 'default',
        /**
         * The radius of the dropdown item.
         *
         * @type {'none' | 'sm' | 'md' | 'lg'}
         */
        rounded: 'sm',
      },
      BaseHeading: {
        /**
         * The tag of the heading.
         *
         * @type {string}
         */
        as: 'p',
        /**
         * The lead of the heading.
         *
         * @type {'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose'}
         */
        lead: 'normal',
        /**
         * The size of the heading.
         *
         * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'}
         */
        size: 'xl',
        /**
         * The weight of the heading.
         *
         * @type {'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'}
         */
        weight: 'semibold',
      },
      BaseIconBox: {
        /**
         * The color of the icon box.
         *
         * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast' | 'dark' | 'light' | 'black' | 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'none'}
         */
        color: 'default',
        /**
         * The radius of the icon box.
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'sm',
        /**
         * The size of the icon box.
         *
         * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'}
         */
        size: 'xs',
        /**
         * The variant of the icon box.
         *
         * @type {'solid' | 'outline' | 'pastel'}
         */
        variant: 'solid',
      },
      BaseKbd: {
        /**
         * The color of the kbd.
         *
         * @type {'default' | 'muted' | 'none'}
         */
        color: 'default',
        /**
         * The radius of the kbd.
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'sm',
        /**
         * The size of the kbd.
         *
         * @type {'xs' | 'sm' | 'md' | 'lg'}
         */
        size: 'sm',
      },
      BaseLink: {},
      BaseList: {},
      BaseListItem: {},
      BaseMessage: {
        /**
         * The color of the message.
         *
         * @type {'default' | 'default-contrast' | 'muted' | 'muted-muted' | 'primary' | 'info' | 'success' | 'warning' | 'danger'}
         */
        color: 'default',
        /**
         * The radius of the message.
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'sm',
        /**
         * The default icons of the message.
         *
         * @type {{
            default?: string
            'default-contrast'?: string
            muted?: string
            'muted-contrast'?: string
            info?: string
            success?: string
            warning?: string
            danger?: string
            primary?: string
          }}
         */
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
        /**
         * The color of the pagination.
         *
         * @type {'primary' | 'dark' | 'black'}
         */
        color: 'primary',
        /**
         * The radius of the pagination.
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'sm',
      },
      BaseParagraph: {
        /**
         * The tag of the paragraph.
         *
         * @type {string}
         */
        as: 'p',
        /**
         * The lead of the paragraph.
         *
         * @type {'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose'}
         */
        lead: 'normal',
        /**
         * The size of the paragraph.
         *
         * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'}
         */
        size: 'md',
        /**
         * The weight of the paragraph.
         *
         * @type {'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'}
         */
        weight: 'normal',
      },
      BasePlaceholderPage: {
        /**
         * The size of the placeholder image.
         *
         * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl'}
         */
        imageSize: 'xs',
      },
      BasePlaceload: {},
      BaseProgress: {
        /**
         * The color of the progress.
         *
         * @type {'primary' | 'info' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'black'}
         */
        color: 'primary',
        /**
         * The grey shade of the progress.
         *
         * @type {'default' | 'contrast'}
         */
        contrast: 'default',
        /**
         * The radius of the progress.
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'full',
        /**
         * The size of the progress.
         *
         * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl'}
         */
        size: 'sm',
      },
      BaseProgressCircle: {
        /**
         * The color of the progress circle.
         *
         * @type {'primary' | 'info' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'black'}
         */
        color: 'primary',
      },
      BaseProse: {
        /**
         * The radius of the prose.
         *
         * @type {'none' | 'sm' | 'md' | 'lg'}
         */
        rounded: 'none',
      },
      BaseSnack: {
        /**
         * The color of the snack.
         *
         * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast'}
         */
        color: 'default',
        /**
         * The size of the snack.
         *
         * @type {'xs' | 'sm' | 'md'}
         */
        size: 'md',
      },
      BaseTabs: {
        /**
         * The color of the active tab.
         *
         * @type {'default' | 'primary' | 'light' | 'dark' | 'black'}
         */
        color: 'primary',
        /**
         * The alignment of the tabs.
         *
         * @type {'start' | 'center' | 'end'}
         */
        justify: 'start',
        /**
         * The type of the tabs.
         *
         * @type {'tabs' | 'box'}
         */
        type: 'tabs',
      },
      BaseTabSlider: {
        /**
         * The color of the active tab.
         *
         * @type {'default' | 'default-contrast' | 'primary' | 'light' | 'dark' | 'black'}
         */
        color: 'default',
        /**
         * The alignment of the tabs.
         *
         * @type {'start' | 'center' | 'end'}
         */
        justify: 'start',
        /**
         * The radius of the tabs.
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'lg',
        /**
         * The size of the tabs.
         *
         * @type {'sm' | 'md'}
         */
        size: 'md',
      },
      BaseTag: {
        /**
         * The color of the tag.
         *
         * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast' | 'light' | 'dark' | 'black' | 'primary' | 'info' | 'success' | 'warning' | 'danger'}
         */
        color: 'default',
        /**
         * The radius of the tag.
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'lg',
        /**
         * The size of the tag.
         *
         * @type {'sm' | 'md'}
         */
        size: 'md',
        /**
         * The variant of the tag.
         *
         * @type {'solid' | 'pastel' | 'outline'}
         */
        variant: 'solid',
      },
      BaseText: {
        /**
         * The lead of the text span.
         *
         * @type {'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose'}
         */
        lead: 'normal',
        /**
         * The size of the text span.
         *
         * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'}
         */
        size: 'md',
        /**
         * The weight of the text span.
         *
         * @type {'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'}
         */
        weight: 'normal',
      },
      BaseThemeSwitch: {
        /**
         * Disables transitions when toggling between light and dark mode.
         *
         * @type {boolean}
         */
        disableTransitions: false,
      },
      BaseThemeToggle: {
        /**
         * Disables transitions when toggling between light and dark mode.
         *
         * @type {boolean}
         */
        disableTransitions: false,
      },
      // #endregion

      // #region form
      BaseAutocomplete: {
        /**
         * The contrast of the autocomplete.
         *
         * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast'}
         */
        contrast: 'default',
        /**
         * Translation strings.
         *
         * @type {Record<'empty' | 'pending', string>}
         */
        i18n: {
          empty: 'Nothing found.',
          pending: 'Loading ...',
        },
        /**
         * The radius of the autocomplete.
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'sm',
        /**
         * The size of the autocomplete.
         *
         * @type {'sm' | 'md' | 'lg' | 'xl'}
         */
        size: 'md',
      },
      BaseAutocompleteItem: {
        /**
         * The radius of the autocomplete item.
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'sm',
      },
      BaseCheckbox: {
        /**
         * Default color for the BaseCheckbox component
         *
         * @type {'default' | 'muted' | 'light' | 'dark' | 'black' | 'primary' | 'info' | 'success' | 'warning' | 'danger'}
         */
        color: 'default',
        /**
         * Default rounded for the BaseCheckbox component
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'sm',
      },
      BaseCheckboxAnimated: {
        /**
         * Default color for the BaseCheckbox component
         *
         * @type {'primary' | 'info' | 'success' | 'warning' | 'danger' | 'light' | 'muted' | 'dark' | 'black'}
         */
        color: 'primary',
      },
      BaseCheckboxHeadless: {},
      BaseFullscreenDropfile: {
        /**
         * The color of the icon.
         *
         * @type {'primary' | 'dark' | 'black'}
         */
        color: 'primary',
      },
      BaseInput: {
        /**
         * The contrast of the input.
         *
         * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast'}
         */
        contrast: 'default',
        /**
         * The radius of the input.
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'sm',
        /**
         * The size of the input.
         *
         * @type {'sm' | 'md' | 'lg' | 'xl'}
         */
        size: 'md',
      },
      BaseInputFile: {
        /**
         * The contrast of the input.
         *
         * @type {'default' | 'default-contrast'}
         */
        contrast: 'default',
        /**
         * The radius of the input.
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'sm',
        /**
         * The size of the input.
         *
         * @type {'sm' | 'md' | 'lg' | 'xl'}
         */
        size: 'md',
        /**
         * The translation strings for the input file.
         *
         * @type {{ empty: string; invalid: string; multiple: string }}
         */
        i18n: {
          empty: 'No file chosen',
          invalid: 'Invalid file selected',
          multiple: '{count} files selected',
        },
      },
      BaseInputFileHeadless: {},
      BaseInputNumber: {
        /**
         * The contrast of the input.
         *
         * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast'}
         */
        contrast: 'default',
        /**
         * The radius of the input.
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'sm',
        /**
         * The size of the input.
         *
         * @type {'sm' | 'md' | 'lg' | 'xl'}
         */
        size: 'md',
      },
      BaseInputHelpText: {
        /**
         * The color of the text.
         *
         * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast' | 'light' | 'dark' | 'black' | 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'none'}
         */
        color: 'default',
      },
      BaseListbox: {
        /**
         * The contrast of the input.
         *
         * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast'}
         */
        contrast: 'default',
        /**
         * The placement of the dropdown via floating-ui
         *
         * @type {'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'}
         */
        placement: 'bottom-start',
        /**
         * The radius of the input.
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'sm',
        /**
         * The size of the input.
         *
         * @type {'sm' | 'md' | 'lg' | 'xl'}
         */
        size: 'md',
      },
      BaseListboxItem: {},
      BaseRadio: {
        /**
         * Default color for the BaseRadio component
         *
         * @type {'default' | 'light' | 'muted' | 'dark' | 'black' | 'primary' | 'info' | 'success' | 'warning' | 'danger'}
         */
        color: 'default',
      },
      BaseRadioHeadless: {},
      BaseSelect: {
        /**
         * The contrast of the select.
         *
         * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast'}
         */
        contrast: 'default',
        /**
         * The radius of the select.
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'sm',
        /**
         * The size of the select.
         *
         * @type {'sm' | 'md' | 'lg' | 'xl'}
         */
        size: 'md',
      },
      BaseSwitchBall: {
        /**
         * The color of the switch.
         *
         * @type {'primary' | 'info' | 'success' | 'warning' | 'danger' | 'dark' | 'black'}
         */
        color: 'primary',
      },
      BaseSwitchThin: {
        /**
         * The color of the switch.
         *
         * @type {'primary' | 'info' | 'success' | 'warning' | 'danger' | 'dark' | 'black'}
         */
        color: 'primary',
      },
      BaseTextarea: {
        /**
         * The contrast of the textarea.
         *
         * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast'}
         */
        contrast: 'default',
        /**
         * The radius of the textarea.
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'sm',
        /**
         * The size of the textarea.
         *
         * @type {'sm' | 'md' | 'lg'}
         */
        size: 'md',
      },
      BaseTreeSelectItem: {
        /**
         * The radius of the tree select item.
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'sm',
      },
    },
  },
})
