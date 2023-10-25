import React from "react";

export const OutClickToggle = (
  RemovePasswordBox: React.RefObject<HTMLDivElement>,
  setpasswordBtn: React.RefObject<HTMLButtonElement>,
  closeModelBox: () => void,
) => {
  const ClosePasswordBox = (e: MouseEvent) => {
    const passwordBox = RemovePasswordBox?.current;
    const buttonBox = setpasswordBtn?.current;
    if (!passwordBox) return;
    const target = e.target as HTMLElement;
    if (!target) return;
    if (
      passwordBox &&
      !passwordBox?.contains(target) &&
      buttonBox &&
      !buttonBox.contains(target)
    ) {
      closeModelBox();
    }
  };

  if (typeof window === "undefined") return;
  document.addEventListener("click", ClosePasswordBox);
};
