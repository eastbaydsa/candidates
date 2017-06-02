function tabletPortraitBreakpoint(rules){
  return { '@media(min-width: 768px)': rules }
};

function tabletLandscapeBreakpoint(rules){
  return { '@media(min-width: 1024px)': rules }
};

export { tabletPortraitBreakpoint, tabletLandscapeBreakpoint };