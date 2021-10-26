import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <div>
                <MyInput
                    placehorder='Поиск...'
                    value={filter.query}
                    onChange={e=> setFilter({...filter, query: e.target.value})}
                />
            </div>
            <div>
                <MySelect
                    value={filter.sort}
                    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                    defaultValue='Сортировка по:'
                    option={[
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'},
                    ]}
                />
            </div>
        </div>
    );
};

export default PostFilter;