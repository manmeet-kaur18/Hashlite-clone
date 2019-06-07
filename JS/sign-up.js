const button = document.getElementById('register');
button.addEventListener('click', function (e) {
    console.log('button was clicked');
    let userDetail = {
        userName: document.getElementById('username').value,
        userEmail: document.getElementById('useremail').value,
        userPassword: document.getElementById('userpassword').value,
    };

    var userConfirmPassword = document.getElementById('userConfirmPassword').value;

    if (checkEmptyString(userDetail.userName)) {
        alert('User name is required');
        return;
    }
    if (checkEmptyString(userDetail.userEmail)) {
        alert('User Email is required');
        return;
    }
    if (checkEmptyString(userDetail.userPassword)) {
        alert('User Password is required');
        return;
    }

    if (checkEmptyString(userConfirmPassword) || userDetail.userPassword != userConfirmPassword) {
        alert('User Confirm password is not matching');
        return;
    }

    $.ajax({
        type: "POST",
        url: "/register",
        dataType: "json",
        success: function (jqXHR, data, status) {
            if (status.status == 200) {
                alert('Specified user created');
                location.href = '/';
            } else {
                alert('Specified User already exist');
            }
        },
        error: function (jqXHR) {
            alert(jqXHR.responseText);
        },
        data: userDetail
    });
});

function checkEmptyString(val) {
    return (val == undefined || val == null || val.trim().length == 0);
}
