import './App.scss';
import Css from './page/Css';
import Home from './page/Home';
import Image from "./page/Image";


//page //page 폴더 만들기 - Css.js 등이 들어있음
//Css.js

function App() {
  return (
    <div className="wrap">
      <header>
        <nav style={{border: '1px solid green'}}> {/* 객체 속성 값 */}
          <a href="#">css 활용</a>
          <a href="#">router(페이지 이동)</a>
          <a href="#">img 활용</a>
        </nav>
      </header>
      <main>  
        <Home />
      </main>
      <footer>  </footer>
    </div>
  );
}

export default App;

