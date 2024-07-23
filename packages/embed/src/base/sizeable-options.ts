export type WidthOption = {
  /**
   * Specify the width of the embed.
   *
   * @type {number | string}
   */
  width?: number | string
}

export type SizeableOptions = WidthOption & {
  /**
   * Specify the height of the embed.
   *
   * @type {number | string}
   */
  height?: number | string
  /**
   * Automatically resize embed to always fit the whole form.
   *
   * @type {boolean | string}
   */
  autoResize?: boolean | string
  /**
   * Make the widget embed full screen, resize on viewport change to fit window
   */
  fullScreen?: boolean
  /**
   * Show only the chat window.
   *
   * @type {boolean}
   */
  chatOnly?: boolean
  /**
   * Show only the 3D model.
   *
   * @type {boolean}
   */
  modelOnly?: boolean
  /**
   * Position of the chat window.
   *
   * @type {'left' | 'right' | 'top' | 'bottom'}
   */
  chatPosition?: 'left' | 'right' | 'top' | 'bottom'
}
