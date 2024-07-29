import { ActionableOptions, BaseOptions, UrlOptions, SizeableOptions, IframeOptions } from '../../base'

export type WidgetOptions = BaseOptions &
  UrlOptions &
  ActionableOptions &
  SizeableOptions &
  IframeOptions & {
    /**
     * Element to place the widget into.
     *
     * @type {HTMLElement}
     */
    container: HTMLElement
    //Auth Token for the webplayer
    token:string

    //Bot Asset ID for rendering the agent
    avatarAssetId:string
    /**
     * Overrides fullscreen modal on mobile.
     *
     * @type {boolean}
     */
    inlineOnMobile?: boolean
    /**
     * Lazy loads the widget element when it's visible
     *
     * @type {boolean}
     */
    lazy?: boolean
    /**
     * Enabled form auto focus.
     *
     * @type {boolean}
     */
    autoFocus?: boolean
  }
