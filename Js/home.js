window.onload = function() {
    alert("Chọn 🎁 đi, Nghèo nên chỉ có thế thôi \nKhông nhận thì thôi CẠCH MẶT NHAU ĐI 🙃🙃🙃");
};

function confirmAndRedirect1() {
    var confirmation = confirm("Bạn có muốn tiếp tục?");
    if (confirmation == true) {
        window.location.href = "../Html/1.html"; // Thay đổi URL này thành trang web bạn muốn chuyển hướng đến
    }
}

function confirmAndRedirect2() {
    var confirmation = confirm("Bạn có muốn tiếp tục?");
    if (confirmation == true) {
        window.location.href = "../Html/2.html"; // Thay đổi URL này thành trang web bạn muốn chuyển hướng đến
    }
}
function back() {
    var confirmation = confirm("Bạn có muốn tiếp tục?");
    if (confirmation == true) {
        window.location.href = "../index.html"; // Thay đổi URL này thành trang web bạn muốn chuyển hướng đến
    }
}