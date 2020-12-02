function validateEmail(email) {
    let pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\
[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return pattern .test(email);
}

function validate() {
    let $result = $("#result");
    let email = $("#email").val();
    $result.text("");

    if (validateEmail(email)) {
        $result.text(email + " подтвержден.");
    } else {
        $result.text(email + " не подтвержден.");
    }
    return false;
}

$("#validate").bind("click", validate);