import { NavLink } from "react-router-dom";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import { INews } from "../../interfaces";

import Image from "../Image/Image";
import styles from "./styles.module.css";

interface Props {
  item: INews;
  index: number;
}
function NewsBanner({ item, index }: Props) {
  return (
    <NavLink to={`/news/${index}`}>
      <div className={styles.banner}>
        <Image image={item?.image} />
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </NavLink>
  );
}

export default NewsBanner;
