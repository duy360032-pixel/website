$(document).ready(function() {
    
    $('.topic-card').on('mouseenter', function() {
        $(this).find('.btn-arrow').css('padding-left', '8px');
    }).on('mouseleave', function() {
        $(this).find('.btn-arrow').css('padding-left', '0px');
    });

   
    $('#form-join').on('submit', function(e) {
        e.preventDefault();
        
        $('.auth-box').animate({
            opacity: 0,
            transform: 'scale(0.9)'
        }, 300, function() {
            $(this).html('<div style="text-align:center; padding: 20px;"><h2 style="color:#ff6b00">🎉 Đăng ký thành công!</h2><p>Chào mừng bạn đến với cộng đồng Thể thao mới.</p></div>').animate({opacity: 1}, 300);
        });
    });

    
    $('#post-comment').on('submit', function(e) {
        e.preventDefault();
        
        let author = $('#author-name').val().trim();
        let text = $('#comment-msg').val().trim();
        
        if(author === "" || text === "") return;

        let node = $('<div class="comment-node"></div>')
            .html(`<strong>⚡ ${author}</strong>: <span style="color: #cbd5e1">${text}</span>`)
            .css('opacity', 0);

        $('#comment-stream').prepend(node);
        node.animate({ opacity: 1 }, 400);

       
        $('#author-name').val('');
        $('#comment-msg').val('');
    });
});