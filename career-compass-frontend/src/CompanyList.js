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
              background: 'gray', // 背景色を灰色に設定
              color: 'white', // 文字色を白色に設定
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
            <h2>{selectedCompany.name}</h2>
            <p>業界：{selectedCompany.industry}</p>
            <p>マイページURL: {selectedCompany.myPageUrl}</p>
            <p>ID: {selectedCompany.loginId}</p>
            <p>パスワード: {selectedCompany.password}</p>
            <p>メモ: {selectedCompany.memo}</p>
            <p>選考フロー: {selectedCompany.selectionFlow}</p>
            <button onClick={handleCloseModal}>閉じる</button>
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
};


export default CompanyList;