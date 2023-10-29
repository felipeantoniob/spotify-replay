import type { SVGProps } from 'react'

const ICONS_IDS = [
  'artists',
  'close',
  'genres',
  'log-out',
  'playing',
  'playlist',
  'profile',
  'replay',
  'spotify',
  'tracks',
  'three-dots-vertical',
] as const

export type IconId = (typeof ICONS_IDS)[number]

type IconProps = { id: IconId } & SVGProps<SVGSVGElement>

export const Icon = ({ id, ...props }: IconProps) => (
  <svg {...props}>
    <use href={`/sprite.svg#${id}`} />
  </svg>
)
