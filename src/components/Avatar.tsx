import React from 'react';

export interface IAvatarProps {
  eye_color: string;
  gender: string;
  hair_color: string;
  skin_color: string;

}

const Avatar = (props: IAvatarProps) => (
  <div className={`avatar avatar--${props.gender}`}>
    <div className="avatar__face" style={{ backgroundColor: props.skin_color }} />
    <div className="avatar__eye avatar__eye--left" style={{ backgroundColor: props.eye_color }} />
    <div className="avatar__eye avatar__eye--right" style={{ backgroundColor: props.eye_color }} />
    <div className="avatar__hair" style={{ backgroundColor: props.hair_color }} />
  </div>
);

export default Avatar;
