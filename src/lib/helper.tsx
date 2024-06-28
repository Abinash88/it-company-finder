export const formatNumber = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ): false | void => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
  

  export const fileTypes = ['jpg', 'png', 'pdf', 'gif', 'jpeg']