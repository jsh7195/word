# github  
  
https://github.com/jsh7195/word  

# 설치 
  
yarn  
  
.lock 파일 필수  
  
### yarn start  

webpack-dev-server 


### resolve

setInterval 을 사용하면서 화면 re-render에 대한 문제에 직면했습니다.

1초 마다 변경된 시간을 화면에 re-render 해야하지만 state의 값을 변경하면

지금까지 수행한 setInterval이 다시 실행되어 제대로된 timer의 기능을 수행하지 못했습니다.

이러한 점을 해결하기 위해 10초의 시간제한이 있다면 setTimeout을 1초만 수행하고 state의 값을 -1 한 후

re-render을 한 뒤 남은 횟수을 반복해서 수행하는 식으로 작업했습니다.

그리고 axios를 통해 호출한 단어목록, 현재 점수를 화면전환을 하면서 계속해서 호출을 해야하기 때문에

redux를 추가를 하려고 했지만 프로젝트 규모가 크지않아서 sessionStorage 와 router parameter로 대체하였습니다.


