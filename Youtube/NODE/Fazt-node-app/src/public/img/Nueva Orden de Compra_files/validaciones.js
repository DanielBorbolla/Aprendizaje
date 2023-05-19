$(document).ready(function(){
     /*
  * Funcion para ver si tiene numeros
  */
  function tiene_numeros(texto){
    var numeros = "1234567890";
    var i;
    
    for(i=0; i<texto.length; i++){
      if (numeros.indexOf(texto.charAt(i),0)!==-1){
        return 1;
      }
    }
    return 0;
  }

  /*
  * Funcion para obetenr si tiene letras
  */
  function tiene_letras(texto){
    var letras = "abcdefghijklmnñopqrstuvwxyz";
    texto = texto.toLowerCase();
    for(var i=0; i<texto.length; i++){
      if (letras.indexOf(texto.charAt(i),0)!==-1){
        return 1;
      }
    }
    return 0;
  }

  /*
  * Funcion para obetenr simbolos no validos
  */
  function simbolos_no_validos(texto){
    var simbolos = '!"#$%&/\,.°¬_[*]{}@¨~^';
    for(var i=0; i<texto.length; i++){
      if (simbolos.indexOf(texto.charAt(i),0)!==-1){
        return 1;
      }
    }
    return 0;
  }

  /*
  * Funcion para revisar nombre(s)
  */
  $('#p-login-nombre_s').on('keyup', function(){
    var nombre = $(this).val();
    //SI SE TIENE VALORES
    if(nombre.length !== 0){
      $('#p-login-info-nom').slideUp('fast');
      if(simbolos_no_validos(nombre) ){
        $('#p-login-alerta-nom').slideDown('fast'); //MUESTRA EL MENSAJE DE ERROR
      }else{
        $('#p-login-alerta-nom').slideUp('fast'); //OCULTA EL MENSAJE DE ERROR
      }
    }
  });
  
   $('#nombre').on('keyup', function(){
    var nombre = $(this).val();
    //SI SE TIENE VALORES
    if(nombre.length !== 0){
      $('#p-login-info-nom').slideUp('fast');
      if(/^[a-zA-Z0-9\ \_\-/\-]+$/.test(nombre)){
         $('#p-login-alerta-nom').slideUp('fast'); //OCULTA EL MENSAJE DE ERROR
      }else{
          $('#p-login-alerta-nom').slideDown('fast'); //MUESTRA EL MENSAJE DE ERROR
       
      }
    }
  });
  
  $('#descripcion').on('keyup', function(){
    var descripcion = $(this).val();
    //SI SE TIENE VALORES
    if(descripcion.length !== 0){
      $('#descuento').slideUp('fast');
      if(/^[a-zA-Z0-9\ \_\-/\-]+$/.test(descripcion)){
      $('#descuento').slideUp('fast'); //OCULTA EL MENSAJE DE ERROR 
      }else{
           $('#descuento').slideDown('fast'); //MUESTRA EL MENSAJE DE ERROR
      }
    }
  });
  
  $('#componentes').on('keyup', function(){
    var componente = $(this).val();
    //SI SE TIENE VALORES
    if(componente.length !== 0){
      $('#aler').slideUp('fast');
      if(simbolos_no_validos(componente)){
        $('#alert').slideDown('fast'); //MUESTRA EL MENSAJE DE ERROR
      }else{
        $('#alert').slideUp('fast'); //OCULTA EL MENSAJE DE ERROR
      }
    }
  });
  
  $('#codigo').on('keyup', function(){
    var codigo = $(this).val();
    //SI SE TIENE VALORES
    if(codigo.length !== 0){
      $('#SKU').slideUp('fast');
      if(/^[a-zA-Z0-9-/\-]+$/.test(codigo)){
        $('#SKU').slideUp('fast'); //OCULTA EL MENSAJE DE ERROR
      }else{
          $('#SKU').slideDown('fast'); //MUESTRA EL MENSAJE DE ERROR
        
      }
    }
  });
    
    //- /^ - icia la expresion regular
    //-[a-zA-Z0-9\-] - se ponen los caracteres aceptados 
    //-+$/ ermina la expresion
  
  
   
   $('#contado').on('keyup', function(){
   
    var contado = $(this).val();
        //SI SE TIENE VALORES
   
     if(contado.length !== 0){
      $('#PrecioC').slideUp('fast');
      if(simbolos_no_validos(contado) || tiene_letras(contado)){
        $('#PrecioC').slideDown('fast'); //MUESTRA EL MENSAJE DE ERROR
      }else{
        $('#PrecioC').slideUp('fast'); //OCULTA EL MENSAJE DE ERROR
      }
    }//SI NO SE TIENE el valor correcto
    
    });
  
  	
  
});