import React, { ChangeEvent } from 'react';

interface IRadioButton {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface IRadioButtonGroup {
  className: string;
  buttons: IRadioButton[];
}

const RadioButton = (props: IRadioButton) => (
  <label htmlFor={props.id}>
    <input
      id={props.id}
      name={props.name}
      type="radio"
      value={props.value}
      checked={props.checked}
      onChange={props.onChange}
    />
    {props.value}
  </label>
);

const RadioButtonGroup = (props: IRadioButtonGroup) => (
  <div className={props.className}>
    {props.buttons.map((button) => (
      <RadioButton
        id={button.id}
        name={button.name}
        value={button.value}
        checked={button.checked}
        onChange={button.onChange}
      />
    ))}
  </div>
);

export default RadioButtonGroup;
