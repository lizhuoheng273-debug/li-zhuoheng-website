export function transitionTo(url: string): void {
  const viewTransition = document.startViewTransition;
  if (typeof viewTransition === 'function') {
    viewTransition(() => {
      window.history.pushState({}, '', url);
      window.dispatchEvent(new PopStateEvent('popstate'));
    });
    return;
  }
  window.history.pushState({}, '', url);
  window.dispatchEvent(new PopStateEvent('popstate'));
}
