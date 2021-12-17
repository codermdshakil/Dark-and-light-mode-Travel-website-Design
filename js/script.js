
let navber=document.querySelector('.navber');

document.querySelector('#menu_btn').onclick = () =>{

    navber.classList.toggle('active');
    login.classList.remove('active');
    search.classList.remove('active');
    
}

let login=document.querySelector('.loginBox');

document.querySelector('#login_btn').onclick = () =>{

    login.classList.toggle('active');
    navber.classList.remove('active');
    search.classList.remove('active');
  
}

let search =document.querySelector('.login_Box2');

document.querySelector('#search_btn').onclick = () =>{

    search.classList.toggle('active');
    navber.classList.remove('active');
    login.classList.remove('active');

}

let theme=document.querySelector('#theme_btn');

document.querySelector('#theme_btn').onclick = () =>{

    theme.classList.toggle('fa-sun');
    if(theme.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }


}



