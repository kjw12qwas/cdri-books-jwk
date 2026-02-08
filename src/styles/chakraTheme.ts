import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: "#4880EE" },
        red: { value: "#E84118" },
        gray: { value: "#DADADA" },
        lightGray: { value: "#F2F4F6" },
        text: {
          primary: { value: "#353C49" },
          secondary: { value: "#6D7582" },
          subtitle: { value: "#8D94A0" },
        },
      },
      fonts: {
        body: { value: "'Noto Sans KR', sans-serif" },
        heading: { value: "'Noto Sans KR', sans-serif" },
      },
      fontSizes: {
        title1: { value: "24px" },
        title2: { value: "22px" },
        title3: { value: "18px" },
        body1: { value: "20px" },
        caption: { value: "16px" },
        body2: { value: "14px" },
        small: { value: "10px" },
      },
      fontWeights: {
        bold: { value: 700 },
        medium: { value: 500 },
        normal: { value: 400 },
      },
      lineHeights: {
        title1: { value: "24px" },
        title2: { value: "24px" },
        title3: { value: "18px" },
        body1: { value: "20px" },
        caption: { value: "16px" },
        body2: { value: "14px" },
        small: { value: "10px" },
      },
    },
    textStyles: {
      title1: {
        value: {
          fontSize: "24px",
          fontWeight: 700,
          lineHeight: "24px",
        },
      },
      title2: {
        value: {
          fontSize: "22px",
          fontWeight: 700,
          lineHeight: "24px",
        },
      },
      title3: {
        value: {
          fontSize: "18px",
          fontWeight: 700,
          lineHeight: "18px",
        },
      },
      body1: {
        value: {
          fontSize: "20px",
          fontWeight: 500,
          lineHeight: "20px",
        },
      },
      caption: {
        value: {
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: "16px",
        },
      },
      body2: {
        value: {
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "14px",
        },
      },
      small: {
        value: {
          fontSize: "10px",
          fontWeight: 500,
          lineHeight: "10px",
        },
      },
    },
  },
  globalCss: {
    body: {
      margin: 0,
      bg: "white",
      color: "text.primary",
      fontFamily: "body",
    },
  },
});

export const system = createSystem(defaultConfig, config);
