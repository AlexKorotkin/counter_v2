import React  from 'react';
export type TypeButtonProps ={
  name:string
  func:()=> void
   disabled: boolean
}

export function Button2(props:TypeButtonProps) {

  const OnclickHandler = () => props.func();

  return (
      <button disabled={props.disabled} name={props.name}  onClick={OnclickHandler}>{props.name}</button>
  )
}