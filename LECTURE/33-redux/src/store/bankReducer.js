//목표 : 입금, 출금 두가지 행위 정의
const DEPOSIT = 'bank/DEPOSIT';
const WITHDRAW = 'bank/WITHDRAW';

export const deposit = () =>({type:DEPOSIT});
export const withdraw = () =>({type:WITHDRAW});

const initialState = 0;

const bankReducer = (state=initialState, action)=>{
  switch(action.type){
    case DEPOSIT :
      return state + action.payload // 입금
    case WITHDRAW :
      return state - action.payload // 출금
    default :
      return state;
  }
}

export default bankReducer;