function dec2bin(dec)
{
    if(dec >= 0) {
        return dec.toString(2);
    }
    else {
        err("negative");
    }
}

function d_i(x) {
    return document.getElementById(x);
}

function validate() {
    a = d_i("first_octet");
    b = d_i("second_octet");
    c = d_i("third_octet");
    d = d_i("fourth_octet");

    // Checking int
    if(a.value.toString().indexOf('.')!=-1){
        alert("Input Error\n\nCheck your input");
        return false;
    }

    // Checking range.
    if(parseInt(a.value)>255 || parseInt(b.value)>255 || parseInt(c.value)>255 || parseInt(d.value)>255 || parseInt(a.value)<0 || parseInt(b.value)<0 || parseInt(c.value)<0 || parseInt(d.value)<0){
        alert("Input Error\n\nCheck your input");
        return false;
    }

    else{
        return true;
    }
}

function displayres() {
    d_i("res_container").style.display = "block";

    // Display decimal notation.
    a = d_i("first_octet");
    b = d_i("second_octet");
    c = d_i("third_octet");
    d = d_i("fourth_octet");
    a1 = d_i("doctet_first");
    b1 = d_i("doctet_second");
    c1 = d_i("doctet_third");
    d1 = d_i("doctet_fourth");
    a1.textContent = a.value;
    b1.textContent = b.value;
    c1.textContent = c.value;
    d1.textContent = d.value;

    // Display Binary notation.
    a2 = d_i("boctet_first");
    b2 = d_i("boctet_second");
    c2 = d_i("boctet_third");
    d2 = d_i("boctet_fourth");
    a2.textContent = dec2bin(parseInt(a.value));
    b2.textContent = dec2bin(parseInt(b.value));
    c2.textContent = dec2bin(parseInt(c.value));
    d2.textContent = dec2bin(parseInt(d.value));

    // Displaying class name.
    let res = dec2bin(parseInt(a.value)).toString();
    a3 = d_i("classname");
    if(res[0] == "0"){
        a3.textContent = "A";
    }

    else if(res[0]+res[1] === "10"){
        a3.textContent = "B";
    }

    else if(res[0]+res[1]+res[2] === "110"){
        a3.textContent = "C";
    }

    else if(res[0]+res[1]+res[2]+res[4] === "1110"){
        a3.textContent = "D";
    }

    else if(res[0]+res[1]+res[2]+res[4] === "1111"){
        a3.textContent = "E";
    }
}

function fetchres(){
    if (validate()){
        x = d_i("first_octet");
        console.log(dec2bin(parseInt(x.value)));
        displayres();
    }
}