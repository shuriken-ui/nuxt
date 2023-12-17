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
         * @type {'white'| 'white-contrast'| 'muted'| 'muted-contrast'| 'primary'| 'info'| 'success'| 'warning'| 'danger'| 'none'}
         */
        color: 'white',
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
         * @type {'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'light' | 'muted' | 'none'}
         */
        buttonColor: 'default',
        /**
         * The color of the dropdown.
         *
         * @type {'white' | 'white-contrast' | 'muted' | 'muted-contrast' | 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'none'}
         */
        color: 'white',
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
      BaseTabs: {
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
      defaultShapes: {
        /**
         * Default shape for the BaseAccordion component
         *
         * @type {'straight' | 'rounded' | 'smooth' | 'curved'}
         */
        accordion: 'rounded',
        /**
         * Default shape for the BaseAutocompleteItem component
         *
         * @type {'straight' | 'rounded' | 'smooth' | 'curved' | 'full'}
         */
        autocompleteItem: 'rounded',
        /**
         * Default shape for the BaseAvatar component
         *
         * @type {'straight' | 'rounded' | 'curved' | 'full'}
         */
        avatar: 'full',
        /**
         * Default shape for the BaseButton component
         *
         * @type {'straight' | 'rounded' | 'curved' | 'smooth' | 'full'}
         */
        button: 'rounded',
        /**
         * Default shape for the BaseButtonAction component
         *
         * @type {'straight' | 'rounded' | 'smooth' | 'curved' | 'full'}
         */
        buttonAction: 'rounded',
        /**
         * Default shape for the BaseButtonIcon component
         *
         * @type {'straight' | 'rounded' | 'smooth' | 'curved' | 'full'}
         */
        buttonIcon: 'rounded',
        /**
         * Default shape for the BaseButtonClose component
         *
         * @type {'straight' | 'rounded' | 'smooth' | 'curved' | 'full'}
         */
        buttonClose: 'full',
        /**
         * Default shape for the BaseCard component
         *
         * @type {'straight' | 'rounded' | 'smooth' | 'curved'}
         */
        card: 'rounded',
        /**
         * Default shape for the BaseDropdown component
         *
         * @type {'straight' | 'rounded' | 'smooth' | 'curved' | 'full'}
         */
        dropdown: 'rounded',
        /**
         * Default shape for the BaseIconBox component
         *
         * @type {'straight' | 'rounded' | 'curved' | 'full'}
         */
        iconBox: 'rounded',
        /**
         * Default shape for all input components component
         * - BaseAutocomplete
         * - BaseCheckbox
         * - BaseInput
         * - BaseInputFile
         * - BaseInputListbox
         * - BaseInputSelect
         * - BaseInputTextarea
         *
         * @type {'straight' | 'rounded' | 'smooth' | 'curved' | 'full'}
         */
        input: 'rounded',
        /**
         * Default shape for the BaseMessage component
         *
         * @type {'straight' | 'rounded' | 'smooth' | 'curved' | 'full'}
         */
        message: 'curved',
        /**
         * Default shape for the BasePagination component
         *
         * @type {'straight' | 'rounded' | 'smooth' | 'curved' | 'full'}
         */
        pagination: 'rounded',
        /**
         * Default shape for the BaseProgress component
         *
         * @type {'straight' | 'rounded' | 'curved' | 'full'}
         */
        progress: 'full',
        /**
         * Default shape for the BaseProse component
         *
         * @type {'straight' | 'rounded' | 'curved'}
         */
        prose: 'rounded',
        /**
         * Default shape for the BaseTabSlider component
         *
         * @type {'straight' | 'rounded' | 'smooth' | 'curved' | 'full'}
         */
        tabSlider: 'rounded',
        /**
         * Default shape for the BaseTag component
         *
         * @type {'straight' | 'rounded' | 'curved' | 'full'}
         */
        tag: 'rounded',
      },
    },
  },
})
