//모듈 불러오기
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    World = Matter.World;

//엔진 선언
const engine = Engine.create();

//렌더 선언
const render = Render.create({
    engine, // 어디에 그릴 것인지 ->body에 생성
    element: document.body,
    options: {
        wireframes: false,           //기본값은 true인데 색 적용이 안됨.
        background: '#F7F4C8',     //배경 색 지정
        width: 620,
        height: 850,
    },
});

//벽 배치를 위한 world선언
const world = engine.world;

//벽생성
const leftwall = Bodies.rectangle(15, 395,30, 790, {

    isStatic: true,
    render: {fillStyle: '#E6B143'}
})

const rightwall = Bodies.rectangle(605, 395, 30, 790, {

    isStatic: true,
    render: {fillStyle: '#E6B143'}
})

const ground = Bodies.rectangle(310, 820, 620, 60, {

    isStatic: true,
    render: {fillStyle: '#E6B143'}
})

const topline = Bodies.rectangle(310, 150, 620 , 2, {

    isStatic: true,
    render: {fillStyle: '#E6B143'}
})

//벽 배치
World.add(world, [leftwall,rightwall, ground, topline]);


//테스트 실행
Render.run(render);
Runner.run(engine);