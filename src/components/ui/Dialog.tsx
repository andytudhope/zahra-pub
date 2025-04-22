'use client'

import { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'

type DialogProps = {
  open: boolean
  onClose: () => void
  children: ReactNode
}

export default function Dialog({ open, onClose, children }: DialogProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  if (!open) return null

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div
        className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          ×
        </button>
        {children}
      </div>
    </div>,
    document.body
  )
}
