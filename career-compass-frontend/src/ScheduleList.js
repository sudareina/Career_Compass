import React, { useState } from 'react';
import './cc.css';

const ScheduleList = ({ handleLogout, toggleScreen }) => {
  // スケジュールデータ
  const [schedulesData, setSchedulesData] = useState([
    {
      id: 1,
      schedule: 'ミーティング',
      startTime: '2023-07-30 09:00',
      endTime: '2023-07-30 10:30',
      memo: '社内会議です。',
    },
    {
      id: 2,
      schedule: '打ち合わせ',
      startTime: '2023-08-02 14:00',
      endTime: '2023-08-02 15:30',
      memo: 'クライアントとの商談です。',
    },
    // 他のスケジュールデータも追加する
  ]);

  // ESのデータ
  const [esData, setEsData] = useState([
    {
      id: 1,
      deadline: '2023-07-31 18:00',
      content: 'ESの設問と中身',
      memo: 'ESのメモです。',
    },
    {
      id: 2,
      deadline: '2023-08-03 17:00',
      content: '別のESの設問と中身',
      memo: '別のESのメモです。',
    },
    // 他のESのデータも追加する
  ]);

  // Webテストのデータ
  const [webtestData, setWebtestData] = useState([
    {
      id: 1,
      deadline: '2023-08-01 12:00',
      url: 'https://example.com/webtest1',
      type: 'タイプA',
      memo: 'Webテストのメモです。',
    },
    {
      id: 2,
      deadline: '2023-08-04 16:00',
      url: 'https://example.com/webtest2',
      type: 'タイプB',
      memo: '別のWebテストのメモです。',
    },
    // 他のWebテストのデータも追加する
  ])

  const [activeTab, setActiveTab] = useState('schedule');
  const [selectedItem, setSelectedItem] = useState(null);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);

  const handleAddSchedule = () => {
    setSelectedItem({
      id: null,
      schedule: '',
      startTime: '',
      endTime: '',
      memo: '',
    });
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleSaveChanges = () => {
    if (selectedItem) {
      setIsSaveModalOpen(true);
    }
  };

  const handleDeleteItem = () => {
    if (selectedItem) {
      setIsDeleteModalOpen(true);
    }
  };

  // 確認用のモーダルを閉じる
  const handleCloseModal = () => {
    setSelectedItem(null);
    setIsDeleteModalOpen(false);
    setIsSaveModalOpen(false);
  };

  // 保存の確認後の処理
  const handleConfirmSave = () => {
    if (selectedItem) {
      // スケジュールの場合
      if (activeTab === 'schedule') {
        const updatedSchedules = schedulesData.map((item) =>
          item.id === selectedItem.id ? { ...selectedItem } : item
        );
        // 保存したデータを更新
        setSchedulesData(updatedSchedules);
      }

      // ESの場合
      if (activeTab === 'es') {
        const updatedESData = esData.map((item) =>
          item.id === selectedItem.id ? { ...selectedItem } : item
        );
        // 保存したデータを更新
        setEsData(updatedESData);
      }

      // Webテストの場合
      if (activeTab === 'webtest') {
        const updatedWebTestData = webtestData.map((item) =>
          item.id === selectedItem.id ? { ...selectedItem } : item
        );
        // 保存したデータを更新
        setWebtestData(updatedWebTestData);
      }
    }
    handleCloseModal();
  };

  // 削除の確認後の処理
  const handleConfirmDelete = () => {
    if (selectedItem) {
      // スケジュールの場合
      if (activeTab === 'schedule') {
        const updatedSchedules = schedulesData.filter((item) => item.id !== selectedItem.id);
        // 保存したデータを更新
        setSchedulesData(updatedSchedules);
      }

      // ESの場合
      if (activeTab === 'es') {
        const updatedESData = esData.filter((item) => item.id !== selectedItem.id);
        // 保存したデータを更新
        setEsData(updatedESData);
      }

      // Webテストの場合
      if (activeTab === 'webtest') {
        const updatedWebTestData = webtestData.filter((item) => item.id !== selectedItem.id);
        // 保存したデータを更新
        setWebtestData(updatedWebTestData);
      }
    }
    handleCloseModal();
  };

  return (
    <div>
      <div className="header">
        <div className="logo">CareerCompass</div>
        <div>
          <button onClick={() => toggleScreen()}>企業リスト</button>
          <button onClick={() => setActiveTab('schedule')}>スケジュール</button>
          <button onClick={handleLogout}>ログアウト</button>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
        <button onClick={handleAddSchedule}>追加</button>
      </div>
      <h1>スケジュール一覧</h1>

      {/* 新しいスケジュールボタン */}
      <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '10px' }}>
        <button onClick={() => setActiveTab('schedule')}>スケジュール</button>
        <button onClick={() => setActiveTab('es')}>ES</button>
        <button onClick={() => setActiveTab('webtest')}>Webテスト</button>
      </div>

      {/* スケジュールの内容を表示する部分 */}
      {activeTab === 'schedule' && (
        <div style={{ border: '2px solid aqua', padding: '10px', marginBottom: '10px' }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {schedulesData.map((item) => (
              <li key={item.id}>
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
                  onClick={() => handleItemClick(item)}
                >
                  {item.schedule} - {item.startTime} ~ {item.endTime}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === 'es' && (
        <div style={{ border: '2px solid aqua', padding: '10px', marginBottom: '10px' }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {esData.map((item) => (
              <li key={item.id}>
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
                  onClick={() => handleItemClick(item)}
                >
                  {item.content} - {item.deadline}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === 'webtest' && (
        <div style={{ border: '2px solid aqua', padding: '10px', marginBottom: '10px' }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {webtestData.map((item) => (
              <li key={item.id}>
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
                  onClick={() => handleItemClick(item)}
                >
                  {item.url} - {item.deadline}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedItem && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            {activeTab === 'schedule' && (
              <>
                <h2>{selectedItem.id ? 'スケジュール詳細' : '新しいスケジュールを追加'}</h2>
                <p>予定：</p>
                <input
                  type="text"
                  value={selectedItem.schedule}
                  onChange={(e) => setSelectedItem({ ...selectedItem, schedule: e.target.value })}
                />
                <p>開始日時：</p>
                <input
                  type="text"
                  value={selectedItem.startTime}
                  onChange={(e) => setSelectedItem({ ...selectedItem, startTime: e.target.value })}
                />
                <p>終了日時：</p>
                <input
                  type="text"
                  value={selectedItem.endTime}
                  onChange={(e) => setSelectedItem({ ...selectedItem, endTime: e.target.value })}
                />
                <p>メモ：</p>
                <textarea
                  value={selectedItem.memo}
                  onChange={(e) => setSelectedItem({ ...selectedItem, memo: e.target.value })}
                />
              </>
            )}

            {activeTab === 'es' && (
              <>
                <h2>{selectedItem.id ? 'ES詳細' : '新しいESを追加'}</h2>
                {/* ESの詳細入力フォームを追加 */}
                <p>期限日時：</p>
                <input
                  type="text"
                  value={selectedItem.deadline}
                  onChange={(e) => setSelectedItem({ ...selectedItem, deadline: e.target.value })}
                />
                <p>ESの内容：</p>
                <input
                  type="text"
                  value={selectedItem.content}
                  onChange={(e) => setSelectedItem({ ...selectedItem, content: e.target.value })}
                />
                <p>メモ：</p>
                <textarea
                  value={selectedItem.memo}
                  onChange={(e) => setSelectedItem({ ...selectedItem, memo: e.target.value })}
                />
              </>
            )}

            {activeTab === 'webtest' && (
              <>
                <h2>{selectedItem.id ? 'Webテスト詳細' : '新しいWebテストを追加'}</h2>
                {/* Webテストの詳細入力フォームを追加 */}
                <p>期限日時：</p>
                <input
                  type="text"
                  value={selectedItem.deadline}
                  onChange={(e) => setSelectedItem({ ...selectedItem, deadline: e.target.value })}
                />
                <p>URL：</p>
                <input
                  type="text"
                  value={selectedItem.url}
                  onChange={(e) => setSelectedItem({ ...selectedItem, url: e.target.value })}
                />
                <p>種類：</p>
                <input
                  type="text"
                  value={selectedItem.type}
                  onChange={(e) => setSelectedItem({ ...selectedItem, type: e.target.value })}
                />
                <p>メモ：</p>
                <textarea
                  value={selectedItem.memo}
                  onChange={(e) => setSelectedItem({ ...selectedItem, memo: e.target.value })}
                />
              </>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button onClick={handleSaveChanges}>保存</button>
              <button onClick={handleDeleteItem}>削除</button>
              <button onClick={handleCloseModal}>閉じる</button>
            </div>
          </div>
        </div>
      )}

      {/* 保存の確認用モーダル */}
      {isSaveModalOpen && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h2>保存の確認</h2>
            <p>変更内容を保存しますか？</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button onClick={handleConfirmSave}>はい</button>
              <button onClick={() => setIsSaveModalOpen(false)}>いいえ</button>
            </div>
          </div>
        </div>
      )}

      {/* 削除の確認用モーダル */}
      {isDeleteModalOpen && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h2>削除の確認</h2>
            <p>この項目を削除しますか？</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button onClick={handleConfirmDelete}>はい</button>
              <button onClick={() => setIsDeleteModalOpen(false)}>いいえ</button>
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

export default ScheduleList;
