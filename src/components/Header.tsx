import { ReactNode } from 'react'

type HeaderProps = {
  children?: ReactNode
  title: string
}

const Header = ({ children, title }: HeaderProps) => {
  return (
    <div className="mb-10 flex flex-col items-center justify-between p-4 sm:flex-row">
      <h1 className="text-4xl font-bold text-gray-200">{title}</h1>
      {children}
    </div>
  )
}

export default Header
