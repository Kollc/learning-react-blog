import React, { useEffect, useState, useRef } from 'react'
import '../styles/App.css';
import PostsList from '../components/PostList';
import PostFrom from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/ui/modal/MyModal';
import MyButton from '../components/ui/button/MyButton';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import MyLoader from '../components/ui/loader/MyLoader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/pages';
import MyPagination from '../components/ui/pagination/MyPagination';
import { usePages } from '../hooks/usePages';
import MySelect from '../components/ui/select/MySelect';
import { useObserver } from '../hooks/useObserver';

const Posts = () => {

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [visible, setVisible] = useState(false);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const lastElement = useRef();
  let pagesArray = usePages(totalPages);
  const sortedAndSearchPotst = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isLoadingPosts, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    // setPosts(response.data); Для пагинации
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisible(false);
  }

  const removePost = (remPost) => {
    setPosts(posts.filter(p => p.id !== remPost.id));
  }

  useObserver(isLoadingPosts, lastElement, totalPages > page, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts();
  }, [page, limit]);

  return (
    <div className="App">
        <MyButton onClick={() => setVisible(true)}>
            Create Post
        </MyButton>

        <MyModal visible={visible} setVisible={setVisible}>
          <PostFrom create={createPost}/>
        </MyModal>

        <PostFilter filter={filter} setFilter={setFilter}/>
        <MySelect value={limit} onChange={value => setLimit(value)} defaultOptions='Кол-во элементов на странице' options={[
            {value: 5, name:'5'},
            {value: 10, name:'10'},
            {value: 20, name:'20'},
            {value: -1, name:'All'}
        ]}/>

        {postError && <h1>Произошла ошибка {postError}</h1>}

        <PostsList remove={removePost} posts={sortedAndSearchPotst} title={'Список постов №1:'}/>
        <div style={{height: '20px'}} ref={lastElement}></div>

        {isLoadingPosts && <div style={{marginTop: '50px', display: 'flex', justifyContent: 'center'}}><MyLoader/></div>}

        <MyPagination pagesArray={pagesArray} page={page} setPage={setPage}/>
    </div>
  );
}

export default Posts;
