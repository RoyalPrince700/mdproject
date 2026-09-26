import { parseInlineFormatting } from '../../lib/inlineText'

interface Props {
  text: string
  className?: string
}

export function InlineFormattedText({ text, className }: Props) {
  const segments = parseInlineFormatting(text)
  return (
    <span className={className}>
      {segments.map((segment, index) =>
        segment.bold ? (
          <strong key={index}>{segment.text}</strong>
        ) : (
          <span key={index}>{segment.text}</span>
        ),
      )}
    </span>
  )
}
