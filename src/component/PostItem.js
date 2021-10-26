import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useHistory} from 'react-router-dom';

const PostItem = (props) => {
    const router = useHistory();
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{props.post.id}.{props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                    <div className="post__btns">
                        <MyButton onClick={()=>props.remove(props.post)}>Удалить</MyButton>
                        <MyButton onClick={()=> router.push(`/posts/${props.post.id}`)}>Открыть</MyButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;