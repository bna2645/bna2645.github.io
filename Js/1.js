function checkAnswer() {
    var inputAnswer = document.getElementById("answerInput").value;
    var correctAnswer = "2"; // Thay đổi đáp án này thành đáp án bạn muốn

    if (inputAnswer === "") {
        alert("Vui lòng nhập đáp án. \n HAY BẠN KHÔNG GIẢI ĐƯỢC:)))");
    } else if (inputAnswer === correctAnswer) {
        window.location.href = "../Html/1.1.html"; 
    } else {
        alert("Đáp án không đúng. Vui lòng thử lại.");
    }
}
function back(){
    var confirmation = confirm("Bạn có muốn quay lại?");
    if (confirmation == true) {
        window.location.href = "../Html/home.html"; // Thay đổi URL này thành trang web bạn muốn chuyển hướng đến
    }
}