import React from 'react';

interface INavButton {
  text: string;
  onClick: () => void;
}

const NavButton = (props: INavButton) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
);

export default NavButton;
