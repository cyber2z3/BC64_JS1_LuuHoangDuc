// Bài 1: Tính tiền lương nhân viên 
document.getElementById('btn1').onclick = function(){
    var day = document.getElementById('day').value*1;
    var salaryPerDay = document.getElementById('salary').value*1;

    var salary = day*salaryPerDay;
    
    console.log(salary);
    document.getElementById('kq1').innerHTML = new 
        Intl.NumberFormat(
            'it-IT', 
            { 
                style: 'currency', 
                currency: 'VND' 
            }
        ).format(salary);
}

// Bài 2: Tính giá trị trung bình
document.getElementById('btn2').onclick = function(){
    var n1 = document.getElementById('num1').value*1;
    var n2 = document.getElementById('num2').value*1;
    var n3 = document.getElementById('num3').value*1;
    var n4 = document.getElementById('num4').value*1;
    var n5 = document.getElementById('num5').value*1;

    var tb = (n1+n2+n3+n4+n5)/5;

    document.getElementById('kq2').innerHTML = `Trung bình: ${tb}`;
}


//Bài 3: Quy đổi tiền
document.getElementById('btn3').onclick = function(){
    var money = document.getElementById('money').value*1;
    money *= 23500;
    document.getElementById('kq3').innerHTML = money.toLocaleString(
        'it-IT', 
        {
            style : 'currency', 
            currency : 'VND'
        }
    );
}

// Bài 4: Tính diện tích, chu vi hình chữ nhật
document.getElementById('btn4').onclick = function(){
    var dai = document.getElementById('chieuDai').value*1;
    var rong= document.getElementById('chieuRong').value*1;

    var chuVi = (dai+rong)*2;
    var dienTich = dai*rong;

    document.getElementById('kq4').innerHTML = 
    `Chu vi: ${chuVi} - Diện tích: ${dienTich}`;
}

// Bài 5: Tính tổng 2 kí số
document.getElementById('btn5').onclick = function(){
    var num = document.getElementById('num').value;
    var donVi = num%10;
    var hangChuc = Math.floor(num/10);
    var tong = donVi + hangChuc;

    console.log(donVi)
    console.log(hangChuc)
    document.getElementById('kq5').innerHTML = tong;
}