//모듈 불러오기
var Engine = Matter.Engine,
    Render = Matter.Engine,
    Runner = Matter.Runner
    Bodies = Matter.Bodies,
    World = Matter.World;

//엔진 선언
const engine = Engine.create();

//렌더 선언
const render = Render.create({
    engine, // 어디에 그릴 것인지 ->body에 생성
    elment: document.body,
    Option: {
        wireframes: false.           //기본값은 true인데 색 적용이 안됨.
        background: '#F7F4C8',     //배경 색 지정
        width: 620,
        height: 850,
    },
});