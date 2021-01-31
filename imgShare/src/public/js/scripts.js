//con jquery
console.log('redingd');
$('#btn-like').click(function (e){
    e.preventDefault();
    let imgId = $(this).data('id');
    console.log(imgId);
    $.post('/images/' + imgId + '/like')
        .done(data => {
            $('.likes-count').text(data.likes);
        });
})