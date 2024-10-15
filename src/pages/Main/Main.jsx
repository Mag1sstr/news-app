import { useEffect } from "react";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import styles from "./styles.module.css";
import { getCategories, getNews } from "../../api/apiNews";
import { useState } from "react";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";

export default function Main() {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debounceKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch(getNews, {
    // page_number: currentPage,
    // page_size: PAGE_SIZE,
    // category: selectedCategory === "All" ? null : selectedCategory,
    ...filters,
    keywords: debounceKeywords,
  });

  const { data: dataCategories } = useFetch(getCategories);

  // async function fetchNews(currentPage) {
  //   try {
  //     setIsLoading(true);
  //     const response = await getNews({
  //       page_number: currentPage,
  //       page_size: PAGE_SIZE,
  //       category: selectedCategory === "All" ? null : selectedCategory,
  //       keywords: debounceKeywords,
  //     });
  //     setNews(response.news);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // async function fetchCategories() {
  //   try {
  //     const response = await getCategories();
  //     setCategories(["All", ...response.categories]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchCategories();
  // }, []);

  // useEffect(() => {
  //   fetchNews(currentPage);
  // }, [currentPage, selectedCategory, debounceKeywords]);

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
    <main className={styles.main}>
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

      <NewsBanner
        isLoading={isLoading}
        item={data && data.news && data.news[0]}
      />

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

      <NewsList isLoading={isLoading} news={data?.news} />

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
    </main>
  );
}
