import React, { useState } from 'react';

const Login = ({ toggleScreen, handleLogin }) => {
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
    // ログイン処理を実装する場所
    console.log('メールアドレス:', email);
    console.log('パスワード:', password);
    handleLogin();
  };

  return (
    <div>
      <h2>ログイン画面</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>パスワード:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">ログイン</button>
        <button onClick={() => toggleScreen()}>新規登録</button>
      </form>
    </div>
  );
};

export default Login;
