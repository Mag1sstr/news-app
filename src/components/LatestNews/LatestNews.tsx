import { getLatestNews } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import { NewsApiResponse } from "../../interfaces";
import { useGetLatesNewsQuery } from "../../store/services/newsApi";
import BannersList from "../BannersList/BannersList";
import styles from "./styles.module.css";

export default function LatestNews() {
  // const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);
  const { data, isLoading } = useGetLatesNewsQuery(null);

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
}
