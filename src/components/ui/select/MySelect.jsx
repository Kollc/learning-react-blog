import React from 'react'

const MySelect = ({defaultOptions, options, value, onChange}) => {

  return (
    <div>
      <select value={value} onChange={evt => onChange(evt.target.value)}>
        <option value="" disabled={true}>{defaultOptions}</option>
        {options.map(option =>
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          )}
      </select>
    </div>
  )
}

export default MySelect;
