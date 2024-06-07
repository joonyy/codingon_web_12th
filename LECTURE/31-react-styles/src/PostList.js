import { useEffect, useState } from 'react';
import axios from 'axios';
import PostItem from './PostItem';
import './styles/PostList.scss';


export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 1번 방안 (then 사용)
    /*
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      console.log(res.data);
      setPosts(res.data.slice(0, 10));
      // (가독성 떨어짐) axios.get.then ((axios.get.then))
    });
    */

    // 2번 방안 (async-await)
    // const result = await axios.get(
    //   'https://jsonplaceholder.typicode.com/posts'
    // );
    // console.log(result);

    // 비동기 함수를 따로 만들어서 처리
    const getPosts = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data.slice(0, 10));
    };

    getPosts();
  }, []);
  return (
    <div>
      <header>Post List</header>
      {posts.length > 0 ? (
        posts.map((post) => {
          return (
            // <div key={post.id}>
            //   <div>
            //     <span>No. {post.id}</span>
            //     <span>- {post.title}</span>
            //   </div>
            //   <p>{post.body.slice(0, 120)}...</p>
            // </div>
            <PostItem className="PostItem" key={post.id} post={post} />
          );
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}