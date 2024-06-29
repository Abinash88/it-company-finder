export const formatNumber = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ): false | void => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
  

  export const DefaultFileTypes =[
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
  ];