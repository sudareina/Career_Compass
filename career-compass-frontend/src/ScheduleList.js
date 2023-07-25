import React, { useState } from 'react';

const ScheduleList = ({ handleLogout, toggleScreen }) => {
  const [activeTab, setActiveTab] = useState('schedule');

  const handleAddSchedule = () => {
    // 追加ボタンの処理を実装
    console.log('新しいスケジュールを追加します');
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
        <button onClick={() => toggleScreen()}>企業リスト</button>
        <button onClick={() => setActiveTab('schedule')}>スケジュール</button>
        <button onClick={() => setActiveTab('es')}>ES</button>
        <button onClick={() => setActiveTab('webtest')}>Webテスト</button>
        <button onClick={handleLogout}>ログアウト</button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
        <button onClick={handleAddSchedule}>追加</button>
      </div>
      <h1>スケジュール一覧</h1>
      {/* スケジュールの内容を表示する部分 */}
      {activeTab === 'schedule' && (
        <div>
          <p>スケジュールの内容が表示される部分</p>
        </div>
      )}

      {/* ESの内容を表示する部分 */}
      {activeTab === 'es' && (
        <div>
          <p>ESの内容が表示される部分</p>
        </div>
      )}

      {/* Webテストの内容を表示する部分 */}
      {activeTab === 'webtest' && (
        <div>
          <p>Webテストの内容が表示される部分</p>
        </div>
      )}
    </div>
  );
};

export default ScheduleList;
