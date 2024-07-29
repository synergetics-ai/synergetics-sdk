import React, { CSSProperties, useEffect, useRef } from 'react'
import { createWidget, WidgetOptions } from '@typeform/embed'

import { InlineStyle } from './inline-style'

export type WidgetProps = Omit<WidgetOptions, 'container'> & {
  id: string
  wid?: string
  token?: string
  avatarAssetId?: string
  style?: CSSProperties
  className?: string
  chatOnly?: boolean
  modelOnly?: boolean
  chatPosition?: 'left' | 'right' | 'top' | 'bottom'
}

export const Widget = ({ id,wid,token,avatarAssetId, style = {}, className = ''}: WidgetProps) => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (container.current) {
      const ref = createWidget(wid ? wid : id, { 
        container: container.current,
        token: token,
        avatarAssetId: avatarAssetId
      })
      return () => {
        ref.unmount()
      }
    }
    else{
      console.log("No Error");
    }
  }, [id])

  return (
    <>
      <InlineStyle key={id} filename="widget" />
      <div style={style} className={className} ref={container}></div>
    </>
  )
}