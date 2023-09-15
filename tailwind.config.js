module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      md: { max: "1050px" },
      sm: { max: "550px" }
    },
    extend: {
      colors: {
        gray: {
          100: "#f2f2f2",
          400: "#bdbdbd",
          500: "#a6a6a6",
          600: "#6c757d",
          900: "#011627",
          "600_cc": "#6c757dcc",
          "600_59": "#6c757d59",
          "900_01": "#132a13",
          "100_02": "#f7f7f7",
          "100_01": "#f5f4f6",
          "600_3f": "#6c757d3f",
        },
        red: {
          800: "#c82625",
          A400_7f: "#ed213a7f",
          "700_e5": "#ed1c24e5",
          "800_b5": "#c82625b5",
          "800_75": "#c8262575",
          A400: "#ed213a",
          "800_59": "#c8262559",
          A400_19: "#ed213a19",
          "800_dd": "#c82625dd",
        },
        white: {
          A700_90: "#ffffff90",
          A700_59: "#ffffff59",
          A700_19: "#ffffff19",
          A700_00: "#ffffff00",
          A700: "#ffffff",
        },
        black: { 900: "#000814", "900_90": "#00000090", "900_01": "#000000" },
        blue_gray: {
          100: "#d9d9d9",
          "100_7f": "#d9d9d97f",
          "100_99": "#d9d9d999",
          "100_59": "#d9d9d959",
          "100_e5": "#d9d9d9e5",
          "100_a5": "#d9d9d9a5",
        },
        teal: { 700: "#138564" },
        purple: { 400: "#9d4edd" },
        amber: { 900: "#f86f03" },
        blue: { 700: "#0575e6" },
        orange: { 600: "#ff8500" },
        indigo: { 500: "#3f37c9" },

      },
      fontFamily: { inter: "Inter", archivo: "Archivo" },
      backgroundImage: {
        gradient: "linear-gradient(137deg ,#c82625dd,#ed213a)",
        gradient1: "linear-gradient(123deg ,#6c757d3f,#6c757d3f)",
        gradient2: "linear-gradient(123deg ,#c82625,#c82625b5)",
        gradient_gray: "linear-gradient(123deg, #888888, #888888b5)",
        gradient3: "linear-gradient(270deg ,#ed213a7f,#ed213a7f)",
        gradient4: "linear-gradient(180deg ,#ffffff90,#ffffff90)",
        // gradient4: "linear-gradient(180deg, transparent 50%, white 50%)",

      },
      boxShadow: { bs: "0px -96px  240px 48px #ed213a19" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   mode: "jit",
//   content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
//   darkMode: "class",
//   theme: {
//     screens: { md: { min: "551px", max: "1050px" }, sm: { min: "200px", max: "550px" } },
//     extend: {
//       colors: {
//         gray: {
//           100: "#f2f2f2",
//           400: "#bdbdbd",
//           500: "#a6a6a6",
//           600: "#6c757d",
//           900: "#011627",
//           "600_cc": "#757dcc6c",
//           "600_59": "#757d596c",
//           "900_01": "#132a13",
//           "100_02": "#f7f7f7",
//           "100_01": "#f5f4f6",
//           "600_3f": "#757d3f6c",
//         },
//         red: {
//           800: "#c82625",
//           A400_7f: "#213a7fed",
//           "700_e5": "#1c24e5ed",
//           "800_b5": "#2625b5c8",
//           "800_75": "#262575c8",
//           A400: "#ed213a",
//           "800_59": "#262559c8",
//           A400_19: "#213a19ed",
//           "800_dd": "#2625ddc8",
//         },
//         white: {
//           A700_90: "#ffff90ff",
//           A700_59: "#ffff59ff",
//           A700_19: "#ffff19ff",
//           A700_00: "#ffff00ff",
//           A700: "#ffffff",
//         },
//         black: { 900: "#000814", "900_90": "#00009000", "900_01": "#000000" },
//         blue_gray: {
//           100: "#d9d9d9",
//           "100_7f": "#d9d97fd9",
//           "100_99": "#d9d999d9",
//           "100_59": "#d9d959d9",
//           "100_e5": "#d9d9e5d9",
//           "100_a5": "#d9d9a5d9",
//         },
//         teal: { 700: "#138564" },
//         purple: { 400: "#9d4edd" },
//         amber: { 900: "#f86f03" },
//         blue: { 700: "#0575e6" },
//         orange: { 600: "#ff8500" },
//         indigo: { 500: "#3f37c9" },
//       },
//       backgroundImage: {
//         gradient: "linear-gradient(270deg ,#213a7fed,#213a7fed)",
//         gradient1: "linear-gradient(137deg ,#2625ddc8,#ed213a)",
//         gradient2: "linear-gradient(134deg ,#ffff59ff,#ffff19ff)",
//       },
//       fontFamily: { inter: "Inter" },
//     },
//   },
// };
