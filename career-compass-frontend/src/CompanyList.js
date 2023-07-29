import React, { useState } from 'react';

const CompanyList = ({ handleLogout, toggleScreen }) => {

const companiesData = [
  {
    id: 1,
    name: '企業A',
    industry: '製造業',
    myPageUrl: 'https://example.com/mypageA',
    loginId: 'companyAuser',
    password: 'password123',
    memo: '企業Aに関するメモです。',
    selectionFlow: '1次面接 → 書類選考 → 最終面接',
  },
  {
    id: 2,
    name: '企業B',
    industry: '情報技術',
    myPageUrl: 'https://example.com/mypageB',
    loginId: 'companyBuser',
    password: 'password456',
    memo: '企業Bに関するメモです。',
    selectionFlow: '書類選考 → 1次面接 → 2次面接',
  },
  {
    id: 3,
    name: '企業C',
    industry: 'サービス業',
    myPageUrl: 'https://example.com/mypageC',
    loginId: 'companyCuser',
    password: 'password789',
    memo: '企業Cに関するメモです。',
    selectionFlow: '1次面接 → SPI試験 → 最終面接',
  },
];

  const handleAddCompany = () => {
    // 追加ボタンの処理を実装
    console.log('新しい企業を追加します');
  };

  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
  };

  const handleCloseModal = () => {
    setSelectedCompany(null);
  };

  const handleSaveChanges = () => {
    // 保存ボタンの処理を実装
    console.log('変更内容を保存します');
  };

  const handleDeleteCompany = () => {
    // 削除ボタンの処理を実装
    console.log('企業情報を削除します');
  };

  const handleScheduleButtonClick = () => {
    toggleScreen('scheduleList');
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
        <button onClick={() => toggleScreen()}>企業リスト</button>
        <button onClick={handleScheduleButtonClick}>スケジュール</button>
        <button onClick={handleLogout}>ログアウト</button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
        <button onClick={handleAddCompany}>追加</button>
      </div>
      <h1>企業一覧</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {companiesData.map((company) => (
          <li key={company.id}>
            <button
              style={{
                width: '100%',
                textAlign: 'left',
                border: 'none',
                background: 'gray',
                color: 'white',
                padding: '8px',
                borderRadius: '4px',
                margin: '4px 0',
              }}
              onClick={() => handleCompanyClick(company)}
            >
              {company.name} - {company.industry}
            </button>
          </li>
        ))}
      </ul>
      {selectedCompany && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h2>企業情報を編集</h2>
            <p>名前：</p>
            <input
              type="text"
              value={selectedCompany.name}
              onChange={(e) => setSelectedCompany({ ...selectedCompany, name: e.target.value })}
            />
            <p>業界：</p>
            <input
              type="text"
              value={selectedCompany.industry}
              onChange={(e) => setSelectedCompany({ ...selectedCompany, industry: e.target.value })}
            />
            <p>マイページURL：</p>
            <input
              type="text"
              value={selectedCompany.myPageUrl}
              onChange={(e) => setSelectedCompany({ ...selectedCompany, myPageUrl: e.target.value })}
            />
            <p>ID：</p>
            <input
              type="text"
              value={selectedCompany.loginId}
              onChange={(e) => setSelectedCompany({ ...selectedCompany, loginId: e.target.value })}
            />
            <p>パスワード：</p>
            <input
              type="text"
              value={selectedCompany.password}
              onChange={(e) => setSelectedCompany({ ...selectedCompany, password: e.target.value })}
            />
            <p>メモ：</p>
            <textarea
              value={selectedCompany.memo}
              onChange={(e) => setSelectedCompany({ ...selectedCompany, memo: e.target.value })}
            />
            <p>選考フロー：</p>
            <input
              type="text"
              value={selectedCompany.selectionFlow}
              onChange={(e) =>
                setSelectedCompany({ ...selectedCompany, selectionFlow: e.target.value })
              }
            />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button onClick={handleSaveChanges}>保存</button>
              <button onClick={handleDeleteCompany}>削除</button>
              <button onClick={handleCloseModal}>閉じる</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const modalContentStyle = {
  background: 'white',
  padding: '20px',
  borderRadius: '4px',
  width: '600px', // 任意の横幅に設定する例
  maxHeight: '80vh', // モーダルの高さが画面の80%まで拡大する例
  overflowY: 'auto', // コンテンツがはみ出た場合に縦方向にスクロールできるようにする
};


export default CompanyList;