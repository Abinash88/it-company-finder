import React from "react";

export const OutClickToggle = (
  RemovePasswordBox: React.RefObject<HTMLDivElement>,
  closeModelBox: () => void
) => {
  if (typeof window !== "undefined") {
    const passwordBtn: HTMLElement | null =
      document.getElementById("setpasswordBtn");

    const ClosePasswordBox = (e: MouseEvent) => {
      const passwordBox = RemovePasswordBox?.current;
      const buttonBox = passwordBtn;
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
  }
};
