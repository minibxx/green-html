$.ajax({
    url:"./data.json",
    success:function(data){ 
        //$('다중선택자').each(function(){     });
        let tag = '';
        $.each(data.items,function(key, value){
            tag += `<div class="thumb">
                        <a href="${value.detail}" class="image">
                            <img src="${value.thumb}" alt="" />
                        </a>
                        <h2>${value.name}</h2>
                    </div>`;
        })

        $('#main').html(tag); //사진 추가

        $('.thumb').on('click',function(e){
            e.preventDefault();
            $('.poptrox-overlay').show();
            //show = display: block 역할

            let idx = $(this).index();
            //this를 $('.thumb').iq(idx) 처럼 변경 가능

            $('.thumb')
            //#코드(데이터) 바꿔주기.. 기능 주기?
            //클릭한 아이템의 값을 가져와서 팝업창 내용 변경
            let detail  = $(this).find('>a').attr('href');
            //디스의 a를 찾아서 href 값을 가지고 와라
            let name = $(this).find('h2').text();
            //h2>찾아서 제목 찾기

            //#바꿀 내용, 팝업 창 안의 정보를 바꾸기
            $('.pic img').attr('src',detail);
            $('.caption').text(name);
        });

        
        //팝업창 숨김 = display: none
        $('.closer').on('click',function(e){
            e.preventDefault();
            $('.poptrox-overlay').hide();
        })
        
    },
    error:function(){}
 });