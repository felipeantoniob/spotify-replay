import React from 'react'

type ButtonProps = {
  onClick: () => void
  text: string
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="rounded-md border border-gray-700 px-6 py-2 text-lg text-gray-400 shadow-sm shadow-gray-800  transition-all hover:bg-white/5 hover:text-gray-300"
    >
      {text}
    </button>
  )
}

export default Button
