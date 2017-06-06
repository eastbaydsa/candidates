function tabletPortraitBreakpoint(rules){
  return { '@media(min-width: 768px)': rules }
};

function tabletLandscapeBreakpoint(rules){
  return { '@media(min-width: 1024px)': rules }
};

function desktopBreakpoint(rules){
  return { '@media(min-width: 1200px)': rules }
};

export { tabletPortraitBreakpoint, tabletLandscapeBreakpoint, desktopBreakpoint };