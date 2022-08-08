import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog'
import '@reach/dialog/styles.css'

interface IModalProps {
  isOpen: boolean
  onClose: () => void
  ariaLabel?: string
  children?: React.ReactNode
}

export function Modal({ isOpen, onClose, ariaLabel, children }: IModalProps) {
  return (
    <Dialog isOpen={isOpen} onDismiss={onClose} aria-label={ariaLabel}>
      {children}
    </Dialog>
  )
}
