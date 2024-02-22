export default defineNuxtSchema({
  appConfig: {
    nui: {
      BaseAccordion: {
        /**
         * The radius of the accordion.
         *
         * @type {'none' | 'sm' | 'md' | 'lg'}
         */
        rounded: 'sm',
        /**
         * The action icon of the accordion.
         *
         * @type {'dot' | 'chevron' | 'plus'}
         */
        action: 'dot',
        /**
         * The color of the accordion.
         *
         * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast'}
         */
        color: 'default',
        /**
         * Default color for the accordion dot
         *
         * @type {'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'dark' | 'black'}
         */
        dotColor: 'primary',
      },
      BaseAutocomplete: {
        /**
         * The radius of the autocomplete.
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'sm',
        /**
         * The size of the autocomplete.
         *
         * @type {'sm' | 'md' | 'lg'}
         */
        size: 'md',
        /**
         * The contrast of the autocomplete.
         *
         * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast'}
         */
        contrast: 'default',
      },
      BaseAutocompleteItem: {
        /**
         * The radius of the autocomplete item.
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'sm',
      },
      BaseAvatar: {
        /**
         * The size of the avatar.
         *
         * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'}
         */
        size: 'sm',
        /**
         * The radius of the avatar.
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'full',
        /**
         * Default color for the avatar
         *
         * @type {'white' | 'muted' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'pink' | 'yellow' | 'indigo' | 'violet'}
         */
        color: 'muted',
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
      BaseButton: {
        /**
         * Default variant for the BaseButton component
         *
         * @type {'solid' | 'pastel' | 'outline'}
         */
        variant: 'solid',
        /**
         * Default rounded for the BaseButton component
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'md',
        /**
         * Default color for the BaseButton component
         *
         * @type {'default'| 'primary'| 'info'| 'success'| 'warning'| 'danger'| 'light'| 'muted'| 'none'}
         */
        color: 'default',
        /**
         * Default size for the BaseButton component
         *
         * @type {'sm' | 'md' | 'lg'}
         */
        size: 'md',
      },
      BaseButtonAction: {
        /**
         * Default rounded for the BaseButtonAction component
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'md',
        /**
         * Default color for the BaseButtonAction component
         *
         * @type {'default'| 'primary'| 'info'| 'success'| 'warning'| 'danger'| 'light'| 'muted'| 'none'}
         */
        color: 'default',
      },
      BaseButtonClose: {
        /**
         * Default size for the BaseButtonClose component
         *
         * @type {'xs' | 'sm' | 'md' | 'lg'}
         */
        size: 'sm',
        /**
         * Default rounded for the BaseButtonClose component
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'full',
        /**
         * Default color for the BaseButtonClose component
         *
         * @type {'default'| 'primary'| 'info'| 'success'| 'warning'| 'danger'| 'light'| 'muted'| 'none'}
         */
        color: 'default',
      },
      BaseButtonIcon: {
        /**
         * Default rounded for the BaseButtonIcon component
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'md',
        /**
         * Default color for the BaseButtonIcon component
         *
         * @type {'default'| 'primary'| 'info'| 'success'| 'warning'| 'danger'| 'light'| 'muted'| 'none'}
         */
        color: 'default',
        /**
         * Default size for the BaseButton component
         *
         * @type {'sm' | 'md' | 'lg' | 'xl'}
         */
        size: 'md',
      },
      BaseCard: {
        /**
         * Default rounded for the BaseCard component
         *
         * @type {'none' | 'sm' | 'md' | 'lg'}
         */
        rounded: 'md',
        /**
         * Default color for the BaseCard component
         *
         * @type {'default'| 'default-contrast'| 'muted'| 'muted-contrast'| 'primary'| 'info'| 'success'| 'warning'| 'danger'| 'none'}
         */
        color: 'default',
      },
      BaseCheckbox: {
        /**
         * Default rounded for the BaseCheckbox component
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'sm',
        /**
         * Default color for the BaseCheckbox component
         *
         * @type {'default' | 'light' | 'muted' | 'primary' | 'info' | 'success' | 'warning' | 'danger'}
         */
        color: 'default',
      },
      BaseCheckboxAnimated: {
        /**
         * Default color for the BaseCheckbox component
         *
         * @type {'light' | 'muted' | 'primary' | 'info' | 'success' | 'warning' | 'danger'}
         */
        color: 'primary',
      },
      BaseDropdown: {
        /**
         * The variant of the dropdown.
         *
         * @type {'button' | 'context' | 'text'}
         */
        variant: 'button',
        /**
         * The color of the dropdown button.
         *
         * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast' | 'light' | 'dark' | 'black' | 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'none'}
         */
        buttonColor: 'default',
        /**
         * The color of the dropdown.
         *
         * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast' | 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'none'}
         */
        color: 'default',
        /**
         * Default rounded for the BaseDropdown component
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'md',
        /**
         * The placement of the dropdown via floating-ui
         *
         * @type {'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'}
         */
        placement: undefined,
        /**
         * Default size for the BaseDropdown component menu
         *
         * @type {'md' | 'lg'}
         */
        size: 'md',
        /**
         * The label to display for the dropdown.
         *
         * @type {string}
         */
        label: '',
        /**
         * The header label to display for the dropdown.
         *
         * @type {string}
         */
        headerLabel: undefined,
        /**
         * Used a fixed strategy to float the component
         *
         * @type {boolean}
         */
        fixed: false,
      },
      BaseDropdownItem: {
        /**
         * The radius of the dropdown item.
         *
         * @type {'none' | 'sm' | 'md' | 'lg'}
         */
        rounded: 'md',
        /**
         * The color of the dropdown item.
         *
         * @type {'default' | 'contrast'}
         */
        color: 'default',
      },
      BaseHeading: {
        /**
         * The tag of the heading.
         *
         * @type {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p'}
         */
        as: 'p',
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
        /**
         * The lead of the heading.
         *
         * @type {'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose'}
         */
        lead: 'normal',
      },
      BaseIconBox: {
        /**
         * The variant of the icon box.
         *
         * @type {'solid' | 'outline' | 'pastel'}
         */
        variant: 'solid',
        /**
         * The color of the icon box.
         *
         * @type {'default' | 'invert' | 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'none'}
         */
        color: 'default',
        /**
         * The size of the icon box.
         *
         * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'}
         */
        size: 'xs',
        /**
         * The radius of the icon box.
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'md',
      },
      BaseInput: {
        /**
         * The radius of the input.
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'sm',
        /**
         * The size of the input.
         *
         * @type {'sm' | 'md' | 'lg'}
         */
        size: 'md',
        /**
         * The contrast of the input.
         *
         * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast'}
         */
        contrast: 'default',
      },
      BaseInputFile: {
        /**
         * The radius of the input.
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'sm',
        /**
         * The size of the input.
         *
         * @type {'sm' | 'md' | 'lg'}
         */
        size: 'md',
        /**
         * The contrast of the input.
         *
         * @type {'default' | 'default-contrast'}
         */
        contrast: 'default',
      },
      BaseInputNumber: {
        /**
         * The inputmode to use for the input, usually for mobile devices.
         *
         * @type {'decimal' | 'numeric'}
         */
        inputmode: 'numeric',
        /**
         * The radius of the input.
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'sm',
        /**
         * The size of the input.
         *
         * @type {'sm' | 'md' | 'lg'}
         */
        size: 'md',
        /**
         * The contrast of the input.
         *
         * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast'}
         */
        contrast: 'default',
      },
      BaseKbd: {
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
        /**
         * The color of the kbd.
         *
         * @type {'default' | 'muted' | 'none'}
         */
        color: 'default',
      },
      BaseListbox: {
        /**
         * The radius of the input.
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'sm',
        /**
         * The size of the input.
         *
         * @type {'sm' | 'md' | 'lg'}
         */
        size: 'md',
        /**
         * The contrast of the input.
         *
         * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast'}
         */
        contrast: 'default',
      },
      BaseMessage: {
        /**
         * The type of the message.
         *
         * @type {'default' | 'muted' | 'primary' | 'info' | 'success' | 'warning' | 'danger'}
         */
        type: 'success',
        /**
         * The radius of the message.
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'sm',
        /**
         * Determines if the message is closable.
         *
         * @type {boolean}
         */
        closable: false,
      },
      BasePagination: {
        /**
         * The color of the pagination.
         *
         * @type {'primary' | 'dark' | 'black'}
         */
        type: 'primary',
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
        /**
         * The lead of the paragraph.
         *
         * @type {'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose'}
         */
        lead: 'normal',
      },
      BasePlaceholderPage: {
        /**
         * The size of the placeholder image.
         *
         * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl'}
         */
        imageSize: 'xs',
      },
      BaseProgressCircle: {
        /**
         * The color of the progress circle.
         *
         * @type {'primary' | 'info' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'black'}
         */
        color: 'primary',
      },
      BaseProgress: {
        /**
         * The size of the progress.
         *
         * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl'}
         */
        size: 'sm',
        /**
         * The grey shade of the progress.
         *
         * @type {'default' | 'contrast'}
         */
        contrast: 'default',
        /**
         * The color of the progress.
         *
         * @type {'primary' | 'info' | 'success' | 'warning' | 'danger'}
         */
        color: 'primary',
        /**
         * The radius of the progress.
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'full',
      },
      BaseProse: {
        /**
         * The radius of the prose.
         *
         * @type {'none' | 'sm' | 'md' | 'lg'}
         */
        rounded: 'none',
      },
      BaseRadio: {
        /**
         * Default color for the BaseRadio component
         *
         * @type {'default' | 'light' | 'muted' | 'primary' | 'info' | 'success' | 'warning' | 'danger'}
         */
        color: 'default',
      },
      BaseSelect: {
        /**
         * The radius of the select.
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'sm',
        /**
         * The size of the select.
         *
         * @type {'sm' | 'md' | 'lg'}
         */
        size: 'md',
        /**
         * The contrast of the select.
         *
         * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast'}
         */
        contrast: 'default',
      },
      BaseSnack: {
        /**
         * The size of the snack.
         *
         * @type {'xs' | 'sm' | 'md'}
         */
        size: 'md',
        /**
         * The color of the snack.
         *
         * @type {'default' | 'muted'}
         */
        color: 'muted',
      },
      BaseSwitchBall: {
        /**
         * The color of the switch.
         *
         * @type {'primary' | 'info' | 'success' | 'warning' | 'danger'}
         */
        color: 'primary',
      },
      BaseSwitchThin: {
        /**
         * The color of the switch.
         *
         * @type {'primary' | 'info' | 'success' | 'warning' | 'danger'}
         */
        color: 'primary',
      },
      BaseTabs: {
        /**
         * The color of the active tab.
         *
         * @type {'default' | 'primary' | 'light' | 'dark' | 'black'}
         */
        color: 'primary',
        /**
         * The type of the tabs.
         *
         * @type {'tabs' | 'box'}
         */
        type: 'tabs',
        /**
         * The alignment of the tabs.
         *
         * @type {'start' | 'center' | 'end'}
         */
        justify: 'start',
      },
      BaseTabSlider: {
        /**
         * The color of the active tab.
         *
         * @type {'default' | 'default-contrast' | 'primary' | 'light' | 'dark' | 'black'}
         */
        color: 'primary',
        /**
         * The alignment of the tabs.
         *
         * @type {'start' | 'center' | 'end'}
         */
        justify: 'start',
        /**
         * The size of the tabs.
         *
         * @type {'sm' | 'md'}
         */
        size: 'md',
        /**
         * The radius of the tabs.
         *
         * @type {'none' | 'sm' | 'md' | 'lg' | 'full'}
         */
        rounded: 'lg',
      },
      BaseTag: {
        /**
         * The variant of the tag.
         *
         * @type {'solid' | 'pastel' | 'outline'}
         */
        variant: 'solid',
        /**
         * The color of the tag.
         *
         * @type {'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'light' | 'muted'}
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
      },
      BaseText: {
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
        /**
         * The lead of the text span.
         *
         * @type {'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose'}
         */
        lead: 'normal',
      },
      BaseTextarea: {
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
        /**
         * The contrast of the textarea.
         *
         * @type {'default' | 'default-contrast' | 'muted' | 'muted-contrast'}
         */
        contrast: 'default',
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
