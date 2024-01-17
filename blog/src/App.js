import logo from './logo.svg';
import './App.css';
import {useState} from 'react';      
function App() {

  let post = '강남 우동 맛집';
  let [글제목,글제목수정] = useState(['남자 코트 추천','강남 우동 맛집','파이썬독학']);  // useState 만드는것 -> 앞에는 읽기전용, 뒤에는 업데이트전용 -> 변수변경시 -> 뒤의변수('변경할내용')
                                                      // 재랜더링이 필요할시(동적) useState사용 정적인 변수는 일반적인 방식으로 사용
    let num= [1,2];
//  let a = num[0];
//  let b = num[1];
    let [a,b] = num;   //Distruct 기법


  return (
    <div className="App">
      <div className="black-nav">  {/*class는 jsx에서 calssName으로 선언*/}
        <h4 id={post}  style={{color:'red', fontSize:'16px' }} >블로그임</h4>  {/* style입력시 {}안에 오브젝트형식으로 작성 '-'기호는 불가 -> 카멜형식 */}
      </div>
      <div className="list">
        <h4>{글제목[0]}</h4>  {/* 변수의 데이터를 jsx에 입력시 {}안에 사용   ->  데이터 바인딩  */}
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
      <h4>{글제목[1]}</h4> 
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4> 
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
