import React from 'react'
import { useRecoilState } from 'recoil';
import { loginIdInput, loginPwInput } from '../../recoil/Login/LoginAtom';
import { LoginApi } from '../../apis/Login/LoginApi';
import { login } from '../../hooks/Login/LoginTypes';
import { useNavigate } from 'react-router-dom';
import { axiosPunch } from '../../apis/JWT/JWTConfig';
import { Token } from '../../hooks/JWT/JWTType';

const Login:React.FC = () => {
    const navi = useNavigate();

    const [loginId , setLoginId] = useRecoilState(loginIdInput);
    const [loginPw , setLoginPw] = useRecoilState(loginPwInput);
    
    const onChangeLoginId:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setLoginId(e.target.value);
    };

    const onChangeLoginPw:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setLoginPw(e.target.value);
    };

    const accessToken:Token = localStorage.getItem('accessToken');
    const refreshToken:Token  = localStorage.getItem('refreshToken');

    const IdPw:login = {
        "email":loginId, 
        "password":loginPw
    };

    const naviSignUp = () => {
        navi('/signUp');
    }
    const handleLogin = async () => {
        try {
            await LoginApi(IdPw);
            // 이후 로그인 후의 처리를 할 수 있습니다.
        } catch (error) {
            // 에러 처리
            console.error(error);
        }
    };
    
    let serverUrl:string = "http://192.168.0.102:8080";
    const testApi = () =>{
        axiosPunch({
            method:'get',
            url: serverUrl + "/api/totalPoint?member_idx=" + 5,
            headers: { 'Content-Type': 'application/json' }
        }).then(res =>{
            console.log(JSON.stringify(res.data));
        }).catch(err => {
            console.log(err);
        })
    }
    
    
    

  return (
    <div>
        <div>
        <div>accessToken ? : {accessToken}</div>
        <div>refreshToken ? : {refreshToken}</div>
            <div>
                <input type="email" placeholder='이메일' value={loginId} onChange={onChangeLoginId} style={{width:'300px', height:'50px', fontSize:'30px'}}/>
            </div>
            <div>
                <input type="password" placeholder='비밀번호' value={loginPw} onChange={onChangeLoginPw} style={{width:'300px', height:'50px', fontSize:'30px'}}/>
            </div>
        </div>
        <div onClick={handleLogin}>
            로그인
        </div>
        <div onClick={naviSignUp}>회원가입</div>
        <div onClick={testApi}>엑시오스펀치</div>
    </div>
  )
}

export default Login
