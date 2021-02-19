function check(){
    let prime_number = document.getElementById("prime_number").value;
    let x = true
    if ( prime_number <= 1) {
        x = false
    }
    else {
        for ( let i = 2; i < prime_number; i++ ) {
            if ( prime_number % i == 0) {
            x = false
            break;
            }
        }
    }
    if ( x == true) {
        document.getElementById('result').innerHTML =  prime_number + ' la so nguyen to '
    }
    else { 
        document.getElementById('result').innerHTML =  prime_number + ' khong phai la so nguyen to '
    }
}