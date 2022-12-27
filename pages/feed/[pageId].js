import { useRouter } from "next/router";
import classes from "../../styles/Feed.module.css";

function Feed({ pageNumber, articles }) {
  const router = useRouter();

  return (
    <div className="page-container">
      <div className={classes.main}>
        {articles.map((article, index) => (
          <div key={index} className={classes.post}>
            <h1 onClick={() => (window.location.href = article.url)}>
              {article.title}
            </h1>
            <p>{article.description}</p>
            {!!article.urlToImage && (
              <img src={article.urlToImage} alt="An Image" />
            )}
          </div>
        ))}
      </div>

      <div className={classes.paginator}>
        <div
          onClick={() => {
            if (pageNumber > 1) {
              router.push(`/feed/${pageNumber - 1}`);
            }
          }}
          className={pageNumber === 1 ? classes.disabled : classes.active}
        >
          Previous Page
        </div>
        <div>#{pageNumber}</div>
        <div
          onClick={() => {
            if (pageNumber < 5) {
              router.push(`/feed/${pageNumber + 1}`);
            }
          }}
          className={pageNumber === 5 ? classes.disabled : classes.active}
        >
          Next Page
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(pageContext) {
  const pageNumber = pageContext.query.pageId;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );

  const apiJson = await apiResponse.json();

  const { articles } = apiJson;

  return {
    props: {
      articles: articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
}

export default Feed;

