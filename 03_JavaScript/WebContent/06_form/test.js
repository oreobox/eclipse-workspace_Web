duplicate = false; //중복체크 눌렀나 안눌렀나 확인하는 전역변수 설정, 밖에다 만들어주기: 어느 function이나 사용 할 수 있도록

	function go_focus(input_id){
		if(input_id.defaultValue == input_id.value) // 기본값이랑 내가 입력한 값이같으면, 비교하는 거니까 == 두개
		input_id.value = ""; // 값 지우기
	} // go_focus()
	
	function idCheck(){
		duplicate = true; // 중복체크 누르면 true
		
		if(document.myform.id.value == "abcd"){
			alert("중복되는 아이디 입니다.");
			document.myform.id.value = ""; //abcd 지워짐, 넣는거니까 = 하나만 써주기
		}
		else{
			alert("사용 가능한 아이디입니다.");
		}
	} // idCheck()
	
	function check() {
		
		str = "선택한 항목은 \n";

		if(duplicate == false){
			alert("중복체크는 필수입니다.");
			return false; // jsp로 안넘어가도록 설정
		}
		
		//if(document.myform.id.value == ""){ // 값으로 따지기
		if(document.myform.id.value.length == 0){ // 길이로 따지기
			alert("아이디는 필수입니다.");
			return false;
		}
		
		if(document.myform.password.value == ""){ // .focus(): 입력할 자리 focus 맞춰주기, 글자 찍지않아도 ~~★
			alert("비밀번호는 필수입니다.");
			return false;
		}
		
		if(document.myform.repassword.value == ""){ 
			alert("비밀번호 재확인은 필수입니다.");
			return false;
		}
		
		if(document.myform.repassword.value != document.myform.password.value){ 
			alert("비밀번호가 일치해야 합니다.");
			document.myform.repassword.select();
					// .focus(): 입력할 자리 focus 맞춰주기, 비밀번호 일치하지 않으면 글자 찍지않아도 입력한것 뒤에 커서가 깜빡임
					// .select(): 비밀번호 일치하지 않으면 블럭잡아서 보여줌
			return false;
		}
		
		if(document.myform.name.value == ""){
			alert("이름은 필수입니다.");
			document.myform.name.focus();
			return false;
		}
		/* /^\d{3,4}$/ - 정규표현식사용 */
		if(isNaN(document.myform.phone1.value) || document.myform.phone1.value == ""){ // 숫자가 아닐때 참
			// 문자를 섞어 쓰거나, 아무것도 입력하지 않았을 때 표시되도록
			alert("전화번호1는 숫자형식으로 입력하세요.")
			document.myform.phone1.focus();
			return false;
		}
		
		/* if(document.myform.phone1.value == ""){
			alert("전화번호는 필수입니다.")
			document.myform.name.focus();
			return false;
		} */
		
		/* /^\d{4}$/ */
		if(isNaN(document.myform.phone2.value) || document.myform.phone1.value == ""){
			alert("전화번호2는 숫자형식으로 입력하세요.")
			document.myform.phone2.focus();
			return false;
		}
		//abcd1234@123q
		if(document.myform.email.value.indexOf('@') == -1){ // indexOf('@'): @의 위치는 어디인가? - -1이면 @가 없다는 뜻
			alert("email 형식이 아닙니다.");
			return false;
		}
		
		str += document.myform.id.value+"\n";
		str += document.myform.password.value+"\n";
		str += document.myform.areacode.value+"\n";
		str += document.myform.phone1.value+"\n";
		str += document.myform.phone2.value+"\n";
		str += document.myform.address1.value+"\n";
		str += document.myform.address2.value+"\n";
		str += document.myform.email.value+"\n";
		
		//★ checked 다시확인하기
		slen = document.myform.singer.length; //singer 배열로
		flag = false;
		for(i=0;i<slen;i++){
			if(myform.singer[i].checked){ // 하나라도 checked 된거 만나면 true로 바뀌게 설정
				str += myform.singer[i].value+" ";
				flag = true;
				//break; // 절대 쓰면안됨
			}
		}
		str += '\n';
		if(flag == false){
			alert("singer 최소 하나는 선택해야 합니다.");
			return false;
		}
		
		glen = document.myform.gender.length;
		flag = false;
		for(i=0;i<glen;i++){
			if(myform.gender[i].checked == true){
				flag = true;
				str += 	myform.gender[i].value +"\n";			
				break;
			}
		}
		
		if(flag == false){
			alert("gender는 꼭 선택해야 합니다.");
			return false;
		}
		
		str += document.myform.ta.value + "\n";
		
		alert(str);
		
	} // check()