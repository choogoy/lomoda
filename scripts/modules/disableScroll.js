const disableScroll = () => {
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
};

export default disableScroll;