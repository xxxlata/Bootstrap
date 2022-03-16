# Bootstrap
#### flex
기본적인 flex-box의 기능과 매우 흡사하다.<br>
다만 bootstrap 으로 flex를 사용할 때에는 importent! 가 되기 때문에 ```display:none``` 상태가 필요하다면 주의해야한다. 
<br><br>
두번째 주의사항은 자식엘리먼트에 row나 col을 넣으면 flex와 충돌을 한다.<br>
flex는 margin값이 마이너스가 붙기 때문에 container에 넣는것을 권장한다.

----------------------------------------------------------------------
#### d-flex
```d-flex``` 만 추가했을 시에는 ```display:flex```상태가 되었다고 생각하면 된다.<br>
ex)
```
<div class="d-flex">I'm a flexbox container!</div>
```
reverse 설정이 하고 싶을 때에는 다음과 같은 코드를 작성하면 된다.<br> 
```
<div class="d-flex flex-row-reverse">
```
d-flex만 사용할 때에는 브라우저의 기본 설정이니 굳이 따로 쓸 필요가 없지만 왼쪽에서 오른쪽으로 정렬되는 reverse를 사용할 때에는 명시해준다.
<br><br>
cloumn 설정하는 법.<br>
```
<div class="d-flex flex-column">
```
기본이 수직방향으로 전환된다.
```
<div class="d-flex flex-column-reverse bd-highlight">
```
수직방향에서 아래에서 위로 정렬시킨다.

---------------------------------------------------------
#### flex 의 반응형
bootstrap5에서는 grid시스템 처럼 flex도 반응형을 탑제시킬수 있다.<br>
```
.flex-sm-row
.flex-sm-row-reverse
.flex-sm-column
.flex-sm-column-reverse
.flex-md-row
.flex-md-row-reverse
.flex-md-column
.flex-md-column-reverse
.flex-lg-row
.flex-lg-row-reverse
.flex-lg-column
.flex-lg-column-reverse
.flex-xl-row
.flex-xl-row-reverse
.flex-xl-column
.flex-xl-column-reverse
.flex-xxl-row
.flex-xxl-row-reverse
.flex-xxl-column
.flex-xxl-column-reverse
```
----------------------------------------------------
#### justify-content
설명은 생략
```
<div class="d-flex justify-content-start">...</div>
<div class="d-flex justify-content-end">...</div>
<div class="d-flex justify-content-center">...</div>
<div class="d-flex justify-content-between">...</div>
<div class="d-flex justify-content-around">...</div>
<div class="d-flex justify-content-evenly">...</div>
```
반응형 justify-content
```
.justify-content-sm-start
.justify-content-sm-end
.justify-content-sm-center
.justify-content-sm-between
.justify-content-sm-around
.justify-content-sm-evenly
.justify-content-md-start
.justify-content-md-end
.justify-content-md-center
.justify-content-md-between
.justify-content-md-around
.justify-content-md-evenly
.justify-content-lg-start
.justify-content-lg-end
.justify-content-lg-center
.justify-content-lg-between
.justify-content-lg-around
.justify-content-lg-evenly
.justify-content-xl-start
.justify-content-xl-end
.justify-content-xl-center
.justify-content-xl-between
.justify-content-xl-around
.justify-content-xl-evenly
.justify-content-xxl-start
.justify-content-xxl-end
.justify-content-xxl-center
.justify-content-xxl-between
.justify-content-xxl-around
.justify-content-xxl-evenly
```
#### align-items
설명생략
```
<div class="d-flex align-items-start">...</div>
<div class="d-flex align-items-end">...</div>
<div class="d-flex align-items-center">...</div>
<div class="d-flex align-items-baseline">...</div>
<div class="d-flex align-items-stretch">...</div>

```
반응형 align-items<br>
justify-content와 사용방법 동일
#### flex-fill
가능한 모든 수평 공간을 형제요소들이 최대한 동일한 너비로 가득 채운다.
```
<div class="d-flex bd-highlight">
  <div class="p-2 flex-fill bd-highlight">Flex item with a lot of content</div>
  <div class="p-2 flex-fill bd-highlight">Flex item</div>
  <div class="p-2 flex-fill bd-highlight">Flex item</div>
</div>
```
반응형
```
.flex-fill
.flex-sm-fill
.flex-md-fill
.flex-lg-fill
.flex-xl-fill
.flex-xxl-fill
```
