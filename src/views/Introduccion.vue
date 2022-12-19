<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5
      .col-md-2.bloque_vertical.d-none.d-md-block.mb-md-0
        figure
          img(src="@/assets/curso/temas/introduccion.svg", alt="alt")
      .col-md-10.mb-md-0
        .cajon-b.cajon-x.color-primario.p-3.mb-5.abajo-derecha
          p Estimado aprendiz, reciba un cordial saludo y sea bienvenido a este componente formativo, donde conocerá la fase de visualización de datos y su importancia en los procesos de ciencias de datos para la comunicación de los resultados, así como para la exploración inicial del conjunto de datos disponibles. Aquí conocerá cómo seleccionar los gráficos adecuados de acuerdo al tipo de datos disponibles, así como el diseño y creación de tableros de control que permiten visualizar los resultados más importantes de los proyectos de ciencia de datos.
          p El enlace que se encuentra a continuación, lo va a dirigir al video de introducción en el que podrá conocer las temáticas desarrolladas durante esta etapa formativa.
          p #[b ¡Muchos éxitos!]


    .row.justify-content-center.align-items-center.md-5   
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
