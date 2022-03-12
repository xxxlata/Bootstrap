# Bootstrap v5 vidio 삽입

#### 부트스트랩 5 버전 반응형 임배드 비디오 삽입
부트스트랩 5에서 유투브를 반응형으로 만드는 것<br> 
ratio tatio-16x9라는 단어를 삽입 다른예로 21:9 인경우 ratio ratio-21x9
아래 소스와 같이 1:1, 4:3, 16:9, 21:9 표시이다.
```
<div class="ratio ratio-1x1">
  <iframe class="embed-responsive-item" src"..."></iframe>
<div class="ratio ratio-4x3">
  <iframe class="embed-responsive-item" src"..."></iframe>
<div class="ratio ratio-16x9">
  <iframe class="embed-responsive-item" src"..."></iframe>
<div class="ratio ratio-21x9">
  <iframe class="embed-responsive-item" src"..."></iframe>
</div>
```
물론 유투브에만 해당되는 것은 아니다.<br>
모든 동영상에 해당된다. 즉, 여러 동영상 파일들을 전부 src에 삽입 후 적용시킬 수 있다는 것.
