import {
  useCallback,
  useEffect,
  useRef,
  type ElementType,
  type HTMLAttributes,
  type KeyboardEvent,
} from 'react'

interface Props extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  value: string
  onChange: (value: string) => void
  tag?: ElementType
  multiline?: boolean
  placeholder?: string
  onFocusSelect?: () => void
}

export function EditableText({
  value,
  onChange,
  className = '',
  tag: Tag = 'span',
  multiline = false,
  placeholder,
  onFocusSelect,
  onKeyDown,
  ...rest
}: Props) {
  const ref = useRef<HTMLElement>(null)
  const isFocused = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || isFocused.current) return
    const next = value || ''
    if (el.textContent !== next) {
      el.textContent = next
    }
  }, [value])

  const handleInput = useCallback(() => {
    onChange(ref.current?.textContent ?? '')
  }, [onChange])

  const handleFocus = () => {
    isFocused.current = true
    onFocusSelect?.()
  }

  const handleBlur = () => {
    isFocused.current = false
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (!multiline && event.key === 'Enter') {
      event.preventDefault()
      ref.current?.blur()
    }
    onKeyDown?.(event)
  }

  const handlePaste = (event: React.ClipboardEvent<HTMLElement>) => {
    event.preventDefault()
    const text = event.clipboardData.getData('text/plain')
    document.execCommand('insertText', false, text)
  }

  const empty = !value.trim()

  return (
    <Tag
      {...rest}
      ref={ref}
      className={`editable-text${empty ? ' editable-text--empty' : ''}${
        className ? ` ${className}` : ''
      }`}
      contentEditable
      suppressContentEditableWarning
      role="textbox"
      aria-multiline={multiline || undefined}
      data-placeholder={placeholder}
      onInput={handleInput}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
    />
  )
}
