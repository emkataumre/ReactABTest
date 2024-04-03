import { FC, ReactNode } from "react";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <p>Website</p>
      {children}
    </div>
  );
};