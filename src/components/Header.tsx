import type { ReactNode } from 'react'

type HeaderProps = {
  children?: ReactNode
  title: string
}

const Header = ({ children, title }: HeaderProps) => {
  return (
    <div className="mx-4 mb-10 flex flex-col items-center justify-between p-4 sm:flex-row">
      <h1 className="text-2xl font-bold text-white">{title}</h1>
      {children}
    </div>
  )
}

export default Header
