import React, {MouseEvent, useState} from 'react';



export type TypeButtonProps ={
  name:string
  startValue:any
  setStartValue:(value:string)=> void
  maxValue: any
  setMaxValue: (value:string)=> void
  inc: number
  setInc: (value:number) =>void
  disabled: boolean
  setErrorSetButton: (value:boolean)=> void
  errorSetButton: boolean
}

export function Button(props:TypeButtonProps) {

function OnclickHandler(e:MouseEvent<HTMLButtonElement>){
  if(e.currentTarget.name === 'Set'){
    props.setInc(Number(props.startValue))
    props.setErrorSetButton(true)


  }
  if(e.currentTarget.name === 'Inc' && props.errorSetButton ){
      props.setInc(Number(props.inc)+1)

  }
  if(e.currentTarget.name === 'Reset'){
    props.setInc(Number(props.startValue))
  }
}
  return (
      <button disabled={props.disabled} name={props.name}  onClick={OnclickHandler}>{props.name}</button>
  )
}

// props.name === "Set" ? statusButtonSet: props.name === "Inc"?(props.inc>=+props.maxValue? true: false): props.name === 'Reset'?(props.inc<=0 ? true: false): true


