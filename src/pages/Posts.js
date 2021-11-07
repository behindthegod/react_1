import React, {useEffect, useMemo, useRef, useState} from "react";
import {usePosts} from "../hooks/usePosts/usePosts";
import {useFetching} from "../hooks/useFetching/useFetching";
import {getPagesCount} from "../utils/pages";
import PostList from "../component/PostList";
import Pagination from "../component/UI/pagination/Pagination";
import PostFilter from "../component/PostFilter";
import MyModal from "../component/UI/MyModal/MyModal";
import PostForm from "../component/PostForm";
import MyButton from "../component/UI/button/MyButton";
import Loader from "../component/UI/Loader/Loader";
import PostService from "../API/PostService";
import {useObserver} from "../hooks/useObserver/useObserver";
import MySelect from "../component/UI/select/MySelect";


const Posts = () => {
        const [posts, setPosts] = useState([]);
        const [filter, setFilter] = useState({sort: '', query: ''});
        const [modal, setModal] = useState(false);
        const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
        const [totalPages, setTotalPages] = useState(0);
        const [limit, setLimit] = useState(10);
        const [page, setPage] = useState(1);
        const lastElement = useRef()



        const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
                const response = await PostService.getAll(limit, page);
                setPosts([...posts, ...response.data]);
                const totalCount = response.headers['x-total-count'];
                setTotalPages(getPagesCount(totalCount, limit));
        })

        useObserver(lastElement, page < totalPages, isPostsLoading, () => setPage(page + 1))



        useEffect(() => {
                fetchPosts(limit, page);
        }, [page, limit])

        const createPost = (newPost) => {
                setPosts([...posts, newPost]);
                setModal(false);
        }

        const changePage = (page) => {
                setPage(page);
        }

        const removePost = (post) => {
                setPosts(posts.filter(p => p.id !== post.id));
        }

        return (
            <div className="App">
                    <button onClick={fetchPosts}>Get posts</button>
                    <MyButton onClick={() => setModal(true)}>
                            Создать пользователя
                    </MyButton>
                    <MyModal visible={modal} setVisible={setModal}>
                            <PostForm create={createPost}/>
                    </MyModal>
                    <hr style={{margin: "15px 0"}}/>
                    <PostFilter
                        filter={filter}
                        setFilter={setFilter}
                    />
                    <MySelect
                        value={limit}
                        onChange={value => setLimit(value)}
                        defaultValue='количество элементов на странице'
                        option={[
                            {value: 5, name: '5'},
                            {value: 10, name: '10'},
                            {value: 25, name: '25'},
                            {value: -1, name: 'Показать все'}
                        ]}
                    />
                    {postError &&
                    <h1>Произошла ошибка ${postError}</h1>
                    }
                {isPostsLoading &&
                <div style={{display: 'flex', justifyContent: 'center'}}><Loader/></div>
                }
                <PostList remove={removePost} posts={sortedAndSearchPosts} title="Список постов 1"/>
                <div ref={lastElement} style={{height: 20, background: 'red'}}></div>
                <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
            </div>
        );
}


export default Posts;