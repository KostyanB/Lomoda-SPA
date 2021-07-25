import {
    createGlobalStyle
} from 'styled-components';

export const GlobalStyle = createGlobalStyle `
    @font-face {
        font-family: 'CoFo Sans';
        src: local("CoFo Sans Bold"), local("CoFoSans-Bold"), url("fonts/CoFoSans-Bold.woff2") format("woff2"), url("fonts/CoFoSans-Bold.woff") format("woff");
        font-weight: bold;
        font-display: swap;
    }

    @font-face {
        font-family: 'CoFo Sans';
        src: local("CoFo Sans Black"), local("CoFoSans-Black"), url("fonts/CoFoSans-Black.woff2") format("woff2"), url("fonts/CoFoSans-Black.woff") format("woff");
        font-weight: 900;
        font-display: swap;
    }

    @font-face {
        font-family: 'CoFo Sans';
        src: local("CoFo Sans"), local("CoFoSans-Regular"), url("fonts/CoFoSans-Regular.woff2") format("woff2"), url("fonts/CoFoSans-Regular.woff") format("woff");
        font-weight: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'CoFo Sans';
        src: local("CoFo Sans Medium"), local("CoFoSans-Medium"), url("fonts/CoFoSans-Medium.woff2") format("woff2"), url("fonts/CoFoSans-Medium.woff") format("woff");
        font-weight: 500;
        font-display: swap;
    }

    :root {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        -webkit-box-sizing: inherit;
            box-sizing: inherit;
    }

    body {
        min-width: 320px;
        min-height: 100vh;
        margin: 0;
        background-color: #fff;
        font-family: "CoFo Sans", Arial, sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: black;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        font: inherit;
        margin: 0;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul,
    ol {
        list-style: none;
    }

    h1,
    h2,
    h3,
    h4,
    p,
    ul,
    ol,
    figure,
    figcaption {
        padding: 0;
        margin: 0;
    }

    .visually-hidden {
        position: absolute !important;
        clip: rect(1px 1px 1px 1px);
    /* IE6, IE7 */
        clip: rect(1px, 1px, 1px, 1px);
        padding: 0 !important;
        border: 0 !important;
        height: 1px !important;
        width: 1px !important;
        overflow: hidden;
    }

    /* при работе с float */
    .clearfix::after {
        content: "";
        display: table;
        clear: both;
    }

    button {
        cursor: pointer;
    }

    .invalid {
    color: #f93c00;
    }
    ${'' /* footer */}

.footer__column-item {
  margin-bottom: 5px;
}

.container {
  max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

`;