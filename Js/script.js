window.onload = function() {
    alert("Nhập ngày sinh nhật của bạn để tiếp tục truy cập trang web. \nHoặc có thể nhấn vào icon lịch để chọn ngày sinh nhật của bạn. \nChúc bạn có những phút giây vui vẻ!");
};


function checkDate() {
    var inputDate = document.getElementById("dateInput").value;
    var correctDate = "2005-07-28"; // Thay đổi ngày này thành ngày bạn muốn
    if (inputDate === "") {
        alert("Vui lòng chọn ngày sinh nhật của bạn.");}
        else if (inputDate === correctDate) {
        window.location.href = "./Html/home.html"; // Thay đổi URL này thành trang web bạn muốn chuyển hướng đến
    } else {
        document.getElementById("myModal").style.display = "block";
        setTimeout(function() {
            document.getElementById("myModal").style.display = "none";
        }, 3000); // Đặt thời gian tự động tắt sau 3 giây
    
    }
}

// Khi cửa sổ modal được click, đóng cửa sổ modal
window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        document.getElementById("myModal").style.display = "none";
    }
}