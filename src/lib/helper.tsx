export const formatNumber = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ): false | void => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
  