/** @type {import('tailwindcss').Config} */
export default
{
  theme: {
    extend: {
      colors: {
        "custom-primary": "#171723",
        "custom-secondary": "#F24B78"
      }
    }
  },
  plugins: [
    require("flowbite/plugin")
  ],
  content: [
    "./node_modules/flowbite/**/*.{js,ts}",
    "components/**/*.{vue,js,ts}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "utils/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
    "Error.{js,ts,vue}",
    "error.{js,ts,vue}",
    "app.config.{js,ts}"
  ]
};