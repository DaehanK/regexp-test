# 정규표현식 (RegExp)

## 역할

- 문자 검색
- 문자 대체
- 문자 추출

## 테스트 사이트
https://regexr.com/

## 정규식 생성

```js
//생성자 방식
new RegExp('표현'. '옵션')
new RegExp('[a-z]', 'gi')

// 리터럴 방식
/표현/옵션
/[a-z]/gi
```

## 예제 문자
```js
const str = `
010-1234-5678
gogoper02@naver.com
abbcccdddd
the quick brown for juimps over the lazt doh
`

```

## 메소드
메소드 | 문법 | 설명
--|--|--
test | `정규식.test(문자열)` | 일치 여부 (Boolean) 반환
match | `문자열.match(정규식)` | 일치하는 문자의 배열 반환
replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자를 대체

## 플래그 (옵션)

플래그 | 설명
--|--
g | 모든 문자 일치(global)
i | 영어 대소문자 구분X(ignore)
m | 여러 줄 일치 (multi line)

## 패턴(표현)

패턴 | 설명
--|--
^ab | 줄 시작에 있는 ab와 일치
ab$ | 줄 끝에 있는 ab와 일치
. | 임의의 한 문자와 일치
a&verbar;b | a 또는 b와 일치
ab? | b가 없거나 b와 일치
{3} | 3개 연속 일치
{3,} | 3개 이상 연속 일치
{3,5} | 3개이상 5개이하 연속일치
[abc] | a 또는 b 또는 c
[a-z] | a~z사이의 문자 구간에 일치
[A-Z] | A-Z 사이의 문자 구간 일치
[0-9] | 0~9 사이의 문자 구간 일치
[가-힣] | 가~힣 사이의 문자 구간 일치
\w | 대소문자 / 숫자 / _ 일치
\b | w에 해당하지않는 문자경계
\d | 숫자 일치
\s | 공백에 일치
(?=) |  앞쪽 일치
(?<=) | 뒤쪽 일치