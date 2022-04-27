import React, {MouseEvent, useState} from 'react';
export type TypeButtonProps ={
  name:string

  func:(value:string)=> void

   disabled: boolean

}

export function Button2(props:TypeButtonProps) {

 function OnclickHandler(e:MouseEvent<HTMLButtonElement>) {
    props.func(e.currentTarget.value)
 }

  return (
      <button disabled={props.disabled} name={props.name}  onClick={OnclickHandler}>{props.name}</button>
  )
}