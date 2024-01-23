import { ThemeColors } from "../../theme/theme";
import { TouchableOpacityBoxProps } from "../Box/Box";

export type ButtonPreset = 'primary' | 'outline';

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
}
export const buttonPresets: Record<ButtonPreset, {
    default:ButtonUI;
    active: ButtonUI;
}> = {
  primary: {
   default: {
    container: {
        backgroundColor: 'gray2',
      },
      content: 'white',
   },
   active: {
    container: {
        backgroundColor: 'gray1',
      },
      content: 'white',
   }
  },
  outline: {
   default: {
    container: {
        borderWidth: 1,
        borderColor: 'gray1',
      },
      content: 'gray1',
   },
   active: {
    container: {
        borderWidth: 1,
        borderColor: 'gray1',
        backgroundColor: 'gray5',
      },
      content: 'gray1',
   }
  },
};