import React, { useState } from 'react';
import './cc.css';

const Register = ({ toggleScreen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      return; // パスワードが一致していない場合は処理を中断
    }

    // 登録処理を実装する場所
    console.log('新規登録 - メールアドレス:', email);
    console.log('新規登録 - パスワード:', password);

    // 登録処理後にログイン画面に戻る
    toggleScreen();
  };

  return (
    <div>
      <div className="header">
        <div className="logo">CareerCompass</div>
      </div>
      <div className="login-container">
        <h2>新規登録</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>メールアドレス</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label>パスワード</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
          <div>
            <label>パスワード確認</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
          {passwordMatchError && <p style={{ color: 'red' }}>パスワードが一致していません</p>}
          <button type="submit">登録</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
