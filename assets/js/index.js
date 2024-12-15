$(document).ready(function () {

    const texts = [
        {
            element: '#nombre-text',
            content: "Hola, soy Francisco Jeraldo"
        },
        {
            element: '#intro-text',
            content: "Aspirando a Desarrollador Fullstack"
        }
    ];
    
    let textIndex = 0;
    let charIndex = 0;

    function typeWriter() {
        if (textIndex < texts.length) {
            const currentText = texts[textIndex];
            
            if (charIndex < currentText.content.length) {
                $(currentText.element).append(currentText.content.charAt(charIndex));
                charIndex++;
                setTimeout(typeWriter, 50);
            } else {
                // Texto actual completado, pasar al siguiente
                textIndex++;
                charIndex = 0;
                setTimeout(typeWriter, 500); // Pausa entre textos
            }
        }
    }
    
    typeWriter();


  $(".text-title").mouseenter(function (event) {
    var idSkill = event.target.id;
    $("#" + idSkill).css("filter", "drop-shadow(0 0 10px #508C9B");
  });

  $(".text-title").mouseout(function (event) {
    var idSkill = event.target.id;
    $("#" + idSkill).css("filter", "none");
  });
});
