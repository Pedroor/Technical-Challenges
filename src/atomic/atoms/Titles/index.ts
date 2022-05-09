import styled from "styled-components/native";
import normalize from "react-native-normalize";
import { StyledProps } from "styled-components";

type TitleProps = StyledProps<{
  align?: string;
  width?: string;
  fontSize?: number;
  lineHeight?: number;
  color?: string;
  pt?: number;
  pb?: number;
  ml?: number;
  mr?: number;
  mb?: number;
  mt?: number;
  transform?: string;
  fontWeight?: string;
}>;
export const Title = styled.Text<TitleProps>`
  text-align: ${(props) => (props.align ? props.align : "left")};
  width: ${(props) => (props.width ? `${props.width}%` : "auto")};
  font-size: ${(props) =>
    props.fontSize ? normalize(props.fontSize) : normalize(20)};
  color: ${(props) => (props.color ? props.color : props.theme.colors.black)};
  padding-top: ${(props) => (props.pt ? `${normalize(props.pt)}` : "0px")};
  padding-bottom: ${(props) => (props.pb ? `${normalize(props.pb)}` : "0px")};
  margin-left: ${(props) => (props.ml ? normalize(props.ml) : "0px")};
  margin-right: ${(props) => (props.mr ? normalize(props.mr) : "0px")};
  margin-top: ${(props) => (props.mt ? normalize(props.mt) : "0px")};
  margin-bottom: ${(props) => (props.mb ? normalize(props.mb) : "0px")};
  flex-shrink: 1;
  text-transform: ${(props) => (props.transform ? props.transform : "none")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
`;
