import { fireEvent } from '@testing-library/dom'

import { createIframe } from './create-iframe'

jest.mock('./generate-embed-id', () => ({ generateEmbedId: () => 'random-id' }))

describe('create-iframe', () => {
  describe('#createIframe', () => {
    let iframe: HTMLIFrameElement

    const buildIframeSrcMock = jest
      .spyOn(require('./../build-iframe-src'), 'buildIframeSrc')
      .mockImplementation(() => 'http://iframe-src/')
    const createElementMock = jest.spyOn(document, 'createElement')
    const triggerIframeRedrawMock = jest.spyOn(require('./trigger-iframe-redraw'), 'triggerIframeRedraw')
    const options = {
      onReady: jest.fn(),
      onStarted: jest.fn(),
      onSubmit: jest.fn(),
      onQuestionChanged: jest.fn(),
      onHeightChanged: jest.fn(),
      domain: 'custom.example.com',
      iframeProps: {
        title: 'hello',
        ariaLabel: 'foo bar',
        style: 'border:1px red solid;margin:10px;', // not recommended, but valid
      },
    }

    beforeEach(() => {
      // eslint-disable-next-line prefer-destructuring
      iframe = createIframe('widget', { formId: 'form-id',avatarAssetId:'',token:'', options }).iframe
    })

    it('should call buildIframeSrc', () => {
      expect(buildIframeSrcMock).toHaveBeenCalledTimes(1)
      expect(buildIframeSrcMock).toHaveBeenCalledWith({
        embedId: 'random-id',
        formId: 'form-id',
        options,
        type: 'widget',
      })
    })

    it('should create new iframe element', () => {
      expect(createElementMock).toHaveBeenCalledWith('iframe')
    })

    it('should set correct iframe src', () => {
      expect(iframe.src).toBe('http://iframe-src/')
    })

    it('should set default iframe test id', () => {
      expect(iframe.getAttribute('data-testid')).toBe('iframe')
    })

    it('should set correct iframe title', () => {
      expect(iframe.getAttribute('title')).toBe('hello')
    })

    it('should set correct iframe aria-label', () => {
      expect(iframe.getAttribute('aria-label')).toBe('foo bar')
    })

    it('should set correct iframe style', () => {
      expect(iframe).toHaveStyle({ border: '1px red solid', margin: '10px' })
    })

    it('should set correct iframe permissions', () => {
      expect(iframe.allow).toBe('microphone; camera')
    })

    it('tell browser to redraw the iframe after the load', () => {
      expect.assertions(1)

      fireEvent(iframe, new Event('load'))

      expect(triggerIframeRedrawMock).toHaveBeenCalled()
    })

    it('should call form-ready handler', async () => {
      window.postMessage({ type: 'form-ready', embedId: 'random-id' }, '*')
      await new Promise((resolve) => setTimeout(resolve))

      expect(options.onReady).toBeCalled()
    })

    it('should call form-started handler', async () => {
      window.postMessage({ type: 'form-started', embedId: 'random-id' }, '*')
      await new Promise((resolve) => setTimeout(resolve))

      expect(options.onStarted).toBeCalled()
    })

    it('should call form-screen-changed handler', async () => {
      window.postMessage({ type: 'form-screen-changed', embedId: 'random-id' }, '*')
      await new Promise((resolve) => setTimeout(resolve))

      expect(options.onQuestionChanged).toBeCalled()
    })

    it('should call form-height-changed handler', async () => {
      window.postMessage({ type: 'form-height-changed', embedId: 'random-id' }, '*')
      await new Promise((resolve) => setTimeout(resolve))

      expect(options.onHeightChanged).toBeCalled()
    })

    it('should call form-submit handler', async () => {
      window.postMessage({ type: 'form-submit', responseId: 'test-response-id', embedId: 'random-id' }, '*')
      await new Promise((resolve) => setTimeout(resolve))

      expect(options.onSubmit).toBeCalledWith({ responseId: 'test-response-id' })
    })
  })
})
