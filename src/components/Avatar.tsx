import React from 'react';

export interface IAvatarProps {
  eye_color: string;
  gender: string;
  hair_color: string;
  skin_color: string;

}

const Avatar = (props: IAvatarProps) => (
  <div className="character-card__avatar avatar">
    <div className="avatar__face" style={{ backgroundColor: props.skin_color }} />
    <div className="avatar__eye--left" style={{ backgroundColor: props.eye_color }} />
    <div className="avatar__eye--right" style={{ backgroundColor: props.eye_color }} />
    <div className="avatar__hair" style={{ backgroundColor: props.hair_color }} />
    <div className={`avatar__torso--${props.gender}`} />
  </div>
);

export default Avatar;
