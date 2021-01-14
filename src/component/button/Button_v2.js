import React from 'react'

function Button_v2({title, type, ...props}) {
  console.log('isi props', props);
  return (
    <button onClick={props.click}>
      {title}
    </button>
  )
}

export default Button_v2
