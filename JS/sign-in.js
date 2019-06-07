const button = document.getElementById('login');
button.addEventListener('click', function(e) {
  console.log('button was clicked');
    let userDetail = {
        userEmail: document.getElementById('userEmail').value,
        userPassword: document.getElementById('userPassword').value
    };
    if (checkEmptyString(userDetail.userEmail))
    {
        alert('User Email is required');
        return;
    }
    if (checkEmptyString(userDetail.userPassword))
    {
        alert('User Password is required');
        return;
    }

    $.ajax({
        type: "POST",
        url: "/login",
        dataType: "json",
        success: function (msg) {
            if (msg.length > 0) {
                location.href='/';
            } else {
                alert("Invalid User !");
            }
        },
        data: userDetail
    });
});

function checkEmptyString(val)
{
    return (val == undefined || val == null || val.trim().length == 0);
}
