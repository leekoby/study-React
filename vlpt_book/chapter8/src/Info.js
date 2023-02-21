import React, { useState, useEffect } from 'react'

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    // console.log('렌더링이 완료되었습니다!');
    // console.log({
    //   name,
    //   nickname
    // });
    console.log('effect');
    console.log(name);
    return () => {
      console.log('unmount');
      console.log(name);
    }
  }, [name]);


  const onChangeName = e => {
    setName(e.target.value)
  }

  const onChangeNickname = e => {
    setNickname(e.target.value)
  }

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <b> 이름 : </b> {name}
      </div>
      <div>
        <b> 닉네임 : </b> {nickname}
      </div>
    </div>
  )
}
export default Info