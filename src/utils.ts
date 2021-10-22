import { ICharacterProps } from './components/CharacterCard';

export function tidyCharacterProps(characters: ICharacterProps[]) {
  return characters.map((character) => {
    const letterRegex = /^([a-z]+)[^a-z]+.*$/i;

    // eslint-disable-next-line @typescript-eslint/naming-convention
    let { eye_color, hair_color, skin_color } = character;

    if (letterRegex.test(eye_color) && eye_color !== 'n/a') {
      // eslint-disable-next-line prefer-destructuring
      eye_color = eye_color.match(letterRegex)![1];
    }

    if (letterRegex.test(hair_color) && hair_color !== 'n/a') {
      // eslint-disable-next-line prefer-destructuring
      hair_color = hair_color.match(letterRegex)![1];
    }
    if (letterRegex.test(skin_color) && skin_color !== 'n/a') {
      // eslint-disable-next-line prefer-destructuring
      skin_color = skin_color.match(letterRegex)![1];
    }

    if (hair_color === 'blond') {
      hair_color = 'yellow';
    }

    if (skin_color === 'fair' || skin_color === 'light') {
      skin_color = 'lightgrey';
    }

    return {
      ...character, eye_color, hair_color, skin_color,
    };
  });
}
