import { createText } from "@shopify/restyle";
import { TextStyle } from "react-native";
import { Theme } from "../../theme/theme";

const SRText = createText<Theme>();

type SRTextProps = React.ComponentProps<typeof SRText>

interface TextProps extends SRTextProps {
  preset?: TextVariants
  bold?: boolean
}

export function Text({ children, style, bold, preset = 'BodyM', ...sRTextProps }: TextProps) {

  const fontFamily = getFontFamily(preset, bold);

  return <SRText color='black' style={[$fontSizes[preset], { fontFamily }, style]} {...sRTextProps}>{children}</SRText>
}
function getFontFamily(preset: TextVariants, bold?: boolean) {
  if (preset === "TitleG" || preset === "TitleM" || preset === "TitleS"|| preset === "TitleXS") {
    return $fontFamily.bold;
  }
  if (bold) {
    return $fontFamily.bold;
  }
  return $fontFamily.regular;
}
type TextVariants =
  | "TitleG"
  | "TitleM"
  | "TitleS"
  | "TitleXS"
  | "BodyM"
  | "BodyS"
  | "BodyXS";

export const $fontSizes: Record<TextVariants, TextStyle> = {
  TitleG: { fontSize: 32, lineHeight: 32 * 1.3 },
  TitleM: { fontSize: 24, lineHeight: 24 * 1.3 },
  TitleS: { fontSize: 18, lineHeight: 18 * 1.3 },
  TitleXS: { fontSize: 16, lineHeight: 16 * 1.3 },
  BodyM: { fontSize: 16, lineHeight: 16 * 1.3 },
  BodyS: { fontSize: 14, lineHeight: 14 * 1.3 },
  BodyXS: { fontSize: 12, lineHeight: 12 * 1.3 },
};

export const $fontFamily = {
  regular: "NunitoSans_400Regular",
  bold: "NunitoSans_700Bold",
};
