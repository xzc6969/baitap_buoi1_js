// Bài1: Tính tiền lương nhân viên
// Tính số lương
var btnTinhLuong = document.getElementById("btnTinhLuong");
btnTinhLuong.onclick = function () {
  // Đầu vào: Nhập lương 1 ngày và số ngày làm
  var wage = document.getElementById("wage").value * 1;
  var day = document.getElementById("day").value * 1;
  // Xử lí: Lương 1 ngày * số ngày làm
  var total1 = wage * day;
  // Đầu ra: in kết quả ra thẻ p#totalWage
  var result1 = "Tổng lương là: " + total1;
  var totalWage = document.getElementById("totalWage");
  totalWage.innerHTML = result1;
};

// Bài 2: Tính giá trị trung bình
// Tính trung bình
var btnTrungBinh = document.getElementById("btnTrungBinh");
btnTrungBinh.onclick = function () {
  // Đầu vào: Nhập lần lượt 5 số
  var number1 = document.getElementById("number1").value * 1;
  var number2 = document.getElementById("number2").value * 1;
  var number3 = document.getElementById("number3").value * 1;
  var number4 = document.getElementById("number4").value * 1;
  var number5 = document.getElementById("number5").value * 1;

  // Xử lí: TÍnh tổng 5 số rồi lấy tổng chia cho 5
  var avg = (number1 + number2 + number3 + number4 + number5) / 5;
  // Đầu ra: In kết quả ra thẻ p#average
  var result2 = "Trung bình của 5 số là: " + avg;
  var average = document.getElementById("average");
  average.innerHTML = result2;
};

// Bài 3: Quy đổi tiền
// Quy đổi tiền
var btnQuyDoi = document.getElementById("btnQuyDoi");
btnQuyDoi.onclick = function () {
  //Đầu vào: Nhâp số tiền USD
  var money = document.getElementById("money").value * 1;
  // Xử lí: Lấy sô tiền USD * 23500
  var exchange = money * 23500;
  // Đầu ra: In kết quả ra p#pResult
  var result3 = "Thành tiền: " + exchange;
  var pResult = document.getElementById("pResult");
  pResult.innerHTML = result3;
};

// Bài 4: Tính diện tích, chu vi hình chữ nhật
// Tính diện tích, chu vi
var btnCal = document.getElementById("btnCal");
btnCal.onclick = function () {
  // Đầu vào: Nhâp chiều dài, chiều rộng
  var length = document.getElementById("length").value * 1;
  var width = document.getElementById("width").value * 1;
  // Xử lí: Diện tich = chiều dài * chiều rộng, Chu vi = (chiều dài + chiều rộng) * 2
  var s = length * width;
  var p = (length + width) * 2;
  // Đầu ra: In kết quả ra p#DTCV
  var result4 = "Diện tích: " + s + "; Chu vi: " + p;
  var DTCV = document.getElementById("DTCV");
  DTCV.innerHTML = result4;
};

// Bài 5: TÍnh tổng 2 ký số
// Tính tổng
var btnTotal = document.getElementById("btnTotal");
btnTotal.onclick = function () {
  // Đầu vào: Nhập số có 2 chữ số
  var number = document.getElementById("number").value * 1;

  // Xử lí: tách số hàng chục
  //        tách số hàng đơn vị
  //        Tính tổng 2 số vừa tách
  var num_donVi = number % 10;
  var num_chuc = number / 10;
  var total2 = num_donVi + num_chuc;
  // Đầu ra: In kết quả ra p#total
  var result5 = "Kết quả: " + Math.floor(total2);
  var total = document.getElementById("total");
  total.innerHTML = result5;
};
