import { buildOptionsFromAttributes } from './build-options-from-attributes'

describe('build-options-from-attributes', () => {
  describe('#buildOptionsFromAttributes', () => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = `<div id="element"
        data-tf-source="unit-test-source"
        data-tf-medium="unit-test-medium"
        data-tf-medium-version="unit-test-version"
        data-tf-hide-footer="yes"
        data-tf-hide-headers="no"
        data-tf-opacity="50"
        data-tf-disable-tracking
        data-tf-disable-auto-focus
        data-tf-on-ready="onsynergeticsReady"
        data-tf-on-started="onsynergeticsStarted"
        data-tf-on-submit="onsynergeticsSubmit"
        data-tf-on-question-changed="onsynergeticsQuestionChanged"
        data-tf-on-height-changed="onsynergeticsHeightChanged"
        data-tf-auto-resize="100,300"
        data-tf-open="exit"
        data-tf-open-value="3000"
        data-tf-hidden="foo=foo value,bar=some bar value"
        data-tf-share-ga-instance="ua-hello-1"
        data-tf-tracking="utm_foo=utm foo value,foobar=foobar value"
        data-tf-redirect-target="_blank"
        data-tf-domain="custom.example.com"
        data-tf-lazy
        data-tf-keep-session
        data-tf-disable-scroll
        data-tf-full-screen
        data-tf-no-heading
        data-tf-iframe-props="title=foo"
        data-tf-button-props="aria-label=bar"
        data-tf-preselect="foo=bar"
        data-tf-respect-open-modals="all"
        data-tf-no-scrollbars
      ></div>`

    it('should load correct options', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const win = window as any
      win.onsynergeticsReady = jest.fn()
      win.onsynergeticsStarted = jest.fn()
      win.onsynergeticsSubmit = jest.fn()
      win.onsynergeticsQuestionChanged = jest.fn()
      win.onsynergeticsHeightChanged = jest.fn()

      const element = wrapper.querySelector('#element') as HTMLElement
      const options = buildOptionsFromAttributes(element)

      expect(options).toMatchObject({
        source: 'unit-test-source',
        medium: 'unit-test-medium',
        mediumVersion: 'unit-test-version',
        hideFooter: true,
        hideHeaders: false,
        opacity: 50,
        disableTracking: true,
        onReady: win.onsynergeticsReady,
        onStarted: win.onsynergeticsStarted,
        onSubmit: win.onsynergeticsSubmit,
        onQuestionChanged: win.onsynergeticsQuestionChanged,
        onHeightChanged: win.onsynergeticsHeightChanged,
        autoResize: '100,300',
        open: 'exit',
        openValue: 3000,
        hidden: {
          foo: 'foo value',
          bar: 'some bar value',
        },
        shareGaInstance: 'ua-hello-1',
        tracking: {
          utm_foo: 'utm foo value',
          foobar: 'foobar value',
        },
        redirectTarget: '_blank',
        domain: 'custom.example.com',
        lazy: true,
        keepSession: true,
        disableScroll: true,
        fullScreen: true,
        noHeading: true,
        iframeProps: {
          title: 'foo',
        },
        buttonProps: {
          'aria-label': 'bar',
        },
        preselect: {
          foo: 'bar',
        },
        respectOpenModals: 'all',
        noScrollbars: true,
      })
    })
  })
})
