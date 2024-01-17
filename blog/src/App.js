import logo from './logo.svg';
import './App.css';

function App() {

  let post = '강남 우동 맛집';

  return (
    <div className="App">
      <div className="black-nav">  {/*class는 jsx에서 calssName으로 선언*/}
        <h4 id={post}  style={{color:'red', fontSize:'16px' }} >블로그임</h4>  {/* style입력시 {}안에 오브젝트형식으로 작성 '-'기호는 불가 -> 카멜형식 */}
      </div>
      <h4>{post}</h4>  {/* 변수의 데이터를 jsx에 입력시 {}안에 사용   ->  데이터 바인딩  */}
    </div>
  );
}

export default App;
