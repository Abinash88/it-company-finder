export const formatNumber = (
  e: React.KeyboardEvent<HTMLInputElement>
): false | void => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

export const DefaultFileTypes = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

export const headerServices = (
  token: string | undefined
): { Authorization: string } | undefined => {
  if (token) {
    return {
      Authorization: `Bearer ${token}`,
    };
  }
  return undefined;
};

export const handleChangeToMB = (bytes: number) => {
  const result = bytes / (1024 * 1024);
  return Math.round(result * 100) / 100;
};
