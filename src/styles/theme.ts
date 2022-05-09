export default {
  colors: {
    black: "#030311",
    purple200: "#d1d6f6",
    purple400: "#a8b0f4",
    purple600: "#6368a6",
    yellow: "#ffc222",
    gray800: "#3d3748",
    gray400: "#abb0c4",
    brown: "#947a7f",
    blue800: "#000080",
    blue600: "#1e1782",
    white: "#ffffff",
  },

  fontFamily: {
    regular: "Montserrat_Regular",
    semiBold: "Montserrat-SemiBold",
    bold: "Montserrat-Bold",
  },

  textVariants: {
    bigTitle: {
      fontSize: "20px",
      fontFamily: "Montserrat-Bold",
    },
    title: {
      fontSize: "16px",
      fontFamily: "Montserrat-Bold",
      lineHeight: "22px",
    },

    body: {
      fontSize: "12px",
      fontFamily: "Montserrat-SemiBold",
      lineHeight: "20px",
    },
  },
} as const;
