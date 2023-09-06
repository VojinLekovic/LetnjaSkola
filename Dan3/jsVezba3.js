var b = document.getElementById("button");

b.addEventListener("click", function(event){
    // window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D";
    alert("!");
    console.log(event);
    // console.log(event.target);
});



// let select = document.getElementById("button");
// select.addEventListener("change", fun())

const currentTime = () => {

    const element = document.querySelector("h1");


    let date = new Date();
        h = date.getHours();
        m = date.getMinutes();
        s = date.getSeconds();


    let day;
        day = h < 12 ? "AM" : "PM";
        h = h > 12 ? h-12 : h;
        h = h == 0 ? (h=12) : h; 

    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;
    
    element.textContent = h+":"+m+":"+s+" "+day;
};
currentTime();
setInterval(currentTime, 1000);