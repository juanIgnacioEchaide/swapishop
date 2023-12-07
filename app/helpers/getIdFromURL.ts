export const getIdFromURL = (url: string): number | null => {
  const match = url.match(/\/(\d+)\/$/);
  if (match && match[1]) {
    return parseInt(match[1], 10);
  }
  return null;
};
