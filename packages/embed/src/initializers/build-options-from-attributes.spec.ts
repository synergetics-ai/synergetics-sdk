import { buildOptionsFromAttributes } from './build-options-from-attributes'

describe('build-options-from-attributes', () => {
  describe('#buildOptionsFromAttributes', () => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = `<div id="element"
        data-wp-source="unit-test-source"
        data-wp-medium="unit-test-medium"
        data-wp-medium-version="unit-test-version"
        data-wp-hide-footer="yes"
        data-wp-hide-headers="no"
        data-wp-opacity="50"
        data-wp-disable-tracking
        data-wp-disable-auto-focus
        data-wp-on-ready="onWebPlayerReady"
        data-wp-on-started="onWebPlayerStarted"
        data-wp-on-submit="onWebPlayerSubmit"
        data-wp-on-question-changed="onWebPlayerQuestionChanged"
        data-wp-on-height-changed="onWebPlayerHeightChanged"
        data-wp-auto-resize="100,300"
        data-wp-open="exit"
        data-wp-open-value="3000"
        data-wp-hidden="foo=foo value,bar=some bar value"
        data-wp-share-ga-instance="ua-hello-1"
        data-wp-tracking="utm_foo=utm foo value,foobar=foobar value"
        data-wp-redirect-target="_blank"
        data-wp-domain="custom.example.com"
        data-wp-lazy
        data-wp-keep-session
        data-wp-disable-scroll
        data-wp-full-screen
        data-wp-no-heading
        data-wp-iframe-props="title=foo"
        data-wp-button-props="aria-label=bar"
        data-wp-preselect="foo=bar"
        data-wp-respect-open-modals="all"
        data-wp-no-scrollbars
      ></div>`

    it('should load correct options', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const win = window as any
      win.onWebPlayerReady = jest.fn()
      win.onWebPlayerStarted = jest.fn()
      win.onWebPlayerSubmit = jest.fn()
      win.onWebPlayerQuestionChanged = jest.fn()
      win.onWebPlayerHeightChanged = jest.fn()

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
        onReady: win.onWebPlayerReady,
        onStarted: win.onWebPlayerStarted,
        onSubmit: win.onWebPlayerSubmit,
        onQuestionChanged: win.onWebPlayerQuestionChanged,
        onHeightChanged: win.onWebPlayerHeightChanged,
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
