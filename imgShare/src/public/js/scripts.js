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
});

$('#btn-delete').click(function(e){
    e.preventDefault();
    let $this = $(this);
    const response =  confirm('Are you sure you want to delete this image?');
    if(response){
        let imgId = $this.data('id');
        $.ajax({
            url: '/images/'+ imgId,
            type: 'DELETE'
        })
        .done(function(result){
            console.log(result);
        });
    }
});