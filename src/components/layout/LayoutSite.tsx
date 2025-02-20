import { FC, ReactNode } from "react";
import scss from "./LayoutSite.module.scss";
interface LayoutProps {
  children: ReactNode;
}
const LayoutSite: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={scss.LayoutSite}>
      <main>{children}</main>
    </div>
  );
};

export default LayoutSite;
