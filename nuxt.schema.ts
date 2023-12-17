export default defineNuxtSchema({
  appConfig: {
    nui: {
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
