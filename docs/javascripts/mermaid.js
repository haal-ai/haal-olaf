function renderMermaid() {
  if (typeof mermaid === 'undefined') {
    return;
  }

  mermaid.initialize({ startOnLoad: false });
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
