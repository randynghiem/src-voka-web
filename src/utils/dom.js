/**
 * Calculate the distance to bottom of current window view
 */
export const distanceToBottom = () => {
  const docEl = document.documentElement;
  const bodyEl = document.body;
  const viewHeight = docEl.clientHeight;
  const currentScroll = window.pageYOffset;
  const scrollHeight = Math.max(
    bodyEl.scrollHeight, docEl.scrollHeight,
    bodyEl.offsetHeight, docEl.offsetHeight,
    bodyEl.clientHeight, docEl.clientHeight
  );
  return scrollHeight - currentScroll - viewHeight;
};