import { getCategories } from "../../api/apiNews";
import { TOTAL_PAGES } from "../../constants/constants";
import { useFetch } from "../../helpers/hooks/useFetch";
import Categories from "../Categories/Categories";
import NewsList from "../NewsList/NewsList";
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";
import styles from "./styles.module.css";

export default function NewsByFilters({
  filters,
  changeFilter,
  isLoading,
  news,
}) {
  const { data: dataCategories } = useFetch(getCategories);

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
  function handlePageClick(pageNumber) {
    changeFilter("page_number", pageNumber);
  }

  return (
    <section className={styles.section}>
      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) => changeFilter("category", category)}
        />
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />

      {/* <NewsBanner
        isLoading={isLoading}
        item={data && data.news && data.news[0]}
      /> */}

      {/* {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton type={"banner"} count={1} />
      )} */}

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      />

      <NewsList isLoading={isLoading} news={news} />

      {/* {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton type={"item"} count={10} />
      )} */}

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      />
    </section>
  );
}
