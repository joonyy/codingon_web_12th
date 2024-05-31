import PropTypes from 'prop-types';

//const {name} = props; 구조분해 할당을 이런 식으로도 사용 가능하다.
export default function FunctionComponent( {name, children} ) {
  //js
  console.log(name)
  return(
    // /*react(jsx) 문법 */
    <div>
      <h1>Hi {name}!</h1>
      <h2>{children}</h2>
      <div>여기는 FunctionComponent</div>
    </div>
  )
}

FunctionComponent.defaultProps = {
  name : "준영"
}

//defaultProps는 추후 사라질 예정. 아래와 같이 쓰길 권장한다.
// export default function FunctionComponent( {name="준영"} ) {
//   //js
//   console.log(name)
//   return(
//     /*react(jsx) 문법 */
//     <div>
//       <h1>Hi {name}!</h1>
//       <div>여기는 FunctionComponent</div>
//     </div>
//   )
// }

//propTypes는 유연한 javascript의 특성을 해결함.
//의도적으로 특정 타입을 강제할 수 있다.
FunctionComponent.propTypes = {
  name : PropTypes.string
}