var bt = document.getElementById("show-popup-form")
if(bt.innerText!="Thank you!"){
bt.addEventListener("click",function(){
    
    var div = document.getElementsByClassName("popup")[0]
    var img = document.createElement("img")
    div.appendChild(img)
    img.style.width="30px"
    img.style.height="30px"
    img.src = "https://areyalondon.com/img/close-button.png"
    img.style.position = "relative"
    img.style.left= "120px"
    img.style.bottom= "25px"
    img.style.borderRadius = "15px"
    img.addEventListener("click", function(){
        var div = document.getElementsByClassName("popup")[0]
        div.innerHTML = ""
        div.style = ""
        document.getElementById("show-popup-form").innerText = "Click me!"
    })
    bt.innerText = ""
    div.style.width="250px"
    div.style.height="350px"
    div.style.backgroundColor = "white"
    div.style.borderRadius = "10px";
    div.style.textAlign = "center"
    var p = document.createElement("p")
    div.appendChild(p)
    p.innerText = "Login"
    p.id = "login"
    var form = document.createElement("form")
    div.appendChild(form)
    var input = document.createElement("input")
    form.appendChild(input)
    input.type="text"
    input.name="login"
    input.value = "E-mail"
    input.id = "log"
    var input = document.createElement("input")
    form.appendChild(input) 
    input.type = "password"
    input.name="pass"
    input.value = "password"
    input.id = "pass"
    var label = document.createElement("label")
    var input = document.createElement("input")
    input.type = "checkbox"
    form.appendChild(label)
    label.appendChild(input)
    label.style.display = "flex"
    label.style.alignItems = "center"
    input.style.display = "flex"
    input.style.width = "12px"
    input.id = "accept"
    label.innerHTML += "I agree to terms & conditions"
    label.style.fontSize = "13px"
    label.style.fontFamily = "arial"
    label.style.float = "left"
    var button =document.createElement("button")
    div.appendChild(button)
    button.style.width="150px"
    button.style.height="40px"
    button.style.position="relative"
    button.style.bottom="20px"
    button.innerText = "Submit"
    button.id = "submit"
    button.addEventListener("click",function(){
        setTimeout(() => {
            var log = document.getElementById("log")
        var pass = document.getElementById("pass")
        var acc = document.getElementById("accept")
        if(log.value!=null){
            if(log.value.includes("@") && log.value.includes(".")){
                if(pass.value!=null){
                    if(acc.checked){
                    // console.log(acc.checked)
                    var div = document.getElementsByClassName("popup")[0]
                    div.innerHTML = ""
                    div.style = ""
                    div.innerHTML = "Thank you!"
                    }
                    else{
                        alert("Accept terms & conditions")
                    }
                }else alert("Password must be filled out")
            }
            else{
                alert("your email is incorrect")
            }
        } else{
            alert("Login must be filled out")
        }
        }, 3000);
        
    })
})
}