export const getPageNumberFromString = (inputString: string | null) => {
  try {
    const parts = inputString?.split('page=');
    if (parts?.length === 2) {
      const pageNumber = parseInt(parts[1], 10);
      return isNaN(pageNumber) ? null : pageNumber;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};
