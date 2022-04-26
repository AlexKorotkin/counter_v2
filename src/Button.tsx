import React from 'react';


export type TypeButtonProps ={
  name:string
  startValue:any
  maxValue: any
}

export function Button(props:TypeButtonProps) {


  return (
      <button>{props.name}</button>
  )
};



