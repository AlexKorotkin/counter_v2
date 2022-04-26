import React from 'react';


export type TypeButtonProps ={
  name:string
}

export function Button(props:TypeButtonProps) {


  return (
      <button>{props.name}</button>
  )
};



