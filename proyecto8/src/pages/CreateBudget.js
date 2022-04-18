import React, {useState, useEffect} from 'react';
import useTextInput from '../hooks/useTextInput';
import useDateInput from '../hooks/useDateInput';
import useSelectInput from '../hooks/useSelectInput';
import useNumberInput from '../hooks/useNumberInput';
import formatCurrency from '../utils/formatCurrency';

export default function CreateBudget() {

  const inputsData = {
    customer: {
      value: '',
      label: 'cliente',
      maxLength: 100,
      valid: false,
      errorMessages: ['*', 'El cliente debe tener al menos 4 caracteres'],
      pattern: /^.{4,}$/,
    },
    cif: {
      value: '',
      label: 'CIF',
      maxLength: 9,
      valid: false,
      errorMessages: ['*', 'El cif debe comenzar por letra válida y tener 9 caracteres'],
      pattern: /([ABCDEFGHPQS])([0-9]){8}/i,
    },
    contact: {
      value: '',
      label: 'Contacto',
      maxLength: 100,
      valid: true,
      errorMessages: ['', ''],
      pattern: /./i
    },
    date: {
      value: new Date().toISOString().substring(0,10),
      label: 'Fecha presupuesto',
    },
    amount: {
      value: 0,
      label: 'Importe presupuestario',
    },
    tax: {
      value: 0.21,
      label: '% de VIA',
      options: [
        {value: 0, text: 'sin iva'},
        {value: 0.04, text: '4 %'},
        {value: 0.1, text: '10 %'},
        {value: 0.21, text: '21 %'},
      ],
    }
  };

  const [customerInput, customerValue, customerValid] = useTextInput(inputsData.customer);
  const [cifInput, cifValue, cifValid] = useTextInput(inputsData.cif);
  const [contactInput, contactValue] = useTextInput(inputsData.contact);
  const [dateInput, dateValue] = useDateInput(inputsData.date);
  const [amountInput, amountValue] = useNumberInput(inputsData.amount);
  const [taxInput, taxValue] = useSelectInput(inputsData.tax);

  const [calcFields, setCalcFields] = useState({
    taxAmount: 0,
    totalBudget: 0,
  });

  const [isValidForm, setIsValidForm] = useState(false);

  useEffect(() => {
    const taxAmount = amountValue * taxValue;
    const totalBudget = amountValue + taxAmount;
    setCalcFields({ taxAmount, amountValue });

  }, [amountValue, taxValue])
  
  useEffect(() => {
    setIsValidForm(customerValid && cifValid);

  }, [customerValid, cifValid])

  const handleOnSubmit = e => {
    e.preventDefault();
    console.log({
      customer: customerValue,
      cif: cifValue,
      date: dateValue,
      contact: contactValue,
      amountValue: amountValue,
      tax: taxValue

    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-100">
          <form onSubmit={handleOnSubmit}>
            <div className="row">
              <div className="col-100">
                {customerInput}
              </div>
            </div>
            <div className="row">
              <div className="col-100">
                {cifInput}
              </div>
            </div>
            <div className="row">
              <div className="col-100">
                {contactInput}
              </div>
            </div>
            <div className="row">
              <div className="col-50">
                {dateInput}
              </div>
            </div>
            <div className="row">
              <div className="col-50">
                {amountInput}
              </div>
            </div>
            <div className="row">
              <div className="col-50">
                {taxInput}
              </div>
            </div>
            <div className="row">
              <div className="col-50">
                <label>Importe de IVA</label>
                <input type="number"
                       readOnly
                       value={formatCurrency('EUR', calcFields.taxAmount)}/>
              </div>
            </div>
            <div className="row">
              <div className="col-50">
                <label>Importe total</label>
                <input type="number"
                       readOnly
                       value={formatCurrency('EUR', calcFields.totalBudget)}/>
              </div>
            </div>
            <div className="row end">
              <button type="submit" disabled={isValidForm}>
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
