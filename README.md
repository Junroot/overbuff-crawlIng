## overbuff-crawlIng

Overbuff (https://www.overbuff.com/heroes) 를 크롤링하여 픽률, 승률을 기반으로 현재 메타인 영웅을 파악하기 위한 코드.

이 코드는 지극히 개인적인 용도로 작성되었습니다. 이 코드는 Google Chrome 버전 75.0.3770.100(공식 빌드) (64비트) 을 기반으로 작성되었습니다.

# 사용법

브라우저에 있는 개발자 도구의 콘솔 창에 

javascript:(!function(){var s=document.createElement("script");s.id="oadfchme";s.type="text/javascript";s.src="http://localhost/overbuff/overbuff1.js";document.head.appendChild(s);}());

와 같은 형태로 로컬 호스트에 있는 스크립트를 불러와 실행하는 형태로 이용할 수 있습니다.

# 결과 예시
16 7 7 // 딜러수 탱커수 힐러수

// 영웅이름(포지션): 승률 픽률 솔로기여도(1000분당 솔로킬)

doomfist(OFFENSE): 57.14 1.97 371.969

orisa(TANK): 56.85 11.66 22.92

widowmaker(OFFENSE): 55.45 5.55 576.759

roadhog(TANK): 55.41 8.25 133.112

zenyatta(SUPPORT): 54.5 7.31 88.85

mccree(OFFENSE): 54.26 5.31 263.969

ana(SUPPORT): 54.17 11.58 19.680000000000003

genji(OFFENSE): 53.99 3.78 195.272

tracer(OFFENSE): 53.5 1.94 300.54400000000004

hanzo(OFFENSE): 52.96 5.6 358.38599999999997

lucio(SUPPORT): 51.81 4.7 57.056999999999995

mercy(SUPPORT): 51.55 4.7 14.700000000000001

sombra(OFFENSE): 49.08 2.25 133.119
