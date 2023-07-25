import React, { useState } from 'react';

const Register = ({ toggleScreen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 登録処理を実装する場所
    console.log('新規登録 - メールアドレス:', email);
    console.log('新規登録 - パスワード:', password);
    // 登録処理後にログイン画面に戻る
    toggleScreen();
  };

  return (
    <div>
      <h2>新規登録画面</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>パスワード:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">登録</button>
      </form>
    </div>
  );
};

export default Register;
