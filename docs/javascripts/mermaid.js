function renderMermaid() {
  if (typeof mermaid === 'undefined') {
    return;
  }

  const schemeAttr = document.body && document.body.getAttribute('data-md-color-scheme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = schemeAttr ? schemeAttr === 'slate' : prefersDark;

  const themeVariables = isDark
    ? {
        background: 'transparent',
        primaryColor: '#0d1117',
        primaryBorderColor: '#8b949e',
        primaryTextColor: '#f0f6fc',
        lineColor: '#8b949e',
        secondaryColor: '#161b22',
        tertiaryColor: '#21262d',
        noteBkgColor: '#161b22',
        noteTextColor: '#f0f6fc',
        noteBorderColor: '#8b949e',
      }
    : {
        background: 'transparent',
        primaryColor: '#ffffff',
        primaryBorderColor: '#57606a',
        primaryTextColor: '#24292f',
        lineColor: '#57606a',
        secondaryColor: '#f6f8fa',
        tertiaryColor: '#eaeef2',
        noteBkgColor: '#f6f8fa',
        noteTextColor: '#24292f',
        noteBorderColor: '#57606a',
      };

  mermaid.initialize({
    startOnLoad: false,
    theme: 'base',
    themeVariables,
  });
  mermaid.run({ querySelector: '.mermaid' });
}

document.addEventListener('DOMContentLoaded', () => {
  renderMermaid();
});

document.addEventListener('readystatechange', () => {
  if (document.readyState === 'complete') {
    renderMermaid();
  }
});

document.addEventListener('navigation:complete', () => {
  renderMermaid();
});
