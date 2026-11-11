import{FRUITS} from "/suika/fruits.js"

//모듈 불러오기
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    World = Matter.World,
    //바디 추가
    Body = Matter.Body;

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
    isSensor: true,
    render: {fillStyle: '#E6B143'}
})

//벽 배치
World.add(world, [leftwall,rightwall, ground, topline]);


//테스트 실행
Render.run(render);
Runner.run(engine);

let currentBody = null;
let currentFruit = null;
//키 조작을 제어하는 변수 생성
let disableAction = false;


function addFruit() {
    const index = Math.floor(Math.random() * 5);
    const fruit = FRUITS[index];


        const body = Bodies.circle(300, 50, fruit.radius, {
            index: index,
            isSleeping : true,
            render: {
                sprite: {texture: `${fruit.name}.png`},
            },
            restitution: 0.2,
        })

        currentBody = body;
        currentFruit = fruit;

        


        World.add(world, body)
}

//키보드 입력 받기
window.onkeydown = (event) => {
    //제어 조작 변수가 true일 경우 바로 리턴
    if (disableAction)
        return;


    switch(event.code) {
        case "KeyA":
            Body.setPosition(currentBody, {
                x: currentBody.position.x -10,
                y: currentBody.position.y
            });
            break;
        case "KeyD":
            Body.setPosition(currentBody, {
                x: currentBody.position.x +10,
                y: currentBody.position.y
            });
            break;

        //과일 떨어트리기
        case "KeyS":
            currentBody.isSleeping = false;
            disableAction = true;
            
            setTimeout(() => {
                //새로운 과일 추가
                addFruit();
                disableAction = false;
            }, 1000);
            break;

    }
}
addFruit();