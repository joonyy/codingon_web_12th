import React from 'react'
import { useForm } from 'react-hook-form';

function FormPR() {
  const {register, handleSubmit, formState : {errors}} = useForm();

  const onValid = (data) =>{
    console.log(data);
  }
  const onInvalid = (err) =>{
    console.error(err);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <input type="text" placeholder='이름' {...register("name",{required:"이름은 필수항목입니다.", minLength:{
          value:2,
          message:"이름은 두글자 이상!"
        }})}/>
        {errors.name?.message}
        <br />
        <input type="text" placeholder='나이' {...register("age", {required:"나이를 입력해주세요", min:{
          value:0,
          message:"0 이상의 숫자만 입력 가능합니다."
        }})}/>
        {errors.age?.message}
        <br />
        <button>제출</button>
      </form>
    </div>
  )
}

export default FormPR;