const initialState ={
  money:0
}

const INCOME = 'bank/INCOME';
const OUTCOME = 'bank/OUTCOME';

export const income = (value) =>({type:'bank/INCOME', input:value});
export const outcome = (value) =>({type:'bank/OUTCOME', input:value});

const bankReducer = (state=initialState, action) => {
  switch(action.type){
    case INCOME:
      return {money : state.money + action.input}
    case OUTCOME:
      return {money : state.money - action.input}
    default:
      return state
  }
}

export default bankReducer;