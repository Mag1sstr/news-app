import { getNews } from "../../api/apiNews";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
import { NewsApiResponse, ParamsType } from "../../interfaces";
import NewsFilters from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";

import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import styles from "./styles.module.css";

export default function NewsByFilters() {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debounceKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch<NewsApiResponse, ParamsType>(getNews, {
    ...filters,
    keywords: debounceKeywords,
  });

  function handleNextPage() {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter("page_number", filters.page_number + 1);
    }
  }
  function handlePreviousPage() {
    if (filters.page_number > 1) {
      changeFilter("page_number", filters.page_number - 1);
    }
  }
  function handlePageClick(pageNumber: number) {
    changeFilter("page_number", pageNumber);
  }

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilter={changeFilter} />

      <PaginationWrapper
        top
        bottom
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      >
        <NewsList isLoading={isLoading} news={data?.news} />
      </PaginationWrapper>
    </section>
  );
}
