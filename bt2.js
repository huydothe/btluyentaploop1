let num = parseInt(prompt('Enter a number'));
while (num > 0 || num < -1){
    num = parseInt(prompt('Enter a number'));
    if(num>100){
        alert('Giảm nhiệt');
    }else if(num<20){
        alert('Tăng nhiệt');
    }else {
         alert('Nhiệt độ là' + num);
    }break;
}



// }while(num>=20 && num<=100){
//     alert('nhiệt độ' + num );
// }while(num<20){
//     alert('Hãy tăng nhiệt độ');
// }while (num>100){
//     alert('Hãy giảm nhiệt độ');
// }
