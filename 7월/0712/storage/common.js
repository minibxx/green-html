
const elNav = document.querySelectorAll('nav a');

let pageNum = localStorage.pageNum;
if(pageNum) elNav[pageNum].style.color = 'yellow'; 

elNav.forEach(function(menu,key){
    menu.onclick = function(e){
        e.preventDefault();
        localStorage.pageNum = key;

        let objStr = {num:key, name:this.innerText};
        localStorage.obj = JSON.stringify(objStr); 
        //객체 -> 문자로 변환, 값들 없이 ㄹㅇ 텍스트만 콘솔에 뜸

        location.href = this.href;
    }
})
//페이지 옮길때마다 style.color 재실행되는거 막자
switch(pageNum){
    case '0': console.log( main() ); break;
    case '1': console.log( about() ); break;
    case '2': console.log( board() ); break;
    default : /* 케이스에 해당되지않는다면 디폴트를 실행 */;
}
function main(){ return 'main'}
function about(){ return 'about'}
function board(){ return 'board'}