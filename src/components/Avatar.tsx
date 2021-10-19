import React from 'react';

export interface IAvatarProps {
  eyeColour: string;
  gender: string;
  hairColour: string;
  skinColour: string;

}

const Avatar = ({
  eyeColour, gender, hairColour, skinColour,
}: IAvatarProps) => (
  <div>
    <div className="avatar__face" style={{ backgroundColor: skinColour }} />
    <div className="avatar__eye--left" style={{ backgroundColor: eyeColour }} />
    <div className="avatar__eye--right" style={{ backgroundColor: eyeColour }} />
    <div className="avatar__hair" style={{ backgroundColor: hairColour }} />
    <div className={`avatar__torso--${gender}`} />
  </div>
);

export default Avatar;
