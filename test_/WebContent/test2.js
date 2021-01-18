	$(document).ready(function(){
		$('input[name="title"]').focus();
	});
	
	function inputCheck(){
		//alert(1);
		
		str = "선택한 값은\n";
		
		if($('input[name="title"]').val() == ""){
			alert("제목을 입력하세요.");
			$('input[name="title"]').focus();
			return false;
		}
		
 		if($('input[name="author"]').val() == ""){
			alert("저자를 입력하세요.");
			$('input[name="author"]').focus();
			return false;
		}
		
		if($('input[name="publisher"]').val() == ""){
			alert("출판사를 입력하세요.");
			$('input[name="publisher"]').focus();
			return false;
		}
		
		if($('input[name="price"]').val() == ""){
			alert("가격을 입력하세요.");
			$('input[name="price"]').focus();
			return false;
		}
		
		price = $('input[name="price"]').val();
		if(isNaN(price)){
			alert("가격은 숫자로 입력하세요");
			$('input[name="price"]').select();
			return false;
		}

		if($('input[name="date"]').val() == ""){
			alert("입고일을 입력하세요.");
			$('input[name="date"]').focus();
			return false;
		}
		
		str += $('input[name="title"]').val() +"\n";
		str += $('input[name="author"]').val() + "\n";
		str += $('input[name="publisher"]').val() + "\n";
		str += $('input[name="price"]').val() + "\n";
		str += $('input[name="date"]').val() + "\n";
		
		//라디오 유효성체크
		if( !$('input[name="kind"]').is(":checked") ){ // is(): 괄호 안에 쓴 속성을 가지고 있는지 체크하는 함수 - 가지고있으면 true, 없으면 false 리턴
			alert("배송비 중 하나를 입력하세요");
			$('input[type="radio"]')[1].focus(); // 스페이스바 누르면 1번째 방에 자동 클릭됨 
			return false;
		}
		
		str += $('input[name="kind"]:checked').val() +"\n";
		
		//체크박스 유효성체크
		if($('input[name="bookstore"]:checked').length == 0){
			alert("구입가능 서점은 최소 1개는 선택하세요.");
			return false;
		}
		
		$('input[name="bookstore"]:checked').each(function(){
			str += $(this).val()+" ";
		});
		
		str += '\n';
		
		if($('select[name="count"] option:selected').val() == "선택"){ // select 자손 중 옵션
		//if($('select option:selected').val() == "선택"){
			alert("보유수량을 선택하세요.");
			return false;
		}
		
		str += $('select[name="count"] option:selected').val()
		//str += $('select option:selected').val()
		
		alert(str);
	
	} // inputCheck()