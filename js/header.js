$(document).ready(function(){
    $("#carousel").carsousel();

    $("#carousel").click(() =>{
        $(".carousel-control-next").carsousel("next");
    });

    $("#carousel").click(() =>{
        $(".carousel-control-prev").carsousel("prev");
    });
});

/*search*/
function openSearch(){
    document.getElementById("search").style.display = "block";
}
function closeSearch(){
    document.getElementById("search").style.display = "none";
}

/* đăng ký tài khoản */
$(document).ready(function() {
    $("#login").on("click", function() {
        $("#id01").modal();
    });

    var txtName = $("#txtName");
    var tbName = $("#tbName");

    
    function KTNAME() {
        let name = txtName.val();
        if (name == "") {
            tbName.html("* bắt buộc");
            return false;
        }
        var regex =/^[a-zA-Z]+[a-zA-Z0-9]*$/;
        if (!regex.test(name)) {
            tbName.html("* Kí tự đầu tiên phải là kí tự chữ cái");
            return false;
        }
        tbName.html("");
        return true;
    }
    txtName.blur(KTNAME);
    
    var txtmk = $("#txtmk");
    var tbmk = $("#tbmk");

    function KTMK() {
        var mk = txtmk.val();
        if (mk == "") {
            tbmk.html("* bắt buộc");
            return false;
        }
        var regex =/^[0-9a-zA-Z]{4,}$/;
        if (!regex.test(mk)) {
            tbmk.html("* Mật khẩu tối thiểu là 4 kí tự");
            return false;
        }
        tbmk.html("");
        return true;
    }
    txtmk.blur(KTMK);

    $("#btn-submit").click(function(){
        if(!KTNAME() || !KTMK()) return false;
        var login = $("#login");
        let name = txtName.val();
        login.html(name);
        $("#id01").modal("hide");
        alert("Đăng nhập thành công");
        return true;
    });


//2
    $("#subcri").on("click", function() {
        $("#id02").modal();
        
    });

    var txtName1 = $("#txtName-1");
    var tbName1 = $("#tbName-1");
    function KTNAME1() {
        let name = txtName1.val();
        if (name == "") {
            tbName1.html("* bắt buộc");
            return false;
        }
        var regex =/^[a-zA-Z]+[a-zA-Z0-9]*$/;
        if (!regex.test(name)) {
            tbName1.html("Kí tự đầu tiên phải là kí tự chữ cái");
            return false;
        }
        tbName1.html("");
        return true;
    }
    txtName1.blur(KTNAME1);

    var txtHoTen = $("#txtHoTen");
    var tbHoTen = $("#tbHoTen");
    function KTHOTEN() {
        let name = txtHoTen.val();
        if (name == "") {
            tbHoTen.html("* bắt buộc");
            return false;
        }
        var regex =/^[a-zA-Z]+[a-zA-Z0-9]*$/;
        if (!regex.test(name)) {
            tbHoTen.html("Kí tự đầu tiên phải là kí tự chữ cái");
            return false;
        }
        tbHoTen.html("");
        return true;
    }
    txtHoTen.blur(KTHOTEN);
    
    var txtsdt= $("#txtSdt");
    var tbsdt = $("#tbSdt");
    function KTSDT() {
        let name = txtsdt.val();
        if (name == "") {
            tbsdt.html("* bắt buộc");
            return false;
        }
        var regex =/^(03|05|07|08|09)[0-9]{8}$/;
        if (!regex.test(name)) {
            tbsdt.html("số điện thoại không có thực");
            return false;
        }
        tbsdt.html("");
        return true;
    }
    txtsdt.blur(KTSDT);

    var txtEmail = $("#txtEmail");
    var tbEmail = $("#tbEmail");
    function KTEMAIL() {
        
        var email = txtEmail.val();
        if (email == "") {
            tbEmail.html("* bắt buộc");
            return false;
        }
        let regex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!regex.test(email)) {
            tbEmail.html("Email không đúng định dạng!");
            return false;
        }
        tbMk1.html("");
        return true;
    }
    txtEmail.blur(KTEMAIL);

    var txtMk1 = $("#txtmk-1");
    var tbMk1 = $("#tbmk-1");
    function KTMK1() {
        var mk = txtMk1.val();
        if (mk == "") {
            tbMk1.html("* bắt buộc");
            return false;
        }
        var regex =/^[0-9a-zA-Z]{4,}$/;
        if (!regex.test(mk)) {
            tbMk1.html("mật khẩu tối thiểu là 4 kí tự");
            return false;
        }
        tbMk1.html("");
        return true;
    }
    txtMk1.blur(KTMK1);

    
    
    $("#btn-submit-1").click(function(){
        if(!KTNAME1() || !KTHOTEN() || !KTSDT() || !KTEMAIL() || !KTMK1()) return false;
        
        $("#id02").modal("hide");
        alert("Đăng ký thành công");
        $("#id01").modal();
        return true;
    });
});