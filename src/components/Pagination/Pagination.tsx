import { formatDate } from "../../helpers/formatDate";
import { IPaginationProps } from "../../interfaces";
import styles from "./styles.module.css";

export default function Pagination({
  totalPages,
  currentPage,
  handleNextPage,
  handlePreviousPage,
  handlePageClick,
}: IPaginationProps) {
  return (
    <div className={styles.pagination}>
      <button onClick={handlePreviousPage} className={styles.arrow}>
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              className={styles.pageNumber}
              key={index}
              style={
                index + 1 == currentPage
                  ? {
                      background: "green",
                      borderRadius: "50%",
                      color: "#fff",
                      cursor: "default",
                    }
                  : null
              }
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button onClick={handleNextPage} className={styles.arrow}>
        {">"}
      </button>
    </div>
  );
}
