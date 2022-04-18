import {useState, useEffect} from 'react';

export default function useTextInput(data) {

  const [value, setValue] = useState(data.value);
  const [validation, setValidation] = useState({
    valid: data.valid,
    errorMessage: data.errorMessages[0]
  });

  const handleOnChange = e => setValue(e.target.value);

  useEffect(() => {
    if (value.length === 0) {
      setValidation({
        valid: false,
        errorMessage: data.errorMessages[0]
      })

    } else {
      if (!new RegExp(data.pattern).test(value)) {
        setValidation({
          valid: false,
          errorMessage: data.errorMessages[1]
        })
      } else {
        setValidation({
          valid: true,
          errorMessages: ''
        })
      }
    }

  }, [value])
  const input = (
    <>
      <label>
        {data.label}
        <span className="alert" data-testid={data.messageTestId}>{validation.errorMessage}</span>
      </label>
      <input
            type="text"
            data-testid={data.inputTestId}
            value={value}
            onChange={handleOnChange}
            maxLength={data.maxLength}/>
    </>
  )

  return [input, value, validation.valid]
}
