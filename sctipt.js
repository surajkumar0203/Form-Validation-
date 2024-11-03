document.getElementById('submit').addEventListener('click',(event)=>{
    event.preventDefault()
    checkData()
})


const checkData = ()=>{
    let nameRef=document.querySelector('#name')
    let emailRef=document.querySelector('#email')
    let passwordRef=document.querySelector('#password')
    let password2Ref=document.querySelector('#password2')
    let name=nameRef.value.trim()
    let email=emailRef.value.trim()
    let password=passwordRef.value.trim()
    let password2=password2Ref.value.trim()

    
    let data={
        name:"",
        email:"",
        password:""
       
    }
    // if field is blank
    if(name===''){
       errorMsg(nameRef,"This field can't blank")
       
    }else{
        successMsg(nameRef);
        data['name']=name;
    }
    if(email===''){
        errorMsg(emailRef,"This field can't blank")
     
    }else{
        successMsg(emailRef);
        if(!validateEmail(email)){
            errorMsg(emailRef,"Invaild Email")
        }
        else{
            data['email']=email;
        }
    }
    if(password===''){
        errorMsg(passwordRef,"This field can't blank")
    }else{
        successMsg(passwordRef);
        
    }
    if(password2===''){
        errorMsg(password2Ref,"This field can't blank")
    }else{
        successMsg(password2Ref);
        if(!passwordCheck(password)){
            errorMsg(passwordRef,"Password must be contain one uppercase lowercase spacial character & must be contain 8 character")
        }else{

            if(password!==password2){
                errorMsg(password2Ref,"Password & Confirm Password must be equal")
            }else{
                data['password']=password;
            }
        }
    }
    // check all field is not blank and convert data object into JSON data
    if(!Object.values(data).some(value=>value==='')){
        console.log(data)
        let jsonData=JSON.stringify(data)
        console.log(jsonData)
    }
}

const errorMsg=(reference,message)=>{
    let parent = reference.parentElement;
    parent.className="input-field error"
    let icon=parent.querySelector('.fa')
    icon.className="fa fa-exclamation-circle";
    let span=parent.querySelector('span');
    span.innerText=message;
}

const successMsg=(reference)=>{
    let parent = reference.parentElement;
    parent.className="input-field success"
    let icon=parent.querySelector('.fa')
    icon.className="fa fa-check-circle";
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

const passwordCheck = (passwords)=>{
    if(passwords.length < 8){
        return false
    }
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    if(regex.test(passwords)){
        return true;
    }
    return false;
}