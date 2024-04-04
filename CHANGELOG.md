# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [3.1.1](https://github.com/shuriken-ui/nuxt/compare/v3.1.0...v3.1.1) (2024-04-04)


### Bug Fixes

* **BaseLink:** set default props to prevent prefetch and noPrefetch collision ([c10c8ce](https://github.com/shuriken-ui/nuxt/commit/c10c8ce3d430d02588e69861dc0479a7b3967220))
* **useNinjaId:** use native crypto and only generate id on client to avoid hydration issues ([0a5b1b1](https://github.com/shuriken-ui/nuxt/commit/0a5b1b10d9078e3a3511cca961491bb6557918bb))
* **useNinjaScrollspy:** ensure update elements is called when selectors has content ([cd6c244](https://github.com/shuriken-ui/nuxt/commit/cd6c24493a0bac04337b7ca19102b58d3f2a26e5))

## [3.1.0](https://github.com/shuriken-ui/nuxt/compare/v3.0.6...v3.1.0) (2024-03-31)


### Features

* **BaseInputFile:** add configurable i18n property ([320d17e](https://github.com/shuriken-ui/nuxt/commit/320d17e667753f3ba29c100efd321b3c5a7b6268))

### [3.0.6](https://github.com/shuriken-ui/nuxt/compare/v3.0.5...v3.0.6) (2024-03-28)


### Bug Fixes

* remove usage of defineAppConfig in default app config ([fac786a](https://github.com/shuriken-ui/nuxt/commit/fac786a28f386182beefb36c515a393216ac7b72))

### [3.0.5](https://github.com/shuriken-ui/nuxt/compare/v3.0.4...v3.0.5) (2024-03-28)


### Bug Fixes

* **BaseButton:** update xll version ([57d849c](https://github.com/shuriken-ui/nuxt/commit/57d849cf0fa8e940c8aecd409a87755f7d0269e8))
* **BaseCheckboxAnimated:** remove usage of dom access in script ([89778d5](https://github.com/shuriken-ui/nuxt/commit/89778d59f65806e7d16d8bee32e53d5459c17d72))
* **BaseDropdown:** add menu wrapper in classes ([dbbd4f1](https://github.com/shuriken-ui/nuxt/commit/dbbd4f18be6ae293a00e46a9ff8d05da1f9964db))

### [3.0.4](https://github.com/shuriken-ui/nuxt/compare/v3.0.3...v3.0.4) (2024-03-23)


### Bug Fixes

* **BaseAutocomplete:** fix clearable with custom clearValue ([2a2a9f2](https://github.com/shuriken-ui/nuxt/commit/2a2a9f25d2f5cbfa8aa28a4f0566c7e113e178a4))
* **BaseDropdownItem:** expose active and close to all slots ([765b972](https://github.com/shuriken-ui/nuxt/commit/765b972c4366df828e72943788490df34e999c04))
* **config:** base pagination type to color ([08f07a1](https://github.com/shuriken-ui/nuxt/commit/08f07a17f34c534ef918125a6742ad1448b2ae43))

### [3.0.3](https://github.com/shuriken-ui/nuxt/compare/v3.0.2...v3.0.3) (2024-03-18)


### Bug Fixes

* **meta:** slots typescript definition when no prarms ([691037d](https://github.com/shuriken-ui/nuxt/commit/691037d25f179619d8ec0b54fbe6c5b99d5c00ea))

### [3.0.2](https://github.com/shuriken-ui/nuxt/compare/v3.0.1...v3.0.2) (2024-03-18)


### Bug Fixes

* **BaseMessage:** missing default icon for contrast colors ([e2cc7d8](https://github.com/shuriken-ui/nuxt/commit/e2cc7d89d23536f71c68b0b0fbd2ae952771df89))
* **config:** ensure all types match components ([b1e13b3](https://github.com/shuriken-ui/nuxt/commit/b1e13b353a840181d3f441b20531b25a7672b10c)), closes [#116](https://github.com/shuriken-ui/nuxt/issues/116)

### [3.0.1](https://github.com/shuriken-ui/nuxt/compare/v3.0.0...v3.0.1) (2024-03-05)


### Bug Fixes

* prop modifier in BaseAutocomplete and BaseListbox ([f674c3e](https://github.com/shuriken-ui/nuxt/commit/f674c3e9f8418c59045b7be7c2db0ba915bb6bee))

## [3.0.0](https://github.com/shuriken-ui/nuxt/compare/v3.0.0-next.1...v3.0.0) (2024-03-05)

## [3.0.0-next.1](https://github.com/shuriken-ui/nuxt/compare/v3.0.0-next.0...v3.0.0-next.1) (2024-03-04)


### Features

* allow hiding create prompt + fix multiple selection with objects ([21cadd8](https://github.com/shuriken-ui/nuxt/commit/21cadd8bf917b31adc5ec9f904077a9e62803ee6)), closes [#111](https://github.com/shuriken-ui/nuxt/issues/111) [#110](https://github.com/shuriken-ui/nuxt/issues/110)


### Bug Fixes

* **BaseProgress:** indeterminate state not working ([06a4365](https://github.com/shuriken-ui/nuxt/commit/06a4365fe83dbf459854dd37987cee03e23dbe68)), closes [#112](https://github.com/shuriken-ui/nuxt/issues/112)

### [2.0.2](https://github.com/shuriken-ui/nuxt/compare/v2.0.1...v2.0.2) (2024-01-26)


### Bug Fixes

* **BaseDropdown:** use default props from app config ([7887ce5](https://github.com/shuriken-ui/nuxt/commit/7887ce568eb265f9c93aba370d9553d204ab6aff))
* **BaseThemeToggle:** add disableTransitions in app config ([fc84339](https://github.com/shuriken-ui/nuxt/commit/fc84339b619a98f592fd5cc309374423129353f5))

### [2.0.1](https://github.com/shuriken-ui/nuxt/compare/v2.0.0...v2.0.1) (2024-01-24)


### Bug Fixes

* **BaseAccordion:** use ts generic for items content ([5ce4d84](https://github.com/shuriken-ui/nuxt/commit/5ce4d8425761bb1e78cfd6e61d128cc3e97e4180))
* **BaseTabs:** default tab detection on before mount ([0ad76af](https://github.com/shuriken-ui/nuxt/commit/0ad76afa7fbe01320213f5c2fc056af0158398f1))
* **BaseTabSlider:** default tab detection on before mount ([3740d4a](https://github.com/shuriken-ui/nuxt/commit/3740d4ac7ec2b139aaa49c84ba1af206711f2dac))
* use defineSlots in generic components ([f50e03b](https://github.com/shuriken-ui/nuxt/commit/f50e03b42b6b36d5688169a3c541cdb41311e0da))

## [3.0.0-next.0](https://github.com/shuriken-ui/nuxt/compare/v2.0.0...v3.0.0-next.0) (2024-02-23)


### Features

* add missing types in schema ([d352461](https://github.com/shuriken-ui/nuxt/commit/d352461210d11f751c13b9a6ce3a26ab56ad1f0c))
* **BaseAccordion:** add color, dotColor and classes props, update app config ([6cf13f7](https://github.com/shuriken-ui/nuxt/commit/6cf13f75b187873a70db0695e1b31f4fbf636846))
* **BaseAutocomplete:** update class bindings ([2c45109](https://github.com/shuriken-ui/nuxt/commit/2c4510978275a47ef8c00e64e079e779699c611e))
* **BaseAutocomplete:** update class bindings, add color-focus prop ([8cff245](https://github.com/shuriken-ui/nuxt/commit/8cff2451d65a58742c3527a3fe90fcadcb6564c4))
* **BaseAvatar:** add color and classes props, update app config ([aeb3014](https://github.com/shuriken-ui/nuxt/commit/aeb30147b28df35817332e432b956d2e9628ee00))
* **BaseAvatarGroup:** add classes prop ([b61e307](https://github.com/shuriken-ui/nuxt/commit/b61e3079b77d30541db808c6272b2fa723a85224))
* **BaseBreadcrumb:** add color and classes prop, add to app.config, add default prop values ([9931fb0](https://github.com/shuriken-ui/nuxt/commit/9931fb08b5c31e5e8d5f1adc7413fc801db1239f))
* **BaseButtonAction:** add colors, add contrast colors, update classes naming ([215ef45](https://github.com/shuriken-ui/nuxt/commit/215ef45175bd0a115aad35b753ce50eceaaf7073))
* **BaseButtonClose:** add contrast colors, update class bindings ([007f08d](https://github.com/shuriken-ui/nuxt/commit/007f08d5c018ca4f4ff47ccc05ed3f4e3b86bfa5))
* **BaseButtonIcon:** add colors, add contrast colors, update class bindings ([d6d5853](https://github.com/shuriken-ui/nuxt/commit/d6d5853b12e44b17b7e36e29c858a0810b360625))
* **BaseButton:** update prop names, add new colors, add contrast colors ([f1ad68c](https://github.com/shuriken-ui/nuxt/commit/f1ad68c4f73ced789f8d03789b528bd113ee92ca))
* **BaseCard:** add colors, update class bindings ([022a6cb](https://github.com/shuriken-ui/nuxt/commit/022a6cbbebc8957fb182d3df961bbab99340d627))
* **BaseCheckbox:** add colors, update class bindings ([e9dd164](https://github.com/shuriken-ui/nuxt/commit/e9dd1643a83559e4f569b2a3efd37ddc2adf3fea))
* **BaseCheckboxAnimated:** add new colors, update class bindings ([0f0e4cc](https://github.com/shuriken-ui/nuxt/commit/0f0e4cc51b9263a2d4fb0c96142d5f28ee6e17b5))
* **BaseDropdownItem:** rename color prop to contrast, add new color prop, update class bindings ([7937d74](https://github.com/shuriken-ui/nuxt/commit/7937d745d6bb8f442eb3e46e05170d0485e1156b))
* **BaseDropdownItem:** update jsdocs, update class bindings ([88606fc](https://github.com/shuriken-ui/nuxt/commit/88606fc03ff9703fbf9354af73e6d484bf597146))
* **BaseFullscreenDropfile:** add color prop ([ec8ed33](https://github.com/shuriken-ui/nuxt/commit/ec8ed3348f19991ce47cc48cce45071590b71369))
* **BaseIconBox:** add colors, update class bindings ([2dcb105](https://github.com/shuriken-ui/nuxt/commit/2dcb1051f9141c90dfb94aedde67bd51e5108c85))
* **BaseInputFile:** update class bindings, fix color focus ([552ac8e](https://github.com/shuriken-ui/nuxt/commit/552ac8e03caa8387357c4ffa7437c9170a79256b))
* **BaseInput:** update class bindings ([fe6f9d3](https://github.com/shuriken-ui/nuxt/commit/fe6f9d320172adcd93754668cdb8827803d46dc9))
* **BaseKbd:** update props, update class bindings ([491312b](https://github.com/shuriken-ui/nuxt/commit/491312bab7b4f7c895f755ed4e8f8560db1417e3))
* **BaseMessage:** add classes prop, update class bindings ([1fb534a](https://github.com/shuriken-ui/nuxt/commit/1fb534a4b496b3f34548493b3fea553f0a2ec9cc))
* **BasePagination:** add classes prop, update class bindings ([8daab5e](https://github.com/shuriken-ui/nuxt/commit/8daab5e2d8550811141ee81e748aecb640f685ca))
* **BaseProgress:** add colors, add classes prop, update class bindings ([0ba373b](https://github.com/shuriken-ui/nuxt/commit/0ba373bde57e3c9a02a47048b6c473d5a6892df6))
* **BaseProgressCircle:** add color and classes props, update schema and config ([a32c02c](https://github.com/shuriken-ui/nuxt/commit/a32c02c100b5f6c3b7d51553f14144c869d09d91))
* **BaseProse:** update class bindings ([068c8ae](https://github.com/shuriken-ui/nuxt/commit/068c8aea9027d86628d4b9e23b685c66548f2de5))
* **BaseRadio:** add colors, update class bindings ([f342e8b](https://github.com/shuriken-ui/nuxt/commit/f342e8bef844e59d0b4fcba3d3e6a0165c6b7633))
* **BaseSelect:** add color focus prop, update class bindings ([a494e2b](https://github.com/shuriken-ui/nuxt/commit/a494e2b722584eb70cbc24be82105fe65b03e258))
* **BaseSwitch:** add colors, update class bindings ([ee8bc1c](https://github.com/shuriken-ui/nuxt/commit/ee8bc1c77c9470335ed19e17e497c46425bc39c5))
* **BaseTabs:** add color and classes prop, update class bindings ([ff449ae](https://github.com/shuriken-ui/nuxt/commit/ff449ae659451a211ebeb495f62c527c18f80581))
* **BaseTabSlider:** add color and classes prop, update class bindings, update schema and config ([7809472](https://github.com/shuriken-ui/nuxt/commit/780947225d7c5d272c42a9862fb2f10c0fa6a6b6))
* **BaseTag:** add colors, update class bindings ([5d7bcf6](https://github.com/shuriken-ui/nuxt/commit/5d7bcf6de4f44dec77ca2b17e2079bfb8e178aa9))
* **BaseTextarea:** update class bindings, fix color focus ([6e955ff](https://github.com/shuriken-ui/nuxt/commit/6e955ff94db799e60c6f7ad560fad189cce753da))
* **Dropdown:** add colors, update class bindings ([68bbfe6](https://github.com/shuriken-ui/nuxt/commit/68bbfe6090feba606c73bd314574842db21499d1))
* **InputNumber:** update class bindings ([a7a551e](https://github.com/shuriken-ui/nuxt/commit/a7a551eb3256a7bd570216d5440799ab7a446acc))
* update playground demos ([8458d86](https://github.com/shuriken-ui/nuxt/commit/8458d866d5388e9c03f760f47f443f32dd510d35))

### [2.0.2](https://github.com/shuriken-ui/nuxt/compare/v2.0.1...v2.0.2) (2024-01-26)

### Bug Fixes

* **BaseAutocomplete:** fix error border color ([b46d4ff](https://github.com/shuriken-ui/nuxt/commit/b46d4ff2bfa5dad5bc49dbb19ff69cec76fc42a7))
* **BaseIconBox:** add non option to colors ([df70df6](https://github.com/shuriken-ui/nuxt/commit/df70df678488b5b74d825a304c6820647169f2cf))
* **BaseIconBox:** renamed invert color to light ([6efdbb1](https://github.com/shuriken-ui/nuxt/commit/6efdbb1570f215b28da3bc8f73da7f1624a9b557))
* **BaseInput:** fix classes bindings ([79d93f6](https://github.com/shuriken-ui/nuxt/commit/79d93f64eb4fd6a28ffaa0a8ee8b160d186cae2e))
* **BaseInputNumber:** update class bindings ([3d8b082](https://github.com/shuriken-ui/nuxt/commit/3d8b08215cd2f0153354afe0de7c7a29328cbd76))
* **BaseListbox:** update class bindings, add classes prop ([1f50da1](https://github.com/shuriken-ui/nuxt/commit/1f50da1d8de01349172adef13db9d5fc417c4af7))
* **BaseMessage:** rename type prop to color, update schema and config ([6c7a20c](https://github.com/shuriken-ui/nuxt/commit/6c7a20c6a3664cf141fffa5eab8c3ee8dac057cc))
* **BaseText:** replace p with span ([7cd8e4c](https://github.com/shuriken-ui/nuxt/commit/7cd8e4cc11ec82f6eaad13b4cd55857a2788594e))
* **BaseDropdown:** use default props from app config ([7887ce5](https://github.com/shuriken-ui/nuxt/commit/7887ce568eb265f9c93aba370d9553d204ab6aff))
* **BaseThemeToggle:** add disableTransitions in app config ([fc84339](https://github.com/shuriken-ui/nuxt/commit/fc84339b619a98f592fd5cc309374423129353f5))

### [2.0.1](https://github.com/shuriken-ui/nuxt/compare/v2.0.0...v2.0.1) (2024-01-24)


### Bug Fixes

* **BaseAccordion:** use ts generic for items content ([5ce4d84](https://github.com/shuriken-ui/nuxt/commit/5ce4d8425761bb1e78cfd6e61d128cc3e97e4180))
* **BaseTabs:** default tab detection on before mount ([0ad76af](https://github.com/shuriken-ui/nuxt/commit/0ad76afa7fbe01320213f5c2fc056af0158398f1))
* **BaseTabSlider:** default tab detection on before mount ([3740d4a](https://github.com/shuriken-ui/nuxt/commit/3740d4ac7ec2b139aaa49c84ba1af206711f2dac))
* use defineSlots in generic components ([f50e03b](https://github.com/shuriken-ui/nuxt/commit/f50e03b42b6b36d5688169a3c541cdb41311e0da))

## [2.0.0](https://github.com/shuriken-ui/nuxt/compare/v2.0.0-next.7...v2.0.0) (2024-01-11)


### Features

* use new defineModel in components ([5695a45](https://github.com/shuriken-ui/nuxt/commit/5695a451cd6643d2a40848fb2c5887bad631d9bb))


### Bug Fixes

* **BaseTreeSelect:** update tree when children props updates ([426c310](https://github.com/shuriken-ui/nuxt/commit/426c310aa4a64efffe295dd7cfc25b7e5254c777))

## [2.0.0-next.7](https://github.com/shuriken-ui/nuxt/compare/v2.0.0-next.6...v2.0.0-next.7) (2023-12-26)

## [2.0.0-next.6](https://github.com/shuriken-ui/nuxt/compare/v2.0.0-next.5...v2.0.0-next.6) (2023-12-21)


### Features

* refactor playground component shapes ([8ee1d7f](https://github.com/shuriken-ui/nuxt/commit/8ee1d7f2c74de5d2432177686a776802131bc9c4))


### Bug Fixes

* **BaseAvatarGroup:** update avatar shape to rounded ([b698244](https://github.com/shuriken-ui/nuxt/commit/b698244494cad4eb954a4b1cf74cef24fea63159))
* **BaseListbox:** update icon shape to rounded ([aa04d96](https://github.com/shuriken-ui/nuxt/commit/aa04d96a9e07d950b16d74dc7d0f603f86fd01ca))

## [2.0.0-next.5](https://github.com/shuriken-ui/nuxt/compare/v2.0.0-next.4...v2.0.0-next.5) (2023-12-20)


### Features

* add new playground demos ([8cef965](https://github.com/shuriken-ui/nuxt/commit/8cef9655208ab55cf3c15a6aade29f78aaf582e2))
* **BaseTreeSelect:** add default color to checkboxes in component ([7e20d9a](https://github.com/shuriken-ui/nuxt/commit/7e20d9a3146c32c52fc083ead4537a24bc0350e8))


### Bug Fixes

* **BaseAutocompleteItem:** refactor component: updated icon shape and color ([2736618](https://github.com/shuriken-ui/nuxt/commit/27366183891f676f470f466ff400a66ff143be1f))

## [2.0.0-next.4](https://github.com/shuriken-ui/nuxt/compare/v2.0.0-next.3...v2.0.0-next.4) (2023-12-20)

## [2.0.0-next.3](https://github.com/shuriken-ui/nuxt/compare/v2.0.0-next.2...v2.0.0-next.3) (2023-12-19)


### Features

* add and reorder demos on playground ([8c2e048](https://github.com/shuriken-ui/nuxt/commit/8c2e048b82c57afbcff1a1aa50a48edcc84a05c1))
* add autocomplete demos ([d4d1e81](https://github.com/shuriken-ui/nuxt/commit/d4d1e810f9671b597d55c358cdacde206655162f))
* add BaseAccordion demos and variations ([45ff793](https://github.com/shuriken-ui/nuxt/commit/45ff793e60ef4e8d6db9e5d9e2cd18ee8d7f8f06))
* add BaseAutocomplete demos ([1d468e8](https://github.com/shuriken-ui/nuxt/commit/1d468e83ef68ef8fd469a87ead16c731d6553557))
* add BaseAvatar and BaseAvatarGroup demos with different variations ([a522124](https://github.com/shuriken-ui/nuxt/commit/a5221248837562f2231d8138e469cf1362d740b1))
* add BaseBreadcrumb demos with different separators ([a3ce0d8](https://github.com/shuriken-ui/nuxt/commit/a3ce0d8f1e099b9e6c53f472707e9f58fbdb9222))
* add BaseButton demo with various variants and states ([2d6ab53](https://github.com/shuriken-ui/nuxt/commit/2d6ab53a6f41ed6cbc16e781f45672c2ccb699ae))
* add BaseButtonAction demos with various styles and states ([f3c0396](https://github.com/shuriken-ui/nuxt/commit/f3c0396bab0e94d1c1d47517f4c87353567a020b))
* add BaseButtonClose demos with different sizes and colors ([eb100cd](https://github.com/shuriken-ui/nuxt/commit/eb100cd4da2b8234c2aa7515fcd324cfe94046fd))
* add BaseButtonIcon demos and variations ([0537c1d](https://github.com/shuriken-ui/nuxt/commit/0537c1d3bb6ab394f632303d503f3b7255e15873))
* add BaseCard demos and variations ([70a4e4c](https://github.com/shuriken-ui/nuxt/commit/70a4e4c0cafb0fe63dd11bda3b1f211007bb5fcc))
* add BaseCheckbox demos ([43de104](https://github.com/shuriken-ui/nuxt/commit/43de104b6a4254c749178e81dd36708b6a49ebb7))
* add BaseCheckboxAnimated demos ([8f0384c](https://github.com/shuriken-ui/nuxt/commit/8f0384cd4e0fd01be57182ef010acad30df4d909))
* add BaseFocusLoop demos to playground ([d52ab4b](https://github.com/shuriken-ui/nuxt/commit/d52ab4b01cbdb1f25a69d71b7763d899a68c6347))
* add BaseInput demos ([44cf341](https://github.com/shuriken-ui/nuxt/commit/44cf3415545d839534dda5641baf2a6ad2ee19d0))
* add BaseInputFile demos ([652ab18](https://github.com/shuriken-ui/nuxt/commit/652ab180d563cc7cd51535e606be419e28a3a016))
* add BaseInputFileHeadless demos ([0cd535f](https://github.com/shuriken-ui/nuxt/commit/0cd535fe5a8ae682e6cb3ee3190c84d873fec549))
* add BaseList demos with various previews ([46882d9](https://github.com/shuriken-ui/nuxt/commit/46882d98c2143284a9c66d3930e68a0eb0f8766b))
* add BaseMessage demos and variations ([c65d888](https://github.com/shuriken-ui/nuxt/commit/c65d888f55320e64ec28849de6ee456005bc01e8))
* add BasePagination demos with different rounded styles ([b43cc31](https://github.com/shuriken-ui/nuxt/commit/b43cc317a33f641bd5e5159ffb0c5ddaf2bc5f59))
* add BasePlaceholderPage and BasePlaceload demos ([015561f](https://github.com/shuriken-ui/nuxt/commit/015561ff651f3cf01483ebc5679a921412164376))
* add BaseProgress demos to playground ([297cd2a](https://github.com/shuriken-ui/nuxt/commit/297cd2ab7ea38ca96028c6052490c16168fba2f3))
* add BaseSnack demos to playground tests ([c3df1c3](https://github.com/shuriken-ui/nuxt/commit/c3df1c3851e4fad6f43abb24dd226e06eb7253db))
* add BaseTag demos with different variants and styles ([a36889d](https://github.com/shuriken-ui/nuxt/commit/a36889d5ed25d91dc2621a94c7238ddabeeee535))
* add BaseThemeToggle demos to playground tests ([a3ace62](https://github.com/shuriken-ui/nuxt/commit/a3ace6235999e3d4a87da0c887ff4451289753f7))
* add BaseTreeSelect demos ([225e17f](https://github.com/shuriken-ui/nuxt/commit/225e17f4c8f945d2e154eb0d2c678bfeb8af47cf))
* add disabled autocomplete examples ([c2a97b7](https://github.com/shuriken-ui/nuxt/commit/c2a97b7f9b2583c8b95ff07cd2f0dee49c62fe83))
* add dropdown demos and variations ([be1c41d](https://github.com/shuriken-ui/nuxt/commit/be1c41d062944c787088ba410c788914cc843e93))
* add fullscreen-dropfile demo ([fe882e6](https://github.com/shuriken-ui/nuxt/commit/fe882e6b22e30a6725164cb35b7aed4a7fea2d46))
* add NuiPreview and NuiPreviewContainer components for playground ([272464a](https://github.com/shuriken-ui/nuxt/commit/272464a7f8901425e988ed21c6e2064f9d0ca7eb))
* add NuiTooltip demos and remove unused components ([893e1f5](https://github.com/shuriken-ui/nuxt/commit/893e1f57fad36dd3c96730af2eda2b5856b0044e))
* add Tab slider demos in playground ([2479eb3](https://github.com/shuriken-ui/nuxt/commit/2479eb367153e1b47bd746059582ea4120ce1911))
* add tabs demos to playground ([eb3efe2](https://github.com/shuriken-ui/nuxt/commit/eb3efe2cd5a6ef5108c98508ab95700796c6dd2a))
* add typography demos ([720a6bd](https://github.com/shuriken-ui/nuxt/commit/720a6bdbd891c629379ab43881d6bafa515710fd))
* **BaseAccordion:** update app.config.ts and BaseAccordion.vue ([fb0dad0](https://github.com/shuriken-ui/nuxt/commit/fb0dad0890ec2ba6b7b22f29fd4a743709f5258c))
* **BaseAutocomplete:** update app.config.ts and BaseAutocomplete.vue ([f1b28a8](https://github.com/shuriken-ui/nuxt/commit/f1b28a891873006dc2e7d4df32fc7e33b3b2ecb3))
* **BaseAvatarGroup:** refactor avatar group component and update app configuration ([210b5f9](https://github.com/shuriken-ui/nuxt/commit/210b5f9851bbb6faf1bec3fe05cdfbf04406167a))
* **BaseAvatar:** refactor BaseAvatar component and config ([debbe8f](https://github.com/shuriken-ui/nuxt/commit/debbe8f28b43542a9f8b546e780ac19f78dfb539))
* **BaseAvatar:** update app.config.ts and BaseAvatar.vue ([40ed93d](https://github.com/shuriken-ui/nuxt/commit/40ed93dba10696ea6d9b3c1a3eac66ed81c5a6a1))
* **BaseBreadcrumb:** refactor BaseBreadcrumb.vue component ([3adf994](https://github.com/shuriken-ui/nuxt/commit/3adf994cbc29b220c411af8248e957edce2eada5))
* **BaseButtonAction:** remove loading and disabled props from BaseButtonAction.vue ([9485f1c](https://github.com/shuriken-ui/nuxt/commit/9485f1c4be2cc251a1b28e1c78bb0e357b3dc5ef))
* **BaseButtonClose:** update BaseButtonClose component styles and default values ([e4ea740](https://github.com/shuriken-ui/nuxt/commit/e4ea740543859f5d32e1cd6b56c5cd069c5dca6c))
* **BaseButtonIcon:** update app.config.ts, nuxt.schema.ts, and button-icon.vue ([4ae77fa](https://github.com/shuriken-ui/nuxt/commit/4ae77fadf6a328071920efc61572582a050a98f8))
* **BaseButton:** update button shapes and color attribute ([ec5a63a](https://github.com/shuriken-ui/nuxt/commit/ec5a63ac26ed65bb5fbb8d9b765b8828ebd1946d))
* **BaseCard:** refactor BaseCard component configuration ([423e719](https://github.com/shuriken-ui/nuxt/commit/423e719afa2d786617c413a89c1cc36b418d33e2))
* **BaseCheckboxAnimated:** update app.config.ts and BaseCheckboxAnimated.vue ([23158c8](https://github.com/shuriken-ui/nuxt/commit/23158c813d00028c23ed7be17639fce9eb973855))
* **BaseCheckbox:** update BaseCheckbox component configuration ([45e06dd](https://github.com/shuriken-ui/nuxt/commit/45e06dd33a11a3261f869e526ada7c31fbd0233d))
* **BaseDropdownItem:** update app.config.ts and BaseDropdownItem.vue ([bfd6f36](https://github.com/shuriken-ui/nuxt/commit/bfd6f36e833a8857467b5fa26423cb485bf6ba35))
* **BaseDropdown:** update BaseDropdown component configuration ([23fdd57](https://github.com/shuriken-ui/nuxt/commit/23fdd57bc34420ea674f7898adff6487f6e3b473))
* **BaseHeading:** update BaseHeading component configuration ([87c068a](https://github.com/shuriken-ui/nuxt/commit/87c068a076b9d85f4fb7347bf40d4609d4054c2e))
* **BaseIconBox:** add 'none' color option to BaseIconBox ([65ccf30](https://github.com/shuriken-ui/nuxt/commit/65ccf30949c830ca7003687090ed97a7a0e17f59))
* **BaseIconBox:** update BaseIconBox component configuration ([9ae35b4](https://github.com/shuriken-ui/nuxt/commit/9ae35b41744a7e7ae4b20d2ad8299a430c58febf))
* **BaseInputFile:** update app.config.ts and BaseInputFile.vue ([dc46a21](https://github.com/shuriken-ui/nuxt/commit/dc46a21db7f8c75957192ef9b75a50d7f0ed636c))
* **BaseInputNumber:** update app.config.ts and BaseInputNumber.vue ([8b2a281](https://github.com/shuriken-ui/nuxt/commit/8b2a28118211311f71bad59ce9ed9b06aa32eb91))
* **BaseInput:** update app.config.ts and BaseInput.vue ([94b7952](https://github.com/shuriken-ui/nuxt/commit/94b7952e16f32c90bf4ce4fae321ee1cbdcc80cc))
* **BaseKbd:** add new BaseKbd component and update nuxt.config.ts and nuxt.schema.ts ([0b65a03](https://github.com/shuriken-ui/nuxt/commit/0b65a039c2b9608d8802866c7002cc0898234a9f))
* **BaseListbox:** update BaseListbox styling in app.config.ts and BaseListbox.vue ([7d199d0](https://github.com/shuriken-ui/nuxt/commit/7d199d082dd31099d40f1c2dff7451531b8360ab))
* **BaseMessage:** update BaseMessage configuration ([c825138](https://github.com/shuriken-ui/nuxt/commit/c82513867a29bc1a7409772e3dad6f14c3708326))
* **BasePagination:** update pagination component rounded property ([dfcd79b](https://github.com/shuriken-ui/nuxt/commit/dfcd79b5fa40a38fe5eee9d5e1621269900b5ee1))
* **BaseParagraph:** update BaseParagraph component configuration ([3bcbab5](https://github.com/shuriken-ui/nuxt/commit/3bcbab5af9b981ee4e55d021b73ed3be81d24171))
* **BasePlaceholderPage:** update app.config.ts and BasePlaceholderPage.vue ([6d1d1b4](https://github.com/shuriken-ui/nuxt/commit/6d1d1b45605f37c1660eda9502496754ad9b440e))
* **BaseProgress:** update BaseProgress component configuration ([480f600](https://github.com/shuriken-ui/nuxt/commit/480f6006d971ded4821dfd09a10dabd3fb0cc2cc))
* **BaseProse:** refactor BaseProse component to use rounded prop ([9e4eff4](https://github.com/shuriken-ui/nuxt/commit/9e4eff4e69bea00ed4e51e0c86ea81dabf8ee71d))
* **BaseRadio:** update BaseRadio color in app.config.ts and BaseRadio.vue ([bc4945c](https://github.com/shuriken-ui/nuxt/commit/bc4945c2247fac8561114185f4f77c1398b0b717))
* **BaseSelect:** update app.config.ts and BaseSelect.vue ([15d711d](https://github.com/shuriken-ui/nuxt/commit/15d711db78d826b2b72a02590e60e6fc274537f8))
* **BaseSnack:** update BaseSnack component configuration ([3581737](https://github.com/shuriken-ui/nuxt/commit/35817372df261455a33b92894ed2300237532870))
* **BaseSwitchBall:** update app.config.ts and BaseSwitchBall.vue ([a3ef45b](https://github.com/shuriken-ui/nuxt/commit/a3ef45b004243813af996b5882092c8a2dfd2e97))
* **BaseSwitchThin:** update BaseSwitchThin component, app.config.ts and nuxt.schema.ts ([6067a7c](https://github.com/shuriken-ui/nuxt/commit/6067a7c8cf6fd4edeaec622f8214560791dc5f7d))
* **BaseTabSlider:** update BaseTabSlider component configuration ([772a800](https://github.com/shuriken-ui/nuxt/commit/772a800616880c88e3f30af61155eb291408501f))
* **BaseTabs:** update BaseTabs component with type and justify props ([d0edfe4](https://github.com/shuriken-ui/nuxt/commit/d0edfe42b48db93a55ab7ff798bffd0fdced9522))
* **BaseTag:** refactor BaseTag component configuration ([1111105](https://github.com/shuriken-ui/nuxt/commit/11111053410d7861bc0e8d8863e72b7c4d691520))
* **BaseTextarea:** update BaseTextarea configuration ([5bd8f5a](https://github.com/shuriken-ui/nuxt/commit/5bd8f5a4ac5e71c1737f02240e9a7703547982dc))
* **BaseText:** update BaseText component styles ([deccb74](https://github.com/shuriken-ui/nuxt/commit/deccb746cc1504e2f3252a19b8395e8923d62d8d))
* **BaseTreeSelectItem:** update app.config.ts and BaseTreeSelectItem.vue ([9dfdc99](https://github.com/shuriken-ui/nuxt/commit/9dfdc9981a7ea17111665a5229dc1532d0bc9e7a))
* **ButtonAction:** update button styles and configurations ([e0704e8](https://github.com/shuriken-ui/nuxt/commit/e0704e853be46029e15b479e8c7283adaa1c9662))
* dd headless checkbox component with options ([ae22421](https://github.com/shuriken-ui/nuxt/commit/ae2242124760814a9bba46c96c915c05109f93c5))
* improve playground layout ([95a82b5](https://github.com/shuriken-ui/nuxt/commit/95a82b57f3fd00814d27bd0aaae1154aee8e8b60))
* refactor app.config.ts: Update BaseHeading styles ([3e2e9b1](https://github.com/shuriken-ui/nuxt/commit/3e2e9b1f8ae3fdf40cdeee091a4ba6db7e01e206))
* refactor BaseCheckboxHeadless.vue props ([f33c3bb](https://github.com/shuriken-ui/nuxt/commit/f33c3bb617cd5acbd028360537c90f7b337f9083))
* refactor BaseInputFileHeadless.vue: update props initialization ([3c2023f](https://github.com/shuriken-ui/nuxt/commit/3c2023fd651dd325f4115bf56c99854c5d6d26c0))
* refactor BaseRadioHeadless.vue props ([cdb4829](https://github.com/shuriken-ui/nuxt/commit/cdb4829457dd728f6f3db4d7d7dcf9a446e65dbd))
* refactor form/BaseCheckboxAnimated.vue props ([2f6dfb8](https://github.com/shuriken-ui/nuxt/commit/2f6dfb8c2923723084a06b6feb6bc0373582fc83))
* rework prop order in BaseFullscreenDropfile.vue ([39d3ea1](https://github.com/shuriken-ui/nuxt/commit/39d3ea1e22cb52764727da87730158b73af8c85b))
* update @shuriken-ui/tailwind version to 2.0.0-next.1 ([f219099](https://github.com/shuriken-ui/nuxt/commit/f2190990f774a93e2a6ec836bb5e6bf1f6386d33))
* update font and color styles in nuxt.config.ts ([ef4f8cb](https://github.com/shuriken-ui/nuxt/commit/ef4f8cb5f38857982d3c98dcdf92ebab033b8374))
* update playground and remove unused components ([09a5f9d](https://github.com/shuriken-ui/nuxt/commit/09a5f9d90ba065ba2e2d03ae306eb2fbed470a09))
* update snack.vue component playground ([c7e0b95](https://github.com/shuriken-ui/nuxt/commit/c7e0b950d604efea34e88141b965650e1f8dc106))


### Bug Fixes

* **BaseAvatarGroup:** update size prop documentation in BaseAvatarGroup.vue ([5c92951](https://github.com/shuriken-ui/nuxt/commit/5c92951132f53c658c3c5484300e5f4c3aeaa410))
* **BaseButtonClose:** update button radius styles ([e766d9e](https://github.com/shuriken-ui/nuxt/commit/e766d9ebf65921546c72915591e505a33b8b794a))
* **BaseButton:** refactor badge class in BaseButton.vue ([95c568a](https://github.com/shuriken-ui/nuxt/commit/95c568ac54fc2bc42ea9b986a40f53cfb6743662))
* **BaseDropdown:** fix color prop in BaseDropdown.vue ([222eba0](https://github.com/shuriken-ui/nuxt/commit/222eba088b11777bc75ecf4ea4a0743f1c64ff25))
* **BaseHeading:** fix dynamic component rendering in BaseHeading.vue ([3c534ea](https://github.com/shuriken-ui/nuxt/commit/3c534ea26254523032dc9f00ac28dc9a3a5c18d8))
* **BaseListbox:** refactor listbox component to improve label float and loading behavior ([5c0baa5](https://github.com/shuriken-ui/nuxt/commit/5c0baa5d44dac74bc84e89b73a929cb8a68769aa))
* **BaseMessage:** refactor radiuses object in BaseMessage.vue ([b9bd847](https://github.com/shuriken-ui/nuxt/commit/b9bd84768247ba94b78b640defe7152d18649119))
* **BasePagination:** update rounded property in BasePagination.vue ([829d89b](https://github.com/shuriken-ui/nuxt/commit/829d89b70db946f04cc3098619439ad121ebe64e))
* **BaseParagraph:** fix dynamic component rendering in BaseParagraph.vue ([ce384fe](https://github.com/shuriken-ui/nuxt/commit/ce384feba1da0b49e1f036402ba9dcef5f437223))
* **BaseSnack:** fix typo in BaseSnack component ([97055e8](https://github.com/shuriken-ui/nuxt/commit/97055e84082e81df681776294e5fbf7a9308b94c))
* **BaseTabs:** add text-sm class to tabs without icons in BaseTabs.vue ([92fce32](https://github.com/shuriken-ui/nuxt/commit/92fce328794621bd7061431fa1ffbb41739581d3))
* **BaseTreeSelectItem:** add 'full' option to the 'rounded' property ([f3e4fea](https://github.com/shuriken-ui/nuxt/commit/f3e4feaf0542efcf9f289d9a410b6f18744aedd1))

## [2.0.0-next.2](https://github.com/shuriken-ui/nuxt/compare/v2.0.0-next.1...v2.0.0-next.2) (2023-12-17)


### Bug Fixes

* update app.config and BaseButton.vue ([1d7467d](https://github.com/shuriken-ui/nuxt/commit/1d7467dfa218b4a5c6edc283c7c5cdf701376de2))

## [2.0.0-next.1](https://github.com/shuriken-ui/nuxt/compare/v2.0.0-next.0...v2.0.0-next.1) (2023-12-17)


### Bug Fixes

* refactor computed property to handle optional chaining ([e5e492b](https://github.com/shuriken-ui/nuxt/commit/e5e492b5bcc9d09452285eb63d9d3b6bbfd0bd75))

## [2.0.0-next.0](https://github.com/shuriken-ui/nuxt/compare/v1.9.6...v2.0.0-next.0) (2023-12-17)


### Features

* add useNuiDefaultProperty composable ([fe8b8bc](https://github.com/shuriken-ui/nuxt/commit/fe8b8bc6035b3bf3aac0123e397fe836c6bc7244))
* **BaseButton:** update component configuration ([d68edb6](https://github.com/shuriken-ui/nuxt/commit/d68edb659cabb83151a155e563324ff2efb12baf))


### Bug Fixes

* headless ui float transition ([d50fad9](https://github.com/shuriken-ui/nuxt/commit/d50fad90c69bcb0fcffe8d20a04df1f833dfa84e))

### [1.9.6](https://github.com/shuriken-ui/nuxt/compare/v1.9.5...v1.9.6) (2023-12-07)


### Bug Fixes

* **BaseAutocomplete:** reactive items props + add autocomplete-multiple-list-item slot ([fe9b32a](https://github.com/shuriken-ui/nuxt/commit/fe9b32a2dee0dab92db3a8189f46ac9295361326))

### [1.9.5](https://github.com/shuriken-ui/nuxt/compare/v1.9.4...v1.9.5) (2023-12-07)


### Bug Fixes

* **BaseTextarea:** improve autogrow and add maxHeight property ([6610084](https://github.com/shuriken-ui/nuxt/commit/6610084e0e936a3c3eeab685ab6593a6cedfee51))

### [1.9.4](https://github.com/shuriken-ui/nuxt/compare/v1.9.3...v1.9.4) (2023-12-05)


### Bug Fixes

* **BaseProgress:** aria-valuenow type ([2215979](https://github.com/shuriken-ui/nuxt/commit/2215979706eb77dae926fc5dcc4685a6abb55916))
* **BaseProse:** use default config ([8170efc](https://github.com/shuriken-ui/nuxt/commit/8170efcc4d6c50617b709dcb0ae78272bf4dc097))

### [1.9.3](https://github.com/shuriken-ui/nuxt/compare/v1.9.2...v1.9.3) (2023-12-05)


### Bug Fixes

* use nuxt-component-meta export ([7f539c5](https://github.com/shuriken-ui/nuxt/commit/7f539c5ff55815906ef71c972fa6ef226132b148))

### [1.9.2](https://github.com/shuriken-ui/nuxt/compare/v1.9.1...v1.9.2) (2023-11-28)


### Bug Fixes

* input number disabled styles ([2695bf0](https://github.com/shuriken-ui/nuxt/commit/2695bf033ddb9de7c2011de923c3ad5c5395d06c))

### [1.9.1](https://github.com/shuriken-ui/nuxt/compare/v1.9.0...v1.9.1) (2023-11-28)


### Bug Fixes

* **BaseInputNumber:** disabled state bug ([35c2ecf](https://github.com/shuriken-ui/nuxt/commit/35c2ecf49dfc445c75476c1619b24098c2df3fa3))

## [1.9.0](https://github.com/shuriken-ui/nuxt/compare/v1.8.0...v1.9.0) (2023-11-28)


### Features

* **BaseBreadcrumb:** add label slot + support custom icon classes ([56a1b61](https://github.com/shuriken-ui/nuxt/commit/56a1b6190ece40b43d7a7413eb0a3ef43b8a8956))
* **BaseInputNumber:** add disabled prop ([0fcc1b6](https://github.com/shuriken-ui/nuxt/commit/0fcc1b6d3cfa62c029b0e010f0e349c6fcfc260e))


### Bug Fixes

* **BaseDropdown:** add nui-focus on button ([28259d5](https://github.com/shuriken-ui/nuxt/commit/28259d51fa9acff00b3317afd9b5c5d173686b85))

## [1.8.0](https://github.com/shuriken-ui/nuxt/compare/v1.7.3...v1.8.0) (2023-11-16)


### Features

* add portal and more generic BaseAutocompleteItem ([df87117](https://github.com/shuriken-ui/nuxt/commit/df871171f9568a3ab464b2460be677863d4cdb3f))
* add portal to listbox ([d7720f7](https://github.com/shuriken-ui/nuxt/commit/d7720f7647dcbfbaf2f8f774cc8a3cb8cca5e648))
* add to dropdown ([1dcc5aa](https://github.com/shuriken-ui/nuxt/commit/1dcc5aa122ee3544950115f2fd5f62ecdfe89228))
* added some useful defaults for display and filter ([672e120](https://github.com/shuriken-ui/nuxt/commit/672e120b79609da7ed36c8816d0b1febb4ec3eb5))
* consistency to listbox and autocomplete with better defaults ([4292db6](https://github.com/shuriken-ui/nuxt/commit/4292db6180654aa3aaddfcac7a7445535e8d91ad))


### Bug Fixes

* accidentally removed dropdown condition ([3c38804](https://github.com/shuriken-ui/nuxt/commit/3c388049a0746a2ef9a4cad9ef844e0d8ebd1e23))
* added back in custom ([c123d5d](https://github.com/shuriken-ui/nuxt/commit/c123d5d7a81103950f07e79d5d3361f18d1dfe38))
* page jumping to top ([b5abee9](https://github.com/shuriken-ui/nuxt/commit/b5abee9499fc760b7062809e0a474c860b125fb8))
* properties should be undefined unless user specifies ([0e678e9](https://github.com/shuriken-ui/nuxt/commit/0e678e9d9710049dbbdb56178e2918510990ec2f))
* spacing and visibility of clearable icon ([7832c77](https://github.com/shuriken-ui/nuxt/commit/7832c77fa32e734abb82a9ae7f4c8ec58a985c9c))
* switched portal to fixed ([2f1a93f](https://github.com/shuriken-ui/nuxt/commit/2f1a93fc42621c809b2acf0e6fe6bdea3b8e2f43))

### [1.7.3](https://github.com/shuriken-ui/nuxt/compare/v1.7.2...v1.7.3) (2023-10-23)


### Bug Fixes

* export cjs pre-computed component meta ([ba8915d](https://github.com/shuriken-ui/nuxt/commit/ba8915d57ce7ac0aa6e3bb27765c909af4665e99))

### [1.7.2](https://github.com/shuriken-ui/nuxt/compare/v1.7.1...v1.7.2) (2023-10-23)


### Bug Fixes

* export pre-computed component meta ([13efa85](https://github.com/shuriken-ui/nuxt/commit/13efa853dff7b260ffaf0204b28e208b26273310))

### [1.7.1](https://github.com/shuriken-ui/nuxt/compare/v1.7.0...v1.7.1) (2023-10-19)


### Bug Fixes

* **BaseInputNumber:** improve floating point precision ([47b7a95](https://github.com/shuriken-ui/nuxt/commit/47b7a95cef438beea13bc7365d44addefbce0606))

## [1.7.0](https://github.com/shuriken-ui/nuxt/compare/v1.6.1...v1.7.0) (2023-10-19)


### Features

* add BaseInputNumber component ([4aa7eea](https://github.com/shuriken-ui/nuxt/commit/4aa7eeaa5478565167a7954bcbab35a7809a5700))

### [1.6.1](https://github.com/shuriken-ui/nuxt/compare/v1.6.0...v1.6.1) (2023-10-16)


### Bug Fixes

* **BaseAutocomplete:** bubble keydown event ([22994da](https://github.com/shuriken-ui/nuxt/commit/22994da07f0399151e56fbf01bd0639a44c2dfa5))

## [1.6.0](https://github.com/shuriken-ui/nuxt/compare/v1.5.0...v1.6.0) (2023-10-14)


### Features

* **BaseTextarea:** add .lazy v-model modifier ([6d68fa5](https://github.com/shuriken-ui/nuxt/commit/6d68fa5e27ccb3714cf87750e16973836d9f9afe))


### Bug Fixes

* improve autocomplete, listbox, radio typing ([b18930d](https://github.com/shuriken-ui/nuxt/commit/b18930d825ef7d7fe4cda3542c93b1af00f095fc))
* improve checkbox typing ([9d1e985](https://github.com/shuriken-ui/nuxt/commit/9d1e98552413d3d76e40abfc3c05e808972aa133))

## [1.5.0](https://github.com/shuriken-ui/nuxt/compare/v1.4.1...v1.5.0) (2023-10-13)


### Features

* **BaseInput:** add lazy v-model modifier ([6f012de](https://github.com/shuriken-ui/nuxt/commit/6f012de2479949f9e363c32161a8b159d9feb826))

### [1.4.1](https://github.com/shuriken-ui/nuxt/compare/v1.4.0...v1.4.1) (2023-10-13)


### Bug Fixes

* **dropdown:** set dropdown content z-index ([711419c](https://github.com/shuriken-ui/nuxt/commit/711419c4dbdd1c23c66625fdd9e26e1c67784a90))

## [1.4.0](https://github.com/shuriken-ui/nuxt/compare/v1.3.0...v1.4.0) (2023-10-09)


### Features

* **BaseProgressCircle:** add animation property ([6ef0a07](https://github.com/shuriken-ui/nuxt/commit/6ef0a076686d3a684366b741c70ce9fd326ddfda))

## [1.3.0](https://github.com/shuriken-ui/nuxt/compare/v1.2.0...v1.3.0) (2023-10-09)


### Features

* add icons slots ([#96](https://github.com/shuriken-ui/nuxt/issues/96)) ([eb0ab38](https://github.com/shuriken-ui/nuxt/commit/eb0ab38ee4739ac070d203d4712fdecf9ede1815))


### Bug Fixes

* modelValue type on autocomplete ([#97](https://github.com/shuriken-ui/nuxt/issues/97)) ([be90658](https://github.com/shuriken-ui/nuxt/commit/be90658087b151e3b1d098ec91e62c4eb56749c1))

## [1.2.0](https://github.com/shuriken-ui/nuxt/compare/v1.1.4...v1.2.0) (2023-10-03)


### Features

* use Floating UI for dropdown ([#94](https://github.com/shuriken-ui/nuxt/issues/94)) ([abd1523](https://github.com/shuriken-ui/nuxt/commit/abd15239522c1d9d6f9284ba9abe862c5ea2b7f0))

### [1.1.4](https://github.com/shuriken-ui/nuxt/compare/v1.1.3...v1.1.4) (2023-09-21)


### Bug Fixes

* **BaseListbox:** Remove text left in development ([#93](https://github.com/shuriken-ui/nuxt/issues/93)) ([cb2adce](https://github.com/shuriken-ui/nuxt/commit/cb2adce68da78c82d095ab8c5e3010596119c0b5))

### [1.1.3](https://github.com/shuriken-ui/nuxt/compare/v1.1.2...v1.1.3) (2023-09-19)

### [1.1.2](https://github.com/shuriken-ui/nuxt/compare/v1.1.1...v1.1.2) (2023-09-17)


### Bug Fixes

* remove typo ([0d29aa8](https://github.com/shuriken-ui/nuxt/commit/0d29aa8b252812760894e71ca5b71f57751376de))

### [1.1.1](https://github.com/shuriken-ui/nuxt/compare/v1.1.0...v1.1.1) (2023-09-15)


### Bug Fixes

* **BaseList:** render ul/ol and li tags ([44c3876](https://github.com/shuriken-ui/nuxt/commit/44c3876aa51f7e033b33a48a2465008f3af7c935))

## [1.1.0](https://github.com/shuriken-ui/nuxt/compare/v1.0.2...v1.1.0) (2023-09-10)


### Features

* upgrade @shuriken-ui/tailwind ([e491ef9](https://github.com/shuriken-ui/nuxt/commit/e491ef993c56907619223cdc7972a102f86c1ccf))


### Bug Fixes

* **BaseAutocomplete:** remove generic ([1bddca1](https://github.com/shuriken-ui/nuxt/commit/1bddca15359851a39923a7b304ec29b9b8e0a620))

### [1.0.2](https://github.com/shuriken-ui/nuxt/compare/v1.0.1...v1.0.2) (2023-09-08)


### Bug Fixes

* **BaseInput:** allow set custom class on outer element ([3c944c4](https://github.com/shuriken-ui/nuxt/commit/3c944c456a3c7c5901950e4b16d86312e92ef2a6))
* **BaseLink:** use internal internal instead of import for props ([e49f48f](https://github.com/shuriken-ui/nuxt/commit/e49f48fa25c1fd0b7c0e749fb6f00e851fbb6b76))

### [1.0.1](https://github.com/shuriken-ui/nuxt/compare/v1.0.0...v1.0.1) (2023-08-31)


### Bug Fixes

* **BaseAvatarGroup:** allow same sizes as BaseAvatar ([b28bc88](https://github.com/shuriken-ui/nuxt/commit/b28bc885b0015e592afbc01346c248ba79c7d804))
* **BaseDropdown:** allow same shape as BaseButton ([d5224f7](https://github.com/shuriken-ui/nuxt/commit/d5224f79b1d498b2e5249ca7abdd8add1f672ef9))

## [1.0.0](https://github.com/shuriken-ui/nuxt/compare/v1.0.0-beta.3...v1.0.0) (2023-08-28)


### ⚠ BREAKING CHANGES

* **BaseTabSlider:** rename selected prop to modelValue to allow v-model
* **BaseTabs:** rename selected prop to modelValue to allow v-model

### Features

* add combobox button to autocomplete ([#78](https://github.com/shuriken-ui/nuxt/issues/78)) ([efcb128](https://github.com/shuriken-ui/nuxt/commit/efcb1282d22bb05572d88c530dcf9142d320b9c2))
* **BaseListbox:** allow value prop as model with v-model.prop ([#76](https://github.com/shuriken-ui/nuxt/issues/76)) ([908e585](https://github.com/shuriken-ui/nuxt/commit/908e58595a51b7c96f59a3d6bd57d11bceca10e8))
* **BaseTabSlider:** rename selected prop to modelValue to allow v-model ([fda6395](https://github.com/shuriken-ui/nuxt/commit/fda639559b50cdb29bde799d35c4d9776a2ae12a))
* **BaseTabs:** rename selected prop to modelValue to allow v-model ([d20e934](https://github.com/shuriken-ui/nuxt/commit/d20e93416398c4270335c45404603578956a749f))
* **BaseTextarea:** expose fitSize prop ([3f7be0b](https://github.com/shuriken-ui/nuxt/commit/3f7be0b0f30f8fe12255eb20cdf214e73ebbb1a0)), closes [#23](https://github.com/shuriken-ui/nuxt/issues/23)
* update layer schema ([25214bd](https://github.com/shuriken-ui/nuxt/commit/25214bdad503f84b115c7c0fcc10248ab68ef691))


### Bug Fixes

* **BaseInputFileHeadless:** bind default slot values ([bc49903](https://github.com/shuriken-ui/nuxt/commit/bc49903d5cd70740b2ae8412f1b0dd65e10458dd))
* **BaseProgress:** add indeterminate animation ([651de7d](https://github.com/shuriken-ui/nuxt/commit/651de7d67a39b8f4f3dcbed53d7580a2d121fbe3))
* prevent shuriken-ui preset to be included more than once ([a8f52f2](https://github.com/shuriken-ui/nuxt/commit/a8f52f2111645de55e31273aaa02d11d6d55f103))

## [1.0.0-beta.3](https://github.com/shuriken-ui/nuxt/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2023-08-12)


### Features

* **BaseAutocomplete:** use generic component definition ([cce6d91](https://github.com/shuriken-ui/nuxt/commit/cce6d91e466e1292a07d57df01c59f9d9d2db843))
* **BaseRadioHeadless:** use generic component definition ([ceb48c0](https://github.com/shuriken-ui/nuxt/commit/ceb48c0b4da967af831622d6957ac4f7bcf4c3f9))
* **BaseRadio:** use generic component definition ([adcb7c4](https://github.com/shuriken-ui/nuxt/commit/adcb7c476147314c100c917d72478f73d0a44621))
* **BaseTabSlider:** remove lenght property, now computed from tabs length ([2efd031](https://github.com/shuriken-ui/nuxt/commit/2efd03157e512a1d8413a5acb9f4632c7d775c75))
* make v-model optional on all form components ([4237d08](https://github.com/shuriken-ui/nuxt/commit/4237d08a755d75909261ea5d17041a4826a248e4))


### Bug Fixes

* allow boolean in error props for all form components ([9b541c1](https://github.com/shuriken-ui/nuxt/commit/9b541c11d9bdfab935616e5025473434d58d0820)), closes [#75](https://github.com/shuriken-ui/nuxt/issues/75)
* **BaseInput:** change modelValue type to string | number ([d699c71](https://github.com/shuriken-ui/nuxt/commit/d699c71538ac92e53fd544d13d0579235f709943))
* **BaseSwitchBall:** change modelValue type to boolean ([0fb7dd5](https://github.com/shuriken-ui/nuxt/commit/0fb7dd583c8006eb07aad9fdbabe173de03892ca))
* **BaseSwitchThin:** change modelValue type to boolean ([da163b8](https://github.com/shuriken-ui/nuxt/commit/da163b873a4f9d6c8e9a39121b833682fd8f4562))
* **BaseTextarea:** change modelValue type to string ([8353f08](https://github.com/shuriken-ui/nuxt/commit/8353f081f26e65fe62fd670a03dbc41ca77a7e2a))

## [1.0.0-beta.2](https://github.com/shuriken-ui/nuxt/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2023-08-12)

## [1.0.0-beta.1](https://github.com/shuriken-ui/nuxt/compare/v1.0.0-beta.0...v1.0.0-beta.1) (2023-08-12)

## [1.0.0-beta.0](https://github.com/shuriken-ui/nuxt/compare/v0.3.1...v1.0.0-beta.0) (2023-08-12)


### Features

* add BaseButtonGroup component ([1ff77c4](https://github.com/shuriken-ui/nuxt/commit/1ff77c477240877007658bb221f875739120a64e))
* add BaseLink component ([c57288d](https://github.com/shuriken-ui/nuxt/commit/c57288d23d9305b0cc8f7ec1b80108664d60bbf0))
* add BaseList and BaseListItem components ([04d49c8](https://github.com/shuriken-ui/nuxt/commit/04d49c8ccccb725137b72e252a5ce8c627c3c9a6))
* **BaseAutocompleteItem:** add smooth shape ([5d0a00a](https://github.com/shuriken-ui/nuxt/commit/5d0a00a83b69d98d89221733b5161aa0e3569492))
* **BaseButton:** add smooth shape ([b93435d](https://github.com/shuriken-ui/nuxt/commit/b93435d56285741c1fe1323a06bb62bc04217075))

#### @shuriken-ui/tailwind related changes

* **BaseAccordion**: use nui-accordion plugin from @shuriken-ui/tailwind ([#33](https://github.com/shuriken-ui/nuxt/issues/33)) ([29f399a](https://github.com/shuriken-ui/nuxt/commit/29f399a6f4591a4cba0049f9d68dba59d022eca6))
* **BaseAutocomplete**: use nui-autocomplete plugin from @shuriken-ui/tailwind ([#36](https://github.com/shuriken-ui/nuxt/issues/36)) ([f665f46](https://github.com/shuriken-ui/nuxt/commit/f665f469841f8adc18185f6a7ff69903bf2237d0))
* **BaseAvatar**: use nui-avatar plugin from @shuriken-ui/tailwind ([#57](https://github.com/shuriken-ui/nuxt/issues/57)) ([8ac1eca](https://github.com/shuriken-ui/nuxt/commit/8ac1eca84e0663b3a133a6091a45b9103b291f3c))
* **BaseAvatarFroup**: use nui-avatar-group plugin from @shuriken-ui/tailwind ([#56](https://github.com/shuriken-ui/nuxt/issues/56)) ([d1e7e4a](https://github.com/shuriken-ui/nuxt/commit/d1e7e4a5ece71332dc3b8b6fd0786333ea8abbb3))
* **BaseBreadcumb**: use nui-breadcumb plugin from @shuriken-ui/tailwind ([#55](https://github.com/shuriken-ui/nuxt/issues/55)) ([cc71271](https://github.com/shuriken-ui/nuxt/commit/cc7127114b52116d70939747a8e86117c06daec3))
* **BaseButton**: use nui-button plugin from @shuriken-ui/tailwind ([#54](https://github.com/shuriken-ui/nuxt/issues/54)) ([f2dce1b](https://github.com/shuriken-ui/nuxt/commit/f2dce1b4ec6ca6d9ab6b61d29fe2e7f6bc4b76f0))
* **BaseButtonAction**: use nui-button-action plugin from @shuriken-ui/tailwind ([#32](https://github.com/shuriken-ui/nuxt/issues/32)) ([3d72193](https://github.com/shuriken-ui/nuxt/commit/3d721934e54e6e48ae7a52427ef7cd3c12294dc5))
* **BaseButtonClose**: use nui-button-close plugin from @shuriken-ui/tailwind ([#53](https://github.com/shuriken-ui/nuxt/issues/53)) ([6496bef](https://github.com/shuriken-ui/nuxt/commit/6496befae81e3e5cd9c80048bb3d8c8c9b5dedce))
* **BaseButtonIcon**: use nui-button-icon plugin from @shuriken-ui/tailwind ([#52](https://github.com/shuriken-ui/nuxt/issues/52)) ([1861035](https://github.com/shuriken-ui/nuxt/commit/18610356180e0fcca1c1c0ef049d7c739d1e5c92))
* **BaseCard**: use nui-card plugin from @shuriken-ui/tailwind ([#51](https://github.com/shuriken-ui/nuxt/issues/51)) ([4af7eb3](https://github.com/shuriken-ui/nuxt/commit/4af7eb3cce4a14b14ae5b02481593e9236a9fcce))
* **BaseCheckbox**: use nui-checkbox plugin from @shuriken-ui/tailwind ([#35](https://github.com/shuriken-ui/nuxt/issues/35)) ([44fa983](https://github.com/shuriken-ui/nuxt/commit/44fa9838e848a657b1d1f5a82f95c196dca1459f))
* **BaseDropdown**: use nui-dropdown plugin from @shuriken-ui/tailwind ([#31](https://github.com/shuriken-ui/nuxt/issues/31)) ([8c843ee](https://github.com/shuriken-ui/nuxt/commit/8c843eee4b42e26f8dfc51f19c487af22f6943a1))
* **BaseDropdown**: use nui-dropdown plugin from @shuriken-ui/tailwind ([#71](https://github.com/shuriken-ui/nuxt/issues/71)) ([1252d6a](https://github.com/shuriken-ui/nuxt/commit/1252d6a009b20afd8890a12eb3a00b9fd18af330))
* **BaseDropdownIitem**: use nui-dropdown-item plugin from @shuriken-ui/tailwind ([#49](https://github.com/shuriken-ui/nuxt/issues/49)) ([cfa2bbe](https://github.com/shuriken-ui/nuxt/commit/cfa2bbea83f38077e203cd089fbd779b51c4e868))
* **BaseHeading**: use nui-heading plugin from @shuriken-ui/tailwind ([#48](https://github.com/shuriken-ui/nuxt/issues/48)) ([209eaec](https://github.com/shuriken-ui/nuxt/commit/209eaec3ab58d2e173df0e0ae8f951ee02bffe1c))
* **BaseIconBox**: use nui-icon-box plugin from @shuriken-ui/tailwind ([#47](https://github.com/shuriken-ui/nuxt/issues/47)) ([33f2afe](https://github.com/shuriken-ui/nuxt/commit/33f2afe2307178810349c193e0fe3c66488f2332))
* **BaseInput**: use nui-input plugin from @shuriken-ui/tailwind ([#62](https://github.com/shuriken-ui/nuxt/issues/62)) ([f689fbb](https://github.com/shuriken-ui/nuxt/commit/f689fbb825cc53db7a536b7eb8e8c99b21fb889e))
* **BaseInputFile**: use nui-input-file plugin from @shuriken-ui/tailwind ([#63](https://github.com/shuriken-ui/nuxt/issues/63)) ([1441f3e](https://github.com/shuriken-ui/nuxt/commit/1441f3e1d63f37efc7146d32eb9e6cdfa78d1128))
* **BaseListbox**: use nui-listbox plugin from @shuriken-ui/tailwind ([#64](https://github.com/shuriken-ui/nuxt/issues/64)) ([2395ed5](https://github.com/shuriken-ui/nuxt/commit/2395ed5654cc4a9094d920b8f911a8d9d1e507fc))
* **BaseMesssage**: use nui-messsage plugin from @shuriken-ui/tailwind ([#30](https://github.com/shuriken-ui/nuxt/issues/30)) ([c53ed23](https://github.com/shuriken-ui/nuxt/commit/c53ed2352dae40006954c8c7935454ec2380ee0e))
* **BasePagination**: use nui-pagination plugin from @shuriken-ui/tailwind ([#29](https://github.com/shuriken-ui/nuxt/issues/29)) ([f65cbf2](https://github.com/shuriken-ui/nuxt/commit/f65cbf2d6d2d6e5d7a0ed6cb90e9ade3db830cfe))
* **BaseParagraph**: use nui-paragraph plugin from @shuriken-ui/tailwind ([#46](https://github.com/shuriken-ui/nuxt/issues/46)) ([0e3cd33](https://github.com/shuriken-ui/nuxt/commit/0e3cd33e288bffa74f58e5c49b84140b54c45b38))
* **BasePlacholderPage**: use nui-placholder-page plugin from @shuriken-ui/tailwind ([#45](https://github.com/shuriken-ui/nuxt/issues/45)) ([3aa024e](https://github.com/shuriken-ui/nuxt/commit/3aa024e15e8eed4fe3b931dc2e50356cd77ae05a))
* **BaseProgress**: use nui-progress plugin from @shuriken-ui/tailwind ([#44](https://github.com/shuriken-ui/nuxt/issues/44)) ([c301ae7](https://github.com/shuriken-ui/nuxt/commit/c301ae7d2aa0dca70dd302f1f391280e73d63067))
* **BaseProse**: use nui-prose plugin from @shuriken-ui/tailwind ([#72](https://github.com/shuriken-ui/nuxt/issues/72)) ([cf6b24a](https://github.com/shuriken-ui/nuxt/commit/cf6b24a7c8b328bea15b85a9f9485fa90d0532af))
* **BaseRadio**: use nui-radio plugin from @shuriken-ui/tailwind ([#65](https://github.com/shuriken-ui/nuxt/issues/65)) ([2703eb6](https://github.com/shuriken-ui/nuxt/commit/2703eb6b9c84a1a6ad1417891858feecfc515607))
* **BaseSelect**: use nui-select plugin from @shuriken-ui/tailwind ([#67](https://github.com/shuriken-ui/nuxt/issues/67)) ([2bb5487](https://github.com/shuriken-ui/nuxt/commit/2bb548763fd4fb0c9b0ecd2f65eba86905391423))
* **BaseSnack**: use nui-snack plugin from @shuriken-ui/tailwind ([#43](https://github.com/shuriken-ui/nuxt/issues/43)) ([b87574f](https://github.com/shuriken-ui/nuxt/commit/b87574f1ccb31bcd4b3637074a67f01844403fc0))
* **BaseSwitchBall**: use nui-switch-ball plugin from @shuriken-ui/tailwind ([#68](https://github.com/shuriken-ui/nuxt/issues/68)) ([cbcc0cf](https://github.com/shuriken-ui/nuxt/commit/cbcc0cf19f99d3039b15e9ecdb2fe855fbe218a7))
* **BaseSwitchThin**: use nui-switch-thin plugin from @shuriken-ui/tailwind ([#69](https://github.com/shuriken-ui/nuxt/issues/69)) ([3e658a4](https://github.com/shuriken-ui/nuxt/commit/3e658a4b936a1b96d26174bcc43e90c67f9de356))
* **BaseTabSlider**: use nui-tab-slider plugin from @shuriken-ui/tailwind ([#41](https://github.com/shuriken-ui/nuxt/issues/41)) ([3b1205c](https://github.com/shuriken-ui/nuxt/commit/3b1205c26c86032bcaf9782e3c956d11a3d13d05))
* **BaseTabs**: use nui-tabs plugin from @shuriken-ui/tailwind ([#42](https://github.com/shuriken-ui/nuxt/issues/42)) ([cde177c](https://github.com/shuriken-ui/nuxt/commit/cde177c80207afca2a5addc9994ef0f36a480c5a))
* **BaseTag**: use nui-tag plugin from @shuriken-ui/tailwind ([#40](https://github.com/shuriken-ui/nuxt/issues/40)) ([db39d95](https://github.com/shuriken-ui/nuxt/commit/db39d95e5c916a98167ddf412336ad028472c95f))
* **BaseText**: use nui-text plugin from @shuriken-ui/tailwind ([#39](https://github.com/shuriken-ui/nuxt/issues/39)) ([e37b83a](https://github.com/shuriken-ui/nuxt/commit/e37b83ae679cc2b1fac7cc84d307d3eb5d6cd478))
* **BaseTextarea**: use nui-textarea plugin from @shuriken-ui/tailwind ([#60](https://github.com/shuriken-ui/nuxt/issues/60)) ([e17e1fe](https://github.com/shuriken-ui/nuxt/commit/e17e1feee3eb7b739d703cd38144846138261b3d))
* **BaseThemeSwitch**: use nui-theme-switch plugin from @shuriken-ui/tailwind ([#38](https://github.com/shuriken-ui/nuxt/issues/38)) ([b7c2c56](https://github.com/shuriken-ui/nuxt/commit/b7c2c5603e9e4028c755485730968ddc31ddbdc9))
* **BaseThemeToggle**: use nui-theme-toggle plugin from @shuriken-ui/tailwind ([#37](https://github.com/shuriken-ui/nuxt/issues/37)) ([9514e39](https://github.com/shuriken-ui/nuxt/commit/9514e39071a14edc673fe13987e34d32ad85ec84))


### Bug Fixes

* corrent dropdown-divider name ([#50](https://github.com/shuriken-ui/nuxt/issues/50)) ([b55267f](https://github.com/shuriken-ui/nuxt/commit/b55267f0205139ec98d27b9bbba42e8d023d77d3))

### [0.3.1](https://github.com/shuriken-ui/nuxt/compare/v0.3.0...v0.3.1) (2023-07-04)


### Features

* **BaseIconBox:** add muted color ([deb9ffa](https://github.com/shuriken-ui/nuxt/commit/deb9ffac142a88c4e04d165a7d1b9040a11b78b0))


### Bug Fixes

* **BaseAutocomplete:** use active slot from ComboboxOptions ([51af625](https://github.com/shuriken-ui/nuxt/commit/51af625b4688f7a942317a42a4506cf325890a20))
* **BaseDropdown:** pass condensed prop to button ([65eee43](https://github.com/shuriken-ui/nuxt/commit/65eee436d5ac99f756b2cedcb69e0e7b1f6ed4de))
* **BaseInputFile:** button auto spacing ([83f8835](https://github.com/shuriken-ui/nuxt/commit/83f8835d5fb578bcad6cdbf74a00ef7343d89250))
* **BaseListbox:** fix multiple label properties access ([9f5c99f](https://github.com/shuriken-ui/nuxt/commit/9f5c99f45005d8b506a03a92ba0a2169776e8355))
* **BaseSelect:** add padding and text-ellipsis to avoid overflow with chevron ([741518d](https://github.com/shuriken-ui/nuxt/commit/741518d70b0c0adcf03b0e9c943c15475a703357))
* **buttons:** prevent overriding rel and target props ([26cdffa](https://github.com/shuriken-ui/nuxt/commit/26cdffa0060970d862c1caeb4c07cfb9e26973da))

## [0.3.0](https://github.com/shuriken-ui/nuxt/compare/v0.2.9...v0.3.0) (2023-06-22)


### ⚠ BREAKING CHANGES

* upgrade nui tailwind + remove embed css assets

### Features

* add button customization to dropdown component ([#13](https://github.com/shuriken-ui/nuxt/issues/13)) ([8b079d3](https://github.com/shuriken-ui/nuxt/commit/8b079d3aca5de7ab046c7acd4c8aff782f7e86ae))
* allow to pass href to render native anchors on buttons ([#20](https://github.com/shuriken-ui/nuxt/issues/20)) ([89b6c34](https://github.com/shuriken-ui/nuxt/commit/89b6c34ccb4608b1ef4a2f1da70f383c1ff48cb1))
* **dropdown:** add classes props to allow customization ([8c663ad](https://github.com/shuriken-ui/nuxt/commit/8c663addce7ef29c05fd75270864bc8abebe5e21))
* upgrade nui tailwind + remove embed css assets ([c340932](https://github.com/shuriken-ui/nuxt/commit/c3409327ce4d207f793dbde191f5a101b247fb5d))


### Bug Fixes

* **pagination:** display first page to 1 ([#16](https://github.com/shuriken-ui/nuxt/issues/16)) ([98b23f9](https://github.com/shuriken-ui/nuxt/commit/98b23f9120e06e931292cbc9cebbcd1293f79869))

### [0.2.9](https://github.com/shuriken-ui/nuxt/compare/v0.2.8...v0.2.9) (2023-05-20)

### [0.2.8](https://github.com/shuriken-ui/nuxt/compare/v0.2.7...v0.2.8) (2023-05-20)

### [0.2.7](https://github.com/shuriken-ui/nuxt/compare/v0.2.6...v0.2.7) (2023-05-20)


### Features

* add theme switch component, fix switch and theme toggle rtl mode ([6cce995](https://github.com/shuriken-ui/nuxt/commit/6cce9955ac42005c9f8bfa730124bf53f9722b64))

### [0.2.6](https://github.com/shuriken-ui/nuxt/compare/v0.2.5...v0.2.6) (2023-05-11)

### [0.2.5](https://github.com/shuriken-ui/nuxt/compare/v0.2.4...v0.2.5) (2023-05-11)

### [0.2.4](https://github.com/shuriken-ui/nuxt/compare/v0.2.3...v0.2.4) (2023-05-11)

### [0.2.3](https://github.com/shuriken-ui/nuxt/compare/v0.2.2...v0.2.3) (2023-05-11)

### [0.2.2](https://github.com/shuriken-ui/nuxt/compare/v0.2.1...v0.2.2) (2023-05-11)


### Bug Fixes

* add autocomplete classes props ([efabb32](https://github.com/shuriken-ui/nuxt/commit/efabb321f43535c0d70e394f7c574cd621f0f58f))

### [0.2.1](https://github.com/shuriken-ui/nuxt/compare/v0.2.0...v0.2.1) (2023-04-28)


### Bug Fixes

* tooltip text color ([e4f78d0](https://github.com/shuriken-ui/nuxt/commit/e4f78d00e0c6bea16247ef96b7e8f290b6fbefe5))

## [0.2.0](https://github.com/shuriken-ui/nuxt/compare/v0.1.0...v0.2.0) (2023-04-21)


### ⚠ BREAKING CHANGES

* **components:** make component non global

### Features

* **components:** make component non global ([3be4a7e](https://github.com/shuriken-ui/nuxt/commit/3be4a7e55a6228a6f5d346038d2398222966e6d3))

## [0.1.0](https://github.com/shuriken-ui/nuxt/compare/v0.0.2...v0.1.0) (2023-04-18)


### ⚠ BREAKING CHANGES

* remove BaseButtonRing component

### Bug Fixes

* add nui prefix to named group ([5356719](https://github.com/shuriken-ui/nuxt/commit/5356719a05d8e9dedc96236369c5494421331d7d))
* **BaseHeading:** use p tag by default ([c0310a4](https://github.com/shuriken-ui/nuxt/commit/c0310a4b6a6496d5e3447eb260c8f40a952ff478))
* **BaseThemeToggle:** use nui-focus ([cbc681f](https://github.com/shuriken-ui/nuxt/commit/cbc681f6617d77e3ff066b1d195b6b390a943786))
* **typo:** rename progess to progress ([be788e4](https://github.com/shuriken-ui/nuxt/commit/be788e480f4e418a115edab67d8c9de69d9bbef3)), closes [#3](https://github.com/shuriken-ui/nuxt/issues/3)


* remove BaseButtonRing component ([576e568](https://github.com/shuriken-ui/nuxt/commit/576e568287c5c0a1297feac0e35d6939216decc4))

### [0.0.2](https://github.com/shuriken-ui/nuxt/compare/v0.0.1...v0.0.2) (2023-04-14)


### Bug Fixes

* update dependencies ([ea8e9af](https://github.com/shuriken-ui/nuxt/commit/ea8e9af25e5c159d9feafdb0792fedf33603b4a0))

### 0.0.1 (2023-04-14)


### Features

* initial release ([aea847c](https://github.com/shuriken-ui/nuxt/commit/aea847c7e913449f1065fcd50a0cf6c456880cc7))
