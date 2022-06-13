function result() {
    let number = +prompt('Số muốn đoán trong khoảng lớn nhất là ba nhiêu');
    let input = +prompt('Nhập số bạn muốn đoán');
    let random = Math.floor(Math.random() * number);
    let count = 0;
    while (number !== random){
        count++;
        if(count == 4){
            alert('Bạn đã hết lượt đoán');
            break;
        }else if(number > random){
            alert('Số bạn nhập lớn hơn');
        }else{
            alert('Số bạn nhập bé hơn');
        }
        input = +prompt('Nhập số bạn muốn đoán');
    }
    if(count == 4 ){
        document.write('Bạn đã hết số lần đoán');
    }else {
        document.write("Chúc mừng bạn đã đoán đúng");
    }
}