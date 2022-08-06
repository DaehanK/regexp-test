const str = `
010-1234-5678
gogoper02@naver.com
abbcccddddfrozen
the quick brown for juimps over the lazt doh.
https://~~
http://~~
동해물과 백두산이 마르고 닳도록
`
// ' 따움표 말고 ` 백틱?기호를 써야됨
const regexp = new RegExp('the','')
// == /the/
console.log(str.match(regexp))
//첫번째 the만 출력됨.

const regexp2 = new RegExp('the','g')
// == /the/g
console.log(str.match(regexp2))
//모든 the를 배열로 출력. ['the', 'the']

const regexp3 = new RegExp('the','gi')
// == /the/gi
console.log(str.match(regexp3))
// i를 옵션으로 넣어주면 대소문자 구분 X

const regexp4 = /brown/gi
console.log(regexp4.test(str))

console.log(str.replace(regexp4,'red'))
/*
원본을 건드리지는 않음.
원본도 바꾸고 싶다면
const -> let str로 선언하고
str = str.replace(~~) 이런식으로 가능.
010-1234-5678
gogoper02@naver.com
abbcccdddd
the quick red for juimps over the lazt doh.

*/
// .을 찾고싶을때 그냥 . 쓰면안됨 \. 을 해줘야됨
// $를 뒤에 붙이면? $앞쪽에 있는 문자로 끝나는 line을 출력해준다.
// str의 끝은 abbcccdddd 다음줄임.
// 이때 m flag를 넣어주면 각 줄을 시작과 끝으로 판단함.
console.log(str.match(/\.$/gim))

console.log(str.match(/n...r/g))
//naver , n for 두개가 찾아짐.  .이 임의의 문자를 의미하니까 space .등 모두 포함

console.log(str.match(/doh|quick/))
// g없이 하면 doh만 찾음. (doh가 없다면 quick도 찾겠지만)

console.log(str.match(/https?/g))
//이렇게하면 s가 있거나 없거나가 돼서
//https , http 두개를 찾아준다.

console.log(str.match(/d{2}/g))
// d가 두번 반복되는 패턴 반환
console.log(str.match(/d{2,}/g))
// dddd return 


// \w -> 숫자 , 영어 알파벳을 의미함.
// \b -> 경계를 만들어줌(숫자나 알파벳이 아닌)
// -010- 이라고치면 -가 \b에 들어가는거임.
console.log(str.match(/\b\w{2,3}\b/g)) 
//'010', 'com', 'the', 'for', 'the', 'doh'

console.log(str.match(/[fox]/g))
// f or o or x  출력

console.log(str.match(/[0-9]{1,}/g))
// 숫자가 1개 이상 연속된 것들 출력

console.log(str.match(/[가-힣]{1,}/g))
//1개이상 연속된 한글 출력 (동해물과 / 백두산이 / 마르고 / 닳도록 으로 4개 index array출력)

console.log(str.match(/\bf\w{1,}/g))
//문자가 f로 시작하면서 1개이상 연속되는것 반환
// == for , frozen은 왜? 이건 앞이 경계가 아니라 문자라서 안됨


const spaceWord = '   the   hello     world     !'

console.log(spaceWord.replace(/\s/g ,''))
// thehelloworld! -> 공백이 모두 제거된 string 출력

console.log(str.match(/.{1,}(?=@)/g))
//gogoper02 출력됨. @ 앞에있는 것들중에 .{1,}와 일치하는 문자를 출력

console.log(str.match(/(?<=@).{1,}/g))
//naver.com 출력됨. @ 뒤에있는 것들중 .{1,}와 일치하는 것 출력
