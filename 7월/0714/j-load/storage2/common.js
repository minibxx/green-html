
function dataChange(pageUrl){
    $('main').removeClass('active');

    setTimeout(()=>{
        $('main').load(pageUrl,function(){
                $('main').addClass('active')
        });
    },1000)
}
dataChange('./main.html')

$('header a').on('click',function(e){
    e.preventDefault();

    let url = $(this).attr('href');

    history.pushState({num:$(this).index()},'',url);
    //데이터 기록을 히스토리에 남김
    dataChange(url)
})

//팝스테이트 확인
$(window).on('popstate',function(){
    let num = history.state?.num || 0;
    // ?는 num이 존재하지 않으면 아예 실행자체를 시키지 않음 (물음표)
    let url = $('header a').eq(num).attr('href');
    dataChange(url)
})
// 첫번째 a 태그의 href 가 url에 들어간다..?
// 히스토리의 state 내역에 num 을 0대신 넣어줍시다
// 혹시 null 나오면 0 (main.html) 을 넣어주세요