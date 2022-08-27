# Instargram clone ## Frontend

인스타그램 클론 

**개발기간**
2022.08.19-2022.08.25

## 👥팀원소개

- BE: 박종익, 이길종, 하지혜
- FE: 박준기, 하병노

## ⚒️기술스택

- **백엔드**
<img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=flat&logo=SpringBoot&logoColor=white"/> <img src="https://img.shields.io/badge/Spring Security-6DB33F?style=flat&logo=Spring Security&logoColor=white"/> <img src="https://img.shields.io/badge/Java-007396?style=flat&logo=java&logoColor=white"/>  <img src="https://img.shields.io/badge/JWT-000000?style=flat&logo=JWT&logoColor=white"/> <img src="https://img.shields.io/badge/Gradle-02303A?style=flat&logo=Gradle&logoColor=white"/> <img src="https://img.shields.io/badge/amazon s3-569A31?flat&logo=Gradle&logo=amazons3&logoColor=green">

* **프론트엔드**
<img src="https://img.shields.io/badge/html5-E34F26?style=flat&logo=Gradle&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/css-1572B6?style=flat&logo=css3&logo=Gradle&logoColor=white"/> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat&logo=Gradle&logo=javascript&logoColor=black"/> <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logo=Gradle&logoColor=black"/> <img src="https://img.shields.io/badge/styled components-DB7093?style=flat&logo=Gradle&logo=styledcomponents&logoColor=pink"/> <img src="https://img.shields.io/badge/react query-61DAFB?style=flat&logo=Gradle&logo=reactquery&logoColor=FF4154"/> <img src="https://img.shields.io/badge/amazon s3-569A31?style=flat&logo=amazons3&logoColor=green">

## 🌟핵심기능🌟

```
1. 회원가입/로그인
- email, 전화번호, 닉네임을 세개 다 아이디로 사용할 수 있음 

2. 게시글, 댓글 CRUD 
게시글, 댓글 목록 조회, 등록, 수정, 삭제, 상세조회

3. 다중 이미지 업로드

4. 마이 프로필 페이지   

5.(백엔드) 좋아요, 대댓글, RefreshToken, 소셜로그인 

```

## 🎥데모영상

**[https://youtu.be/3AoSzkpZolQ](https://youtu.be/3AoSzkpZolQ)**

## 🏀트러블 슈팅 ⛹️

 ### 1 **. onChange를 통한 이미지 multipart/form-data upload**
```
  1. 문제상황
    - button 에 onChange 를 통해 서버로 multiplart/form-data 보내지지 않음
  2. 해결한 방법
    - 파일업로드 까지 3중 modal의 로직으로 변환시켜 form 을 ㅌ오해 multipart/form-data 로 보냄 
```


### 2. parent component 에서 prop를 child component 의 사용

```
  1. 문제상황
    - parent component 에서 prop를 child component 의 hook에 inital state로 내려줄려고하는데 되지 않음
  2. 해결한 방법
    - 실제로 수정이 눌리는 onClick 부분에서 다른 function 를 불러와서 거기서 set function 에서 prop 의 값들을 받음
```
    

### 3. 페이지 reload 를 통해서만 data 업데이트
```
  1. 문제상황
    - 사진 업로드 & 글 업로드 & 댓글 등록시 페이지 refresh를 통해서만 웹사이트의 data가 업데이트 됨
  2. 해결한 방법
    - extra-reducer 로 통해 intial-state 를통해 해당 프로필 component 를 render 시켜 해결함!
```
      
## 4. 추가할 기능
```
  * 태그 기능 
  * 팔로우 기능
  * DM 기능
  * 알람 기능
  * 프로필 수정, 사진 삭제
  * 그외..
```
