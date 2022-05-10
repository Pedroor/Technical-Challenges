import styled from "styled-components/native";
import normalize from "react-native-normalize";
import { StyledProps } from "styled-components";

type BoxProps = StyledProps<{
  flex?: number;
  position?: string;
  direction?: string;
  justify?: string;
  alignSelf?: string;
  alignItems?: string;
  height?: number | string;
  bgColor?: string;
  bottom?: number | string;
  horizontalPadding?: number;
  verticalPadding?: number;
  paddingT?: number;
  paddingR?: number;
  paddingB?: number;
  paddingL?: number;
  margin?: number;
  marginT?: number;
  marginR?: number;
  marginB?: number;
  marginL?: number;
  radius?: number;
  width?: number | string;
  borderTopWidth?: number;
  borderWidth?: number;
  borderTopColor?: string;
  borderColor?: string;
  borderRightWidth?: number;
  borderRightColor?: string;
  borderBottomWidth?: number;
  borderBottomColor?: string;
  borderLeftWidth?: number;
  borderLeftColor?: string;
  elevation?: string;
}>;

export const Box = styled.View`
  display: flex;
  position: ${(props: BoxProps) =>
    props.position ? `${props.position}` : "relative"};
  flex-direction: ${(props: BoxProps) => (props.direction ? "column" : "row")};
  justify-content: ${(props: BoxProps) =>
    props.justify ? props.justify : "flex-start"};
  align-items: ${(props: BoxProps) =>
    props.alignItems ? props.alignItems : "flex-start"};
  height: ${(props: BoxProps) => (props.height ? props.height : "auto")};
  background: ${(props: BoxProps) =>
    props.bgColor ? props.bgColor : "transparent"};
  bottom: ${(props: BoxProps) => (props.bottom ? props.bottom : "auto")};
  padding-left: ${(props: BoxProps) =>
    props.paddingL
      ? `${normalize(props.paddingL)}`
      : props.horizontalPadding
      ? `${normalize(props.horizontalPadding)}`
      : "0"};
  padding-right: ${(props: BoxProps) =>
    props.paddingR
      ? `${normalize(props.paddingR)}`
      : props.horizontalPadding
      ? `${normalize(props.horizontalPadding)}`
      : "0"};
  padding-top: ${(props: BoxProps) =>
    props.paddingT
      ? `${normalize(props.verticalPadding || 0)}`
      : props.verticalPadding
      ? `${normalize(props.horizontalPadding || 0)}`
      : "0"};
  padding-bottom: ${(props: BoxProps) =>
    props.paddingB
      ? `${normalize(props.paddingB, "height")}`
      : props.verticalPadding
      ? `${normalize(props.verticalPadding)}`
      : "0"};
  margin-top: ${(props: BoxProps) =>
    props.marginT
      ? `${normalize(props.marginT, "height")}`
      : props.margin
      ? `${normalize(props.margin)}`
      : "0"};
  margin-right: ${(props: BoxProps) =>
    props.marginR
      ? `${normalize(props.marginR, "height")}`
      : props.margin
      ? `${normalize(props.margin)}`
      : "0"};
  margin-bottom: ${(props: BoxProps) =>
    props.marginB
      ? `${normalize(props.marginB, "height")}`
      : props.margin
      ? `${normalize(props.margin)}`
      : "0"};
  margin-left: ${(props: BoxProps) =>
    props.marginL
      ? `${normalize(props.marginL, "height")}`
      : props.margin
      ? `${normalize(props.margin)}`
      : "0"};
  border-radius: ${(props: BoxProps) =>
    props.radius ? `${normalize(props.radius)}` : "0"};
  width: ${(props: BoxProps) => (props.width ? `${props.width}` : "auto")};
  border-top-width: ${(props: BoxProps) =>
    props.borderTopWidth
      ? props.borderWidth
      : props.borderWidth
      ? props.borderWidth
      : "0"};
  border-top-color: ${(props: BoxProps) =>
    props.borderTopColor
      ? props.borderTopColor
      : props.borderColor
      ? props.borderColor
      : "transparent"};
  border-right-width: ${(props: BoxProps) =>
    props.borderRightWidth
      ? props.borderRightWidth
      : props.borderWidth
      ? props.borderWidth
      : "0"};
  border-right-color: ${(props: BoxProps) =>
    props.borderRightColor
      ? props.borderRightColor
      : props.borderColor
      ? props.borderColor
      : "transparent"};
  border-bottom-width: ${(props: BoxProps) =>
    props.borderBottomWidth
      ? props.borderBottomWidth
      : props.borderWidth
      ? props.borderWidth
      : "0"};
  border-bottom-color: ${(props: BoxProps) =>
    props.borderBottomColor
      ? props.borderBottomColor
      : props.borderColor
      ? props.borderColor
      : "transparent"};
  border-left-width: ${(props: BoxProps) =>
    props.borderLeftWidth
      ? props.borderLeftWidth
      : props.borderWidth
      ? props.borderWidth
      : "0"};
  border-left-color: ${(props: BoxProps) =>
    props.borderLeftColor
      ? props.borderLeftColor
      : props.borderColor
      ? props.borderColor
      : "transparent"};
  bottom: ${(props: BoxProps) =>
    props.bottom ? `${normalize(Number(props.bottom), "height")}` : "0"};
  elevation: ${(props: BoxProps) =>
    props.elevation ? `${normalize(Number(props.elevation), "height")}` : "0"};
  box-shadow: 1px 2px 3px ${(props) => props.theme.colors.black};
  shadow-opacity: 0.25;
`;
