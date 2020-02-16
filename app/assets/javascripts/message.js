$(function(){

  function buildHTML(message){
    if (message.image) {
      var html =
      `<div class = "messages">
        <div class="main-chat__contents--info">
          <div class="name">
            ${message.user_name}
          </div>
          <div class="date">
            ${message.created_at}
          </div>
        </div>  
        <div class="main-chat__contents--message">
          <p class="lower-message__content">
            ${message.content}
          </p>
          <img src=${message.image} class="lower-message__image">
        </div>
      </div>`
      return html;
    } else {
        var html =
        `<div class = "messages">
          <div class="main-chat__contents--info">
            <div class="name">
              ${message.user_name}
            </div>
            <div class="date">
              ${message.created_at}
            </div>
          </div>  
          <div class="main-chat__contents--message">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main-chat__contents').append(html);
      $('form')[0].reset();
      $('.main-chat__contents').animate({ scrollTop: $('.main-chat__contents')[0].scrollHeight});
      $('.footer_btn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});