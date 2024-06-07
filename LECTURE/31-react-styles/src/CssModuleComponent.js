import React from 'react'
import styles from './styles/cssModule.module.css';

// - CSS Module
// - 클래스명 중복 방지
// - css 파일명이 조금 다름. : .module.css
// - 리액트 컴포넌트 파일에서 해당 css 파일을 불러올 때 : css 파일에 선언한 클래스 이름들이 모두 고유해진다.
// 고유한 css 클래스명이 만들어지는 과정에 사용되는 값은?
//  -파일 경로, 파일명, 클래스명, 해쉬값 등이 사용되어 중복을 방지한다.

function CssModuleComponent() {
  console.log(styles); //객체의 형태.
  return (
    <div className={styles.container}>
      {/* 추후 변수로 관리해야 할 수도 있기 때문에 join으로 활용하면 좋음. */}
      <div className={[styles.box, styles.red].join(' ')}></div>
      <div className={[styles.box, styles.orange].join(' ')}></div>
      <div className={`${styles.box} ${styles.yellow}`}></div>
      
    </div>
  )
}

export default CssModuleComponent;