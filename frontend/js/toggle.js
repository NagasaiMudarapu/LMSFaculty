var x = document.getElementById("signup-btn");
var y = document.getElementById("signin-btn");
var a=document.getElementById("register-form");
var b=document.getElementById("login-form");
x.onclick = function () {
        b.style.display = "none";
        a.style.display = "block";

        x.style.color="white";
        x.style.backgroundColor="rgb(18, 112, 199)";
        x.style.border="1px solid rgb(18, 112, 199)";
        x.style.boxShadow="0 4px 8px 0 rgba(57, 159, 255, 0.932), 0 6px 20px 0 rgba(84, 164, 255, 0.884)";
        y.style.color="rgb(18, 112, 199)";
        y.style.backgroundColor="white";
        y.style.border="1px solid  rgb(211, 217, 247)";
        y.style.boxShadow="0 4px 8px 0 rgba(187, 219, 255, 0.932), 0 6px 20px 0 rgba(125, 196, 253, 0.884)";
}
y.onclick = function () {
        a.style.display = "none";
        b.style.display = "block";

        y.style.color="white";
        y.style.backgroundColor="rgb(18, 112, 199)";
        y.style.border="1px solid rgb(18, 112, 199)";
        y.style.boxShadow="0 4px 8px 0 rgba(57, 159, 255, 0.932), 0 6px 20px 0 rgba(84, 164, 255, 0.884)";
        x.style.color="rgb(18, 112, 199)";
        x.style.backgroundColor="white";
        x.style.border="1px solid  rgb(211, 217, 247)";
        x.style.boxShadow="0 4px 8px 0 rgba(187, 219, 255, 0.932), 0 6px 20px 0 rgba(125, 196, 253, 0.884)";
}