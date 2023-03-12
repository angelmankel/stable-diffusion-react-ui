import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setParameters  } from '../features/parameters/parametersSlice'

export function Parameters() {
  const count = useSelector((state) => state.parameters.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button 
          onClick={() => dispatch(setParameters())}
        >
          setPrompt
        </button>
        <span>{count}</span>
      </div>
    </div>
  )
}