let num=+prompt('Nhập 1 số');
let n1=0,n2=1,total,chia5;

for (let i=1; i<=num; i++ ) {
    total = n1 + n2;
    n1 = n2;
    n2 = total;
    if (n1 % 5 == 0) {
        chia5 = n1;
        break;
    }
}
    document.write('Số chia hết cho 5 trong dãy ' + num +' số đầu tiên là ' + chia5)