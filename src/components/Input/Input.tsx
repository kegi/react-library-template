import React, { ChangeEventHandler } from 'react'

type InputProps = {
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
}) => (
  <input value={value} onChange={onChange} />
)

export default Input
