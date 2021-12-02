function fn1()
{
    let ans = document.getElementById('ans');
    if(ans.style.display == 'none')
    {
        ans.style.display = 'block';
    }
    else{
        ans.style.display = 'none';
    }
}

function sayHello()
{
    console.log('Hello peter');
}

setTimeout(sayHello,1000);