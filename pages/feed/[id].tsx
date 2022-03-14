import { GetServerSidePropsContext } from "next/types/index";
import styles from '../../styles/Feed.module.scss'
import { useRouter } from 'next/router';


export const Feed = ({ articles, pageNumber }:any) => {
  const router = useRouter();

  // console.log({ articles, pageNumber })

  return (
    <div className={styles.container}>
    {
      articles.articles.map((article:any)=>(
        <div className={styles.news_container} key={article.id}>
        <h4>{article.title}</h4>
        <p style={{fontWeight:"lighter"}}>{article.description}</p>
        <img src={article.urlToImage} alt=""/>
        </div>
      ))
    }
    <div className={styles.pagination}>
      <i><svg xmlns="http://www.w3.org/2000/svg" className={pageNumber<=1 ? styles.disable_page_nav:styles.enable_page_nav} onClick={()=>{
        if(pageNumber>1){
              router.push(`/feed/${pageNumber-1}`);
          }
        }} width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">  <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/></svg></i>
          {pageNumber}
      <i><svg xmlns="http://www.w3.org/2000/svg" className={pageNumber>=5 ? styles.disable_page_nav:styles.enable_page_nav} onClick={()=>{
        if(pageNumber<5){
              router.push(`/feed/${pageNumber+1}`);
          }
        }} width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">  <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/></svg></i>
  </div>
    </div>
)
}

export const getServerSideProps = async (pageContext:GetServerSidePropsContext) => {
    const pageNumber= pageContext.query?.id;

    if (!pageNumber || Number(pageNumber) < 1 || Number(pageNumber) > 5) {
        return {
            props: {
                articles: [],
                pageNumber: 1,
            },
        };
    }

    const apiResponse = await fetch(
        `https://newsapi.org/v2/everything?language=en&q=iran&pageSize=5&page=${pageNumber}&apiKey=${process.env.PUBLIC_NEWS_KEY}`
    );

    const articles = await apiResponse.json();

    return {
        props: {
            articles,
            pageNumber: (Number(pageNumber)),
        },
    };
};
export default Feed;
