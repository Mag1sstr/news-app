import { IPaginationProps } from "../../interfaces";
import Pagination from "../Pagination/Pagination";

interface Props {
  top?: boolean;
  bottom?: boolean;
  children: React.ReactNode;
}

export default function PaginationWrapper({
  top,
  bottom,
  children,
  ...paginationProps
}: Props & IPaginationProps) {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {bottom && <Pagination {...paginationProps} />}
    </>
  );
}
