import React from "react";
import { useForm } from "react-hook-form";

export default function Form(){
  const {
    register, //input 입력 요소에 할당, value 변경 감지
    handleSubmit, // form submit 시 호출.
    formState:{ errors }, //폼 상태 객체
    watch, //특정 폼 필드의 값을 실시간으로 사용할 수 있도록 해준다.
  } = useForm();

  //handleSubmit(funcA, funcB):
  //funcA : 필수, 유효한 경우 실행
  const onValid = (data) =>{
    console.log("onValid : ",data);
  }

//funcB : 선택, 유효하지 않은 경우 실행 
  const onInvalid = (err) =>{
    console.log("onInvalid : ",err);
  }

  console.log('watch',watch('username'));

  return(
    <div>
      <h1>react hook Form 라이브러리 데모</h1>
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <input type="text" placeholder="username"
        //name="username" 이 기능을 아래와 같이 쓸 수 있게 된다!
        {...register("username",{required:"이름을 입력해주세요!", minLength:{
          message:'이름은 최소 두글자 이상 작성해주세요!',
          value : 2,
        }})}
        />
        {/* 에러메시지 */}
        {errors.username?.message}
        <br />
        <input type="email" placeholder="email (gmail)" {
          ...register('email', {
            required:'이메일을 입력해주세요',
            validate:{
              //useGmail => 이름은 알아서 지정.
              useGmail: (value)=>//true면 includes, false면 "gmail로만~~"
                value.includes('@gmail.com') || "gmail로만 가입 가능합니다.",
            },
          })} 
        />
        {/* 에러메시지 */}
        {errors.email?.message}
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}