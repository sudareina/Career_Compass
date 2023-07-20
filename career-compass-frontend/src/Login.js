// src/components/Login.js

import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // ログインAPIエンドポイントのURL
    const loginUrl = 'http://localhost:8000/api/login/';

    // ログインリクエストを送信
    axios.post(loginUrl, { email, password })
      .then((response) => {
        // ログイン成功時の処理（例: セッション管理など）
        console.log('ログイン成功:', response.data);
      })
      .catch((error) => {
        // ログイン失敗時の処理（例: エラーメッセージ表示）
        setError('ログインに失敗しました。');
      });
  };

  return (
    <div>
      <h2>ログイン</h2>
      {error && <div>{error}</div>}
      <input type="text" placeholder="メールアドレス" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="パスワード" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>ログイン</button>
    </div>
  );
};

export default Login;
