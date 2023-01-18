import {Text} from 'react-native';
import {styles} from './Heading.styles';
import {Padding} from '@src/components/ui/Padding';

interface IHeading {
  text: string;
  isCenter?: boolean;
}

export const Heading = ({text, isCenter = false}: IHeading) => {
  return (
    <Text style={[styles.text, isCenter && styles.textCenter]}>{text}</Text>
  );
};
