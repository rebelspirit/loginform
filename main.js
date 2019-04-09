$( document ).ready(function() {

    $("#form").submit(function (e) {
        e.preventDefault();

        const name = $("#name").val();
        const lastName = $("#last_name").val();
        const phone = $("#tel").val();
        const email = $("#email").val();

        let data = {
            "params": {
                "first_name":name,
                "last_name":lastName,
                "af":"test6",
                "country":"DE",
                "phone":phone,
                "email":email
            }
        };

        $.ajax({
            url: 'http://onecrm.com/your/callback',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (res) {
                console.log("good", res)
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(this.data);
                console.log(xhr.status);
                console.log(thrownError);
            }

        });
    })

});