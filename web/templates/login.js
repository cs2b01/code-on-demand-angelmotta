function getData(){
        //$('#action').html("Authenticating...");
        $('#action').html('<img src="/static/images/loading.gif" />');
        var username = $('#username').val();
        var password = $('#password').val();
        var message = JSON.stringify({
                "username": username,
                "password": password
            });

        $.ajax({
            url:'/authenticate',
            type:'POST',
            contentType: 'application/json',
            data : message,
            dataType:'json',
            success: function(response){
                //alert(JSON.stringify(response));
                //$('#action').html(response['statusText']);
                $('#action').html('<img src="/static/images/ok.png" />');
            },
            error: function(response){
                if(response['status']==401){
                    $('#action').html('<img src="/static/images/fail.png" />');
                }
                else{
                    $('#action').html('<img src="/static/images/ok.png" />');
                }
                //alert(JSON.stringify(response));
                //$('#action').html('<img src="/static/images/fail.png" />');
            }
        });
    }