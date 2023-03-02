<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Despliegue de visualizaciones en Internet
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p(data-aos="fade-right") La fase de despliegue en un proyecto de ciencia de datos, se refiere al momento en el que se lleva el modelo de <i>machine learning</i>, el <i>dashboard</i> o el informe final, a un ambiente de producción, para que pueda ser accedido y utilizado por los <i>stakeholders</i>, dándole así valor al trabajo realizado. Esta fase de despliegue puede ser tan sencilla, como la generación de un informe para comunicarlo y compartirlo con los interesados, o tan compleja, que implique la implementación de un entorno independiente, donde esté alojada la solución y que tenga los controles y permisos adecuados para que solo las personas autorizadas puedan acceder. Por lo general, este despliegue es realizado por equipos de Tecnologías de la información TI, que se encargan de configurar y administrar la infraestructura requerida para el proceso.
        .cajon.color-acento-contenido.cajon--amarillo-1.p-3.p-sm-4(style="blackground-color:#F0F2E7")
          p(data-aos="fade-down").mb-4 Cada vez es más importante que los científicos de datos se familiaricen con el proceso requerido para el despliegue de sus proyectos y que tengan la capacidad de adaptar el desarrollo de su modelo o visualización a una arquitectura de <i>software</i> con los requerimientos necesarios para producción. Los científicos de datos, pueden, además de diseñar sus modelos, implementarlos y desplegarlos por cuenta propia, porque ellos tienen una enorme ventaja competitiva frente a los que no.
      .col-lg-5
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema2/img1.png", alt="alt").img400.m-auto

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5(data-aos="zoom-in-left")
          .bloque-texto-g__img(:style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img2.png')})`}")
          .bloque-texto-g__texto.p-4
            p Muchas organizaciones inician sus procesos o proyectos de ciencias de datos, sin tener claro un plan que puedan pasar, finalmente, a producción. Esto genera grandes complicaciones al momento del despliegue, pues no se tienen en cuenta elementos tan importantes como la capacidad de cómputo requerida o el espacio de almacenamiento y la seguridad, siendo muy costoso el proceso de implementación.  
            br
            br
            p Algunos elementos a tener en cuenta desde el principio del proyecto son:

    TabsB.color-primario
      .py-4.py-md-5(titulo="Datos (cantidad, uso y almacenamiento)" :icono="require('@/assets/curso/temas/tema2/img3.svg')")
        .row
          .col-md-9.mb-4.mb-md-0
            p Los procesos de ciencia de datos dependen de los datos y durante su ejecución, se utilizan para entrenar, evaluar, probar o predecir. Debe, entonces, la persona encargada del proceso, preguntarse entre otras cosas: ¿qué tamaño tienen los datos a utilizar?, ¿cómo se van a obtener?, ¿dónde se van a almacenar?, ¿si los datos serán modificados? Todas estas preguntas ayudan a definir elementos tan importantes como las herramientas a utilizar (por ejemplo, según el tamaño o la cantidad de datos se pueden descartar herramientas básicas o que no estén optimizadas para gestionar grandes volúmenes de información como puede ser Excel).
        
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema2/img5.svg', alt='')
      .py-4.py-md-5(titulo="Herramientas (<em>frameworks</em>, librerías, lenguajes) " :icono="require('@/assets/curso/temas/tema2/img4.svg')")
        .row
          .col-md-9
            p Son utilizadas para diseñar e implementar los proyectos de ciencias de datos y requieren de una combinación de <i>frameworks</i> y herramientas adecuadas y, de igual manera, <i>hardware</i> y <i>software</i>, que permitan desarrollar e implementar los modelos y/o visualizaciones. Para una adecuada selección, se hace necesario investigar y comparar los resultados del uso de diferentes herramientas utilizadas para una misma labor, teniendo en cuenta su eficiencia, soporte y popularidad. Esta selección, también impacta el proceso de despliegue porque se debe evaluar si las elegidas son compatibles con las plataformas o servicios disponibles (entornos en la nube, tales como AWS (Amazon Web Services), Azure y GCP (Google Cloud Platform), qué sistema operativo requieren y si son de código abierto o no.
          .col-md-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img6.svg', alt='') 

    h3(data-aos="zoom-in-left").my-5  Servicios para despliegue de #[em dashboards] en internet
    
    .row.justify-content-center.mb-5
      .col-md-4
        figure
          img(src="@/assets/curso/temas/tema2/img7.svg", alt="alt")
      .col-md-8.mb-md-0
        p En la actualidad, el almacenamiento y la gestión de datos en la nube permite a las organizaciones almacenar, compartir y sincronizar archivos y aplicaciones de forma segura y rápida. El uso de la computación en la nube, permite a los usuarios y organizaciones escalar los servicios que utilizan según sus necesidades, acceder a estos servicios desde cualquier lugar y personalizar las aplicaciones y contenidos allí almacenados (flexibilidad). Además, posibilita desplegar las soluciones y aplicaciones rápidamente para su uso y aprovechamiento, sin que la organización tenga que preocuparse por los costos asociados al adquirir y mantener una infraestructura tecnológica, que algunas veces no es aprovechada en su totalidad y, otras, no es suficiente para dar respuesta a los requerimientos de los proyectos (eficiencia).
        p A continuación, se presentan algunos de los servicios y herramientas más utilizados en la actualidad:


    .row.justify-content-center.align-items-center.md-5   
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    h3(data-aos="zoom-in-left").my-5  Proceso de despliegue de #[em dashboards]
    
    .row.justify-content-center.mb-5
      .col-md-2.bloque_vertical2.d-none.d-md-block.mb-md-0
      .col-md-10.mb-md-0
        .px-2
          p.mb-0 A continuación, se presentan los pasos sugeridos para el proceso de despliegue de proyectos de ciencias de datos o de <i>dashboards</i>, para la presentación de los resultados.
    
    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 Selección del entorno de trabajo adecuado
            p(data-aos="fade-down").mb-4 Según las herramientas utilizadas en la ejecución del proyecto de ciencia de datos, se debe elegir la plataforma correspondiente para su despliegue. Se puede optar por usar las soluciones presentadas en el numeral anterior (AWS, GCP, Azure) o también la infraestructura propia de la organización, si esta da respuesta a las necesidades del proyecto y cumple, además, con los requerimientos de seguridad y accesibilidad.
                
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img9.svg', alt='')
        
        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 Configuración del #[em hardware]
            p(data-aos="fade-down").mb-4 Se debe configurar el entorno de trabajo seleccionado para que cumpla con los requerimientos del proyecto a desplegar. Esto incluye, aspectos como el sistema operativo que soporte la aplicación, librerías requeridas, la configuración de acceso a dicho entorno, los permisos y roles.
                
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img10.svg', alt='')
        
        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 Instalación / migración de la aplicación
            p(data-aos="fade-down").mb-4 Se alojan en el entorno ya configurado los archivos relacionados con el proyecto de ciencia de datos, los modelos y/o los informes o #[em dashboards] listos para su uso y explotación por parte de los interesados. En este caso, solo se usan los archivos finales, las bases de datos a usar y los modelos optimizados omitiendo conjuntos de datos de entrenamiento o archivos no requeridos para el uso de la aplicación o de la visualización.
                
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img12.svg', alt='')
        
        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 Pruebas
            p(data-aos="fade-down").mb-4 Se debe verificar que la aplicación o la visualización funcione correctamente en el entorno seleccionado. Para esto, se ejecuta un plan de pruebas que abarque aspectos funcionales y de diseño, validando que se cumplan con todos los requerimientos iniciales del proyecto y que el resultado es el esperado por los #[em stakeholders].
                
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img13.svg', alt='')

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .cajon.color-acento-botones.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.         

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
