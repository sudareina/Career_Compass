import logo from './logo.svg';
import './App.css';
import Login from './Login'; // ログイン画面のコンポーネントをインポート

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My App</h1>
        <Login /> {/* ログイン画面のコンポーネントを表示 */}
      </header>
    </div>
  );
}

export default App;
