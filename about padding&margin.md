# Bootstrap v5
padding ,margin 조정<br>
*미세조정을 위해서는 css사용해야한다.
<br><br>

m- :margin
p- :padding
```
<body>
    <div class="m-1 border">m-1</div>
    <div class="m-2 border">m-2</div>
    <div class="m-3 border">m-3</div>
    <div class="m-4 border">m-4</div>
    <div class="m-5 border">m-5</div>
</body>
```
사용법은 p-도 다음과 같다.

---------------------------------------------

t- 다음을 설정하는 클래스의 경우 margin-top또는padding-top<br>
b- 다음을 설정하는 클래스의 경우 margin-bottom또는padding-bottom<br>
```
<body>
    <div class="mt-2 border">mt-2 </div>
    <div class="mt-3 border">mt-3</div>
    <div class="mb-4 border">mb-4</div>
    <div class="mb-5 border">mb-5</div>
</body>
```
x- 왼쪽과 오른쪽 둘 다 설정하는 클래스 의 경우-horizontal
y- 위, 아래 둘 다 설정하는 클래스 의 경우-vertical
```
<body>
    <div class="mx-5 border">mx-5 </div>
    <div class="mx-5 border">mx-5</div>
    <div class="my-5 border">my-5</div>
    <div class="my-5 border">my-5</div>
</body>
```
-----------------------------------------------------
#### 정리

t : top<br>  
b : bottom<br>
l : left<br>
r : right<br>
x : x축 -> left , right<br>
y : y축 -> top , bottom<br>

------------------------------------------------
#### 숫자의 의미
0, 1, 2, 3, 4, 5, auto<br>
0 : 0
<br><br>
1 : .25rem( font-size가 16px이면, 4px) 크기<br>
2 : .5rem( font-size가 16px이면, 8px) 크기<br>
3 : 1rem( font-size가 16px이면, 16px) 크기<br>
4 : 1.5rem( font-size가 16px이면, 24px) 크기<br>
5 : 3rem( font-size가 16px이면, 48px) 크기
<br><br>
auto : margin의 자동으로 세팅<br>
<br>
n1, n2, n3, n4, n5<br>
n : negative을 의미<br>
<br>
n1 : -.25rem( font-size가 16px이면, -4px) 크기<br>
n2 : -.5rem( font-size가 16px이면, -8px) 크기<br>
n3 : -1rem( font-size가 16px이면, -16px) 크기<br>
n4 : -1.5rem( font-size가 16px이면, -24px) 크기<br>
n5 : -3rem( font-size가 16px이면, -48px) 크기<br>



