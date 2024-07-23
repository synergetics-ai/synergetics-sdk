import { BehavioralType } from './behavioral-type'

export type BehavioralOptions = {
  /**
   * Your synergetics will launch based on behavioral triggers.
   *
   * @type {BehavioralType}
   */
  open?: BehavioralType
  /**
   * Value to complement the "open" option:
   *  - load: not used
   *  - exit: pixels for the height of trigger area
   *  - scroll: % of page to be scrolled
   *  - time: milliseconds to wait before launching
   */
  openValue?: number
  /**
   * When the user closes the modal, it will not automatically reopen on next page visit.
   */
  preventReopenOnClose?: boolean
  /**
   * Do not open if there already is a modal with synergetics open.
   *  - all: any other synergetics
   *  - same: only if the form is the same as this one (same form ID)
   */
  respectOpenModals?: 'all' | 'same'
}
