let time = new Date();
document.getElementById("time").innerHTML="Bonjour monsieur la date d aujourd huit est "+time.toDateString();


 //pour la validation les boutom
function Validation() {
    verfiernom();
    verifierprenom();
    verificationage();
    verifiercode();
    verifierEmail();
    password();
    }

 //pour verification le nom
function verfiernom()
{
    let n = document.getElementById('n');
    let vn =document.getElementById('vn');
    if(n.value.length<=2 || n.length==0)
    {
        vn.innerText="verifier votre nom"
        return false;
    }else{
        return true;
    }
}

 //pour verification le prenom
function verifierprenom(){
    let p=document.getElementById('p');
    let vp=document.getElementById('vp');
   if(p.value.length<=2 || n.length==0){
    vp.innerText="entrer votre prenom"
    return false;
   }
   else{
    return true;
   }
}
   
 //pour date de naissance
 function verificationage(){
 let dateN=document.getElementById('D').value;
 let vd=document.getElementById('vd');
 let A= new Date ().getFullYear() - new Date(dateN).getFullYear();

 if( dateN==0){ 
    vd.innerText="entrer votre date naissance";
 }
 else if(  A < 18){
    vd.innerText=" verifier votre date de naissance";
 }
   else{

    return false;
   } 
    }

    //pour code postale 
   function verifiercode(){
    let cp=document.getElementById('cp').value;
    let vcp=document.getElementById('vcp');

    if( cp.length==0){
        vcp.innerText="entrer votre code postal";
    }
     else
     if(cp.length >5) {
       vcp.innerText=" Votre code postal est inférieur à 6 caractères";       
   }
   else {
    return  true;
 }   
   } 

   //pour Email
   function verifierEmail(){ 
    let Email=document.getElementById('Email').value;
    let vEmail=document.getElementById('vEmail');
    var regEmail = new RegExp('^[0-9a-z._-]+[@]{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
    testEmail=regEmail.test(Email);
    
    if(!testEmail){
        vEmail.innerText=" votre Email n'est pas valide"; 
        return false;
    }
      else{
        vEmail.innerText=" votre Email validé";
      }
         return true;

        }

          //pour password    
        function password(){
  
            let passw=document.getElementById("passw").value; 
            let vpassw=document.getElementById("vpassw");

            if(passw.length == 0 ){
                vpassw.innerText="entrer votre password";
            }
            else {
                
            }

            if(passw.length>=8){
                vpassw.innerText="entre un mot de passe superieur a 8 ";
            }else {
                vpassw.innerText="votre password est valide";
            }

          }
        



        
   







   
    

