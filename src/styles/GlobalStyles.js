import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`:root {
  /* Indigo */

--color-black-900: #000000;
--color-black-800: #151a1a;
--color-black-700: #242d2d;
--color-black-600: #2c3636;
--color-black-500: #3b4949;
--color-black-400: #607979;


--color-white-900: #ffffff;
--color-red-900: #FF0000;


  /* social */
  --color-facebook-900: #3b5998;
  --color-twitter-900:#1DA1F2;
  --color-youtube-900:#CD201F;
  --color-tiktok-900:#00f2ea;

  --color-facebook-500: #4060a4;
  --color-twitter-500:#8ED0F8;
  --color-youtube-500:#EB7978;
  --color-tiktok-500:#7bfffb;

--color-grey-900:#333;
--color-grey-800:#565656;
--color-grey-700:#6f6f6f;
--color-grey-500:#a2a2a2;
--color-grey-400:#cdcdcd;
--color-grey-300:#e6e6e6;
--color-grey-200:#efefef;
--color-grey-100:#f7f7f7;







  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  /* For dark mode */
  --image-grayscale: 0;
  --image-opacity: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;


  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  /* filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity)); */
}
`;
export default GlobalStyles;
