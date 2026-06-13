import type { SVGProps } from 'react'

type ToolIconProps = SVGProps<SVGSVGElement> & { size?: number }

function createIcon(path: React.ReactNode, viewBox = '0 0 24 24') {
  return function Icon({ size = 24, ...props }: ToolIconProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox={viewBox}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        {...props}
      >
        {path}
      </svg>
    )
  }
}

export const WhimsicalIcon = createIcon(
  <>
    <path d="M3 16c2-3 5-3 7 0s5 3 7 0" />
    <path d="M3 10c2-3 5-3 7 0s5 3 7 0" />
  </>,
)

export const FigJamIcon = createIcon(
  <>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 3v18" />
    <path d="M3 9h18" />
  </>,
)

export const CanvaIcon = createIcon(
  <>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="M15 9l-3 7h5l-1.5-3.5L15 9z" />
  </>,
)

export const MiroIcon = createIcon(
  <>
    <circle cx="12" cy="5" r="2" />
    <circle cx="5" cy="19" r="2" />
    <circle cx="19" cy="19" r="2" />
    <path d="M12 7l-5 10" />
    <path d="M12 7l5 10" />
  </>,
)
