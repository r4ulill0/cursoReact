import {useState, useEffect} from 'react';

export default function useNumberInput(data) {

  const [value, setValue] = useState(data.value);

  const handleOnChange = e => setValue(e.target.value);

  const input = (
    <>
      
      <label>{data.label}</label>
      <input type="number"
             value={data.value}
             onChange={handleOnChange}/>
    </>
  )

  return [input, Number(value)];
}
