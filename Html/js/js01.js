console.log('ready');

    var james = $('#bond');

    var right = function () {
        james.animate({ left: '5px' }, 600, left);
    };

    var left = function () {
        james.animate({ left: '0px' }, 600, right);
    };
    right();

    function back() {
        var confirmation = confirm("Bạn có muốn quay lại?");
        if (confirmation == true) {
            window.location.href = "../Html/home.html"; // Thay đổi URL này thành trang web bạn muốn chuyển hướng đến
        }    }
