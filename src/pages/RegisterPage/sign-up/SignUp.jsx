import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from '../../../components/form/Form'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from '../../../firebase'
import { useDispatch } from 'react-redux'
import { setUsers } from '../../../store/user/user.slice'
import { setUserId } from '../../../store/cart/cart.slice'

const SignUp = () => {
  const navigate = useNavigate();
  // 회원가입에러
  const [firebaseError, setFirebaseError] = useState("");

  const dispatch = useDispatch();

  const auth = getAuth(app)

  const handleSignupAndLogin = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Redux Store 담는 로직
      dispatch(setUsers({
        email: userCredential.user.email,
        token: userCredential.user.refreshToken,
        id: userCredential.user.uid
      }))
      dispatch(setUserId(userCredential.user.uid))
      // Home page로 이동
      navigate('/');
    })
    .catch(error => {
      return error && setFirebaseError("이메일 또는 비밀번호가 잘못되었습니다.")
    })
  }
  return (
    <Form
      title={"가입하기"}
      getDataForm={handleSignupAndLogin}
      firebaseError={firebaseError}
    />
  )
}

export default SignUp