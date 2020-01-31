$(function(){
  $('#new_message').on('submit', function(e){
    e.preventDefault()
    console.log('送信ボタンが押されました');
  })
})