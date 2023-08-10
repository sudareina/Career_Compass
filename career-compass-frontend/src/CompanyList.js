import React, { useState } from 'react';
import './cc.css';

const CompanyList = ({ handleLogout, toggleScreen }) => {

const [companiesData, setCompaniesData] = useState([
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
]);

  const handleAddCompany = () => {
    // 追加ボタンの処理を実装
    console.log('新しい企業を追加します');
  };

  const [selectedCompany, setSelectedCompany] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
  };

   // 企業を削除する
  const handleDeleteCompany = () => {
    if (selectedCompany) {
      setIsDeleteModalOpen(true);
    }
  };

  // 保存する
  const handleSaveChanges = () => {
    if (selectedCompany) {
      setIsSaveModalOpen(true);
    }
  };

  // 削除モーダルの確認後の処理
  const handleConfirmDelete = () => {
    if (selectedCompany) {
      // selectedCompanyのidと一致しない企業情報をフィルタリング
      const updatedCompanies = companiesData.filter((company) => company.id !== selectedCompany.id);
      // 保存したデータを更新
      setCompaniesData(updatedCompanies);
      handleCloseModal();
    }
    setIsDeleteModalOpen(false);
  };

  // 保存モーダルの確認後の処理
  const handleConfirmSave = () => {
    if (selectedCompany) {
      // selectedCompanyのidと一致する企業情報を探す
      const updatedCompanies = companiesData.map((company) =>
        company.id === selectedCompany.id ? selectedCompany : company
      );
      // 保存したデータを更新
      setCompaniesData(updatedCompanies);
      handleCloseModal();
    }
    setIsSaveModalOpen(false);
  };

  // モーダルを閉じる
  const handleCloseModal = () => {
    setSelectedCompany(null);
    setIsDeleteModalOpen(false);
    setIsSaveModalOpen(false);
  };

  const handleScheduleButtonClick = () => {
    toggleScreen('scheduleList');
  };

  return (
    <div>
      <div className="header">
        <div className="logo">CareerCompass</div>
        <div>
          <button onClick={() => toggleScreen()}>企業リスト</button>
          <button onClick={handleScheduleButtonClick}>スケジュール</button>
          <button onClick={handleLogout}>ログアウト</button>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
        <button onClick={handleAddCompany}>追加</button>
      </div>
      <h1>企業一覧</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {companiesData.map((company) => (
          <li key={company.id}>
            <button
              className="list-button"
              onClick={() => handleCompanyClick(company)}
            >
              {company.name} - {company.industry}
            </button>
          </li>
        ))}
      </ul>
      {selectedCompany && (
        <div className="edit-modal">
          <div className="edit-modal-content">
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
      {/* 削除の確認用モーダル */}
      {isDeleteModalOpen && (
        <div className="confirm-modal">
          <div className="confirm-modal-content">
            <h2>削除の確認</h2>
            <p>本当に削除しますか？</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button onClick={handleConfirmDelete}>はい</button>
              <button onClick={() => setIsDeleteModalOpen(false)}>いいえ</button>
            </div>
          </div>
        </div>
      )}

      {/* 保存の確認用モーダル */}
      {isSaveModalOpen && (
        <div className="confirm-modal">
          <div className="confirm-modal-content">
            <h2>保存の確認</h2>
            <p>変更内容を保存しますか？</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button onClick={handleConfirmSave}>はい</button>
              <button onClick={() => setIsSaveModalOpen(false)}>いいえ</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyList;