

$(document).ready(function (){

    $('.table .eBtn').on('click', function (event){
        event.preventDefault();

        var href = $(this).attr('href');


        $.get(href, function (user, status){
            $('#IdEdit').val(user.id);
            $('#usernameEdit').val(user.username);
            $('#passwordEdit').val(user.password);
            $('#yearOfBirthEdit').val(user.yearOfBirth);
            $('#rolesEdit').val(user.roles);

        });

        $('#edit').modal();
    });

    $('.table .dBtn').on('click', function (event){
        event.preventDefault();

        var href = $(this).attr('href');


        $.get(href, function (user, status){
            $('#IdDelete').val(user.id);
            $('#usernameDelete').val(user.username);
            $('#passwordDelete').val(user.password);
            $('#yearOfBirthDelete').val(user.yearOfBirth);
            $('#rolesDelete').val(user.roles);

        });

        $('#delete').modal();
    });
});