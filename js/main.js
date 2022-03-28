window.addEventListener("load", ()=>{
    const grid = new Isotope("section",{//배치할 요소를 감싸고 있는 부모요소명
        itemSelector:"article",//배치할 요소명
        columWidth:"article",//넓이 값을 구할 요소명
        transitonDuration:"0.5s"//화면 배치시 요소가 움직이는 속도
    }); 

    //클릭할 모든 버튼요소 변수에 저장
    const btns = document.querySelectorAll("main ul li"); //li를 담고 있는 btns 

    for(let el of btns){
        el.addEventListener("click",e =>{
            e.preventDefault();


            //변수를 만들어서(sort) 변수에 클릭한 대상의 자식인 a요소의 href속성값 저장
            const sort = e.currentTarget.querySelector("a").getAttribute("href");

            //grid에 저장된 결과값을 불러와 재정렬 기능 연결
            grid.arrange({
                // 옵션값으로 sort변수값 지정
                filter:sort});

                //다시 모든 버튼의 갯수 만큼 반복
                for (let el of btns){
                    //각 버튼의 클래스 명"on"를 제거(비활성화)
                    el.classList.remove("on");
                }

                //글릭한 대상만 선택해서 클래스명 "on"을 추가 활성화
                e.currentTarget.classList.add("on");
        });
    }
});