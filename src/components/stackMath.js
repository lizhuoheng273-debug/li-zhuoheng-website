export function getNextStackIndex(currentIndex, direction, itemCount) {
  const candidate = currentIndex + direction
  return candidate < 0 || candidate >= itemCount ? null : candidate
}
