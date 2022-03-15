# Bootstrap

#### Border
다음과 같이 클래스명을 지정하면 border를 생성할 수 있다.
```
<span class="border"></span>
//전체 border생성
<span class="border-top"></span>
//테두리의 윗 부분만 border 생성
<span class="border-end"></span>
//테두리의 오른쪽 부분만 border 생성
<span class="border-bottom"></span>
//테두리의 아래 부분만 border 생성
<span class="border-start"></span>
//테두리의 왼쪽 부분만 border 생성
```

#### Border-color
border line에 색상을 추가할 수 있다.
```
<span class="border border-primary"></span>
<span class="border border-secondary"></span>
<span class="border border-success"></span>
<span class="border border-danger"></span>
<span class="border border-warning"></span>
<span class="border border-info"></span>
<span class="border border-light"></span>
<span class="border border-dark"></span>
<span class="border border-white"></span>
```

#### Border-width
border line의 굵기 조정
```
<span class="border border-1"></span>
<span class="border border-2"></span>
<span class="border border-3"></span>
<span class="border border-4"></span>
<span class="border border-5"></span>
```
숫자를 높일수록 border line 의 굵기가 굵어진다.

#### Border-radius
컨텐츠를 추가한 상태로(ex:이미지태그) 클래스명을 지정해주면 원하는 형태로 빠르게 설정이 가능하다.
```
<img src="..." class="rounded-0" alt="...">
<img src="..." class="rounded-1" alt="...">
<img src="..." class="rounded-2" alt="...">
<img src="..." class="rounded-3" alt="...">
```
전체적인 border-radius를 지정하고싶을때 클래스명뒤에 숫자로 얼마나 둥글게 만들것인지 선택할 수 있다.
```
<img src="..." class="rounded" alt="...">
<img src="..." class="rounded-top" alt="...">
<img src="..." class="rounded-end" alt="...">
<img src="..." class="rounded-bottom" alt="...">
<img src="..." class="rounded-start" alt="...">
<img src="..." class="rounded-circle" alt="...">
<img src="..." class="rounded-pill" alt="...">
```
위와 같은 클래스명으로 원하는 부위만 radius를 줄 수 있다.
#### 
