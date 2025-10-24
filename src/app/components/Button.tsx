"use client"
export default function Button({className, onclick, label}:any) {
  return (
    <div>
        <button className={className} onClick={onclick} >{label}</button>
    </div>
  )
}
