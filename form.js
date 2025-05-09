function validateForm()
{
    const name=document.getElementById("name").value;
    const address=document.getElementById("address").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    
    
    
    let nameregex = /^[a-zA-Z0-9_]{5,19}$/;
    let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    
    
    const nameError=document.getElementById("name-error");
    const addressError=document.getElementById("address-error");
    const emailError=document.getElementById("email-error");
    const pwdError=document.getElementById("password-error");
    
    

    nameError.textcontent="";
    addressError.textcontent="";
    emailError.textcontent="";
    pwdError.textcontent="";

    


    if(name=="" || (!nameregex.test(name)))
        {
            nameError.textContent="please enter a name properly ";
            return false;
        }
        if(address=="")
            {
                addressError.textContent="please enter a address properly";
                return false;
            }
            if(password=="" ||(!passwordregex.test(password)) )
                {
                    pwdError.textContent="please enter a password must be atleast one lowercase,oneuppercase ,one digit minimum 8 letters";
                    return false;
                }
                if(email=="" ||(!emailregex.test(email)))
                {
                    emailError.textContent="email should be letter,number,symbols with @";
                    return false;
                 }
            

                  return true;
                  
    }
    

