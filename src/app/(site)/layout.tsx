import { FC, ReactNode } from "react";
import scss from "./layout.module.scss";
import LayoutSite from "@/components/layout/LayoutSite";

interface Ilayout {
  children: ReactNode;
}

const layout: FC<Ilayout> = ({ children }) => {
  return <LayoutSite>{children}</LayoutSite>;
};

export default layout;
