let n1=0, n2=1, total, sum;
for (let i=1; i<=20; i++ ){
    total=n1+n2;
    n1=n2;
    n2=total;
    sum=total+n1;
}
document.write('Tổng 20 số đầu tiên là' + sum);