import logo from './logo.svg';
import './App.css';
import {useState} from 'react';      
import Modal from './page/Modal';

function App() {

  let post = '강남 우동 맛집';
  let [글제목,글제목수정] = useState(['남자 코트 추천','강남 우동 맛집','파이썬독학']);  // useState 만드는것 -> 앞에는 읽기전용, 뒤에는 업데이트전용 -> 변수변경시 -> 뒤의변수('변경할내용')
                                                      // 재랜더링이 필요할시(동적) useState사용 정적인 변수는 일반적인 방식으로 사용
  let [글제목2,글제목수정2] = useState([{
      title:'남자 코트 추천',
      date:'2월 1일 발행',
  },{
    title:'강남 우동 맛집',
    date:'2월 2일 발행',
},{
  title:'파이썬독학',
  date:'2월 3일 발행',
}])
  let num= [1,2];
//  let a = num[0];
//  let b = num[1];
  let [a,b] = num;   //Distruct 기법

  let [따봉,따봉변경] = useState(0);
  let [상세보기,상세보기수정] = useState({
    title:'',
    date:''
  })

  const goodUp = ()=>{  //글제목[0] 옆 따봉 클릭시 실행되는 이벤트
    // 따봉 = 따봉 + 1      -> 불가능 
    따봉변경(따봉+1);
  }

  return (
    <div className="App">
      <div className="black-nav">  {/*class는 jsx에서 calssName으로 선언*/}
        <h4 id={post}  style={{color:'red', fontSize:'16px' }} >블로그임</h4>  {/* style입력시 {}안에 오브젝트형식으로 작성 '-'기호는 불가 -> 카멜형식 */}
      </div>
      <button onClick={()=>{
        let copy = [...글제목];
        copy.sort();
        글제목수정(copy);
      }}>가나다순정렬</button>


      <div className="list">
        <h4>{글제목[0]} <span onClick={goodUp}>👍</span > {따봉} </h4>  {/* 변수의 데이터를 jsx에 입력시 {}안에 사용   ->  데이터 바인딩  */}
                                    {/* onClick={함수}로 이벤트 작성  */}
        <button onClick={()=>{
          //글제목수정(['여자 코트 추천','강남 우동 맛집','파이썬독학']);
          let copy =[...글제목];     //배열같은 경우 완전복사(...)을 이용하여 복사 후 변경 -> 일반복사 시 ram의 위치가 일치하여 인식 x
          copy[0] = '여자 코트 추천'
          글제목수정(copy);
        }}>제목 변경</button>
        <p>2월 1일 발행</p>
      </div>
      <div className="list">
      <h4>{글제목[1]}</h4> 
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4> 
        <p>2월 17일 발행</p>
      </div>
------------------------------------------------------------------------------------------------------
      {글제목2.map(({title,date})=>{
        return <>
        <div className="list">
        <h4><a onClick={()=>{
          let copy = {title:title,date:date};
          console.log(copy);
          상세보기수정({title:copy.title,date:copy.date});
          console.log({상세보기});
        }}>{title}</a></h4> 
        <p>{date}</p>
      </div>
      </>
      })}


      <Modal  상세={상세보기} />
    </div>
  );
}

export default App;
