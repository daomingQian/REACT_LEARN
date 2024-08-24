
import './App.css';
import BasicInfo from './components/BasicInfo/BasicInfo';
import PoInfo from './components/PoInfo/PoInfo'
import LogList from './components/LogList/LogList'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BasicInfo></BasicInfo>
        <PoInfo></PoInfo>
        <LogList></LogList>
      </header>
    </div>
  );
}
