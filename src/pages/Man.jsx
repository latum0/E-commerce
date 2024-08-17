import React from 'react'
import { useParams } from 'react-router-dom'


export default function Man() {
 const param = useParams();
  return (
    <div>Man {param.id}</div>
  )
}
