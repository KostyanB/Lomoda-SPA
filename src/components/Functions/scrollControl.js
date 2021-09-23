// отключение скролла при открытии модального окна корзины

// scroll control
export const disableScroll = () => {
    const widthScroll = window.innerWidth - document.body.offsetWidth;

    document.body.dbScrollY = window.scrollY;

    document.body.style.cssText = `
        position: fixed;
        top: ${-window.scrollY}px;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        padding-right: ${widthScroll}px;
    `;
}
export const enableScroll = () => {
    document.body.style.cssText = '';
    window.scroll({
        top: document.body.dbScrollY
    });
}

export const checkScroll = () => {
    const widthScroll = window.innerWidth - document.body.offsetWidth;
    const header = document.getElementsByTagName('header')[0];
    // if (header) {
    //     header.style.cssText = `
    //     padding-right: ${widthScroll}px;
    //     margin-right: ${-widthScroll}px;
    //     `;
    // }
}