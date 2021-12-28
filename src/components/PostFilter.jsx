import React from 'react'
import MySelect from './ui/select/MySelect';
import MyInput from './ui/input/MyInput';

function PostFilter ({filter, setFilter}) {
  return (
    <div>
      <MyInput placeholder={'Search:'} value = {filter.query} onChange={evt => setFilter({...filter,query: evt.target.value})}/>
        <MySelect value={filter.sort} onChange={selectedSort => setFilter({...filter, sort: selectedSort})} defaultOptions={'Сортировка по:'} options={[
          {value: 'title', name: 'Sort by name'},
          {value: 'body', name: 'Sort by description'},
        ]}/>
    </div>
  )
}

export default PostFilter;
