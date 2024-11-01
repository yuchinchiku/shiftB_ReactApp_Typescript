import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import styles from './cssModule/blogList.module.css'
import { PostType } from './types/PostType';

type PostsResponse = {
  posts: PostType[]
};

const BlogList: React.FC = () => {

  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  // APIでpostsを取得する処理をuseEffectで実行します。
  useEffect(() => {
    const fetcher = async () => {
      try {
        const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts")
        const data = await res.json() as PostsResponse;
        setPosts(data.posts)
      } finally {
        setLoading(false);
      }
    }

    fetcher()
  }, []);

  if(loading) {
    return <p>Loading...</p>;
  }

  return(
    <ul className={styles.card}>
      {posts.map((elem) => {
        const date = new Date(elem.createdAt);
        const dateText = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

        return (
          <li className={styles.card__item} key={elem.id}>
            <Link className={styles.card__link} to={`/posts/${elem.id}/`}>
              <div className={styles.card__head}>
                <p className={styles.card__date}>{dateText}</p>
                <ul className={styles.category}>
                  {elem.categories.map(category =>
                    <li className={styles.category__item} key={category}>{category}</li>
                  )}
                </ul>
              </div>
              <div className={styles.card__body}>
                  <p className={styles.card__title}>{elem.title}</p>
                  <p className={styles.card__desc} dangerouslySetInnerHTML={{ __html: elem.content }} />
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};


export default BlogList;