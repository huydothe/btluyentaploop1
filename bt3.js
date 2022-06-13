let num=+prompt('Nhập 1 số');
let n1=0,n2=1,total;

for (let i=1; i<=num; i++ ){
    document.write(n1 + '<br>');
    total=n1+n2;
    n1=n2;
    n2=total;
}
