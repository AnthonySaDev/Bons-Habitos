import React from "react";
import { ArrowLeft } from "../../../assets/icons/ArrowLeft";
import { ArrowUpRight } from "../../../assets/icons/ArrowUpRight";
import { PencilSimpleLine } from "../../../assets/icons/PencilSimpleLine";
import { Plus } from "../../../assets/icons/Plus";
import { Trash } from "../../../assets/icons/Trash";
import { useAppTheme } from "../../hooks/useAppTheme";
import { ThemeColors } from "../../theme/theme";
import { Pressable } from "react-native";
import { Logo } from "../../../assets/icons/Logo";

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}
export function Icon({name, color = 'black', size, onPress}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];
  if(onPress){
    return(
      <Pressable hitSlop={10} onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    )
  }
  return <SVGIcon color={colors[color]} size={size} />;
}
const iconRegistry = {
  arrowLeft: ArrowLeft,
  arrowUpRight: ArrowUpRight,
  pencilSimpleLine: PencilSimpleLine,
  plus: Plus,
  trash: Trash,
  logo: Logo
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;
