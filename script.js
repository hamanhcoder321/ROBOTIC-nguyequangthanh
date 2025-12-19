$(document).ready(function() {
  $(".btn-primary").on("click", function(e) {
    e.preventDefault();
    alert("Chức năng xem chi tiết sẽ được phát triển sau!");
  });
});
$(document).ready(function() {
  // Xử lý form đăng ký nhận bản tin
  $("footer form").on("submit", function(e) {
    e.preventDefault();
    let email = $(this).find("input").val();
    if(email) {
      alert("Cảm ơn bạn đã đăng ký nhận bản tin với email: " + email);
    } else {
      alert("Vui lòng nhập email trước khi gửi!");
    }
  });
});