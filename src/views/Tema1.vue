<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Ventajas y beneficios de la visualización de datos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="zoom-in-left")
          .bloque-texto-g__img(:style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img1.png')})`}")
          .bloque-texto-g__texto.p-4
            p En la actualidad, la visualización de datos es un tema fundamental cuando se habla de procesos de ciencia de datos, <em>Big data</em> e inteligencia de negocios, porque esta representación gráfica de información y datos, brinda una manera accesible de ver y entender tendencias, identificar valores atípicos y patrones en los datos utilizados. Algunos ejemplos comunes de visualizaciones gráficas son: gráficos de barras, líneas de tiempo, gráficos de línea, diagramas de dispersión, diagramas de Venn, entre otros.
   
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-botones
          h5 Figura 1
          br
          span #[em Tipos de visualización de datos]
        figure
          img(src="@/assets/curso/temas/tema1/img2.svg", alt="alt")
          figcaption Nota. Adaptada de ejemplos de gráficas para un dashboard ( 2021).
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-right") Las siguientes son algunas de las ventajas al procesar los datos a través de gráficos:
    
    .bg--img_03
      .row.justify-content-center        
        .col-lg-8
          AcordionA.mb-2(tipo="a" clase-tarjeta="tarjeta ca-ab")
            .row.justify-content-center.mb-4(titulo="Ahorro de tiempo")
              .col-10
                p.mb-0 El uso de visualizaciones de datos, en los procesos de ciencia de datos, permite a las organizaciones ahorrar tiempo (y dinero) pues permite la toma de decisiones acertadas y agiliza los procesos de análisis y divulgación.
            .row.justify-content-center.mb-4(titulo="Mejor entendimiento de la información")
              .col-10
                p.mb-0 Las estrategias de visualización de datos, desde etapas tempranas del proceso de ciencia de datos, permiten a los analistas entender mejor los datos disponibles, las posibles relaciones existentes entre variables, la detección de datos atípicos que puedan generar problemas en la interpretación de la información, entre otros.
            .row.justify-content-center.mb-4(titulo="Apoyo para la toma de decisiones")
              .col-10
                p.mb-0 La visualización de datos permite dar manejo a las grandes cantidades de información que tienen que administrar las organizaciones, consiguiendo tener un panorama más amplio y una mejor interpretación de los datos para tomar decisiones acertadas soportadas por información y no por la intuición.
            .row.justify-content-center.mb-4(titulo="Optimización de procesos de divulgación de la información")
              .col-10
                p.mb-0 Las diversas herramientas disponibles para la visualización de datos, permiten con gran facilidad la difusión de las representaciones visuales de datos con todos los actores de la compañía. Esto sumado al uso de las aplicaciones móviles y las aplicaciones web, favorece la movilidad y la interacción en tiempo real.
            .row.justify-content-center.mb-4(titulo="Reducción de complejidad / carga de trabajo del equipo")
              .col-10
                p.mb-0 Gracias a las herramientas de visualización, el análisis de datos deja de ser una tarea exclusiva del equipo tecnológico y cada vez más personas pueden participar de este proceso, pues dichas visualizaciones le permiten a los interesados, utilizar la información de un modo más intuitivo.
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img3.svg", alt="alt").img400.m-auto

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img4.png", alt="alt").img400.m-auto
      .col-lg-8
        p A medida que los datos se convierten en una parte cada vez más importante de la forma en la que se entiende el mundo, la visualización de datos y las infografías se están convirtiendo en palabras de uso más común, que se refieren a la forma en que se aprenden y se comparten estos datos con los demás. Cabe destacar que las visualizaciones y las infografías no son lo mismo, pero están estrechamente relacionadas.
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-12
            .cajon.color-acento-botones.cajon--amarillo-1.p-3.p-sm-4
              p(data-aos="fade-down").mb-4 Las visualizaciones de datos por lo general necesitan algo de narración como complemento o contexto para que los datos se vuelvan procesables y entendibles, lo cual es una de las principales características de las infografías. Por otro lado, ayudan a complementar y soportar las historias contadas en las infografías. Es importante que las visualizaciones de datos creadas sean concisas, claras y convincentes y eso se logra eliminando cualquier elemento extra que pueda interferir con el análisis de la información y seleccionando el tipo de gráfica adecuado. 
        p A continuación, se presenta una infografía que le permitirá entender la relación entre los datos, su funcionalidad y diseño, para la realización de excelentes visualizaciones de datos:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        p(data-aos="fade-right") #[em What Makes A Good]
        h3 Data visualization
    .row.justify-content-center.align-items-center
      .col-lg-6
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img5.svg', alt='') 
          .tarjeta.p-3(x="18%" y="27%" numero="")            
            .row.justify-content-center.align-items-center.p-3(style="background-color:#FFF7DE")              
              ul.lista-ul.mb-0
                li
                  i.fas.fa-chevron-right(style="color:#000000")
                  | Encuentre un tema de interés.
                li
                  i.fas.fa-chevron-right(style="color:#000000")
                  | Seleccione un objetivo o propósito.
                li
                  i.fas.fa-chevron-right(style="color:#000000")
                  | Recolecte y organice la información. 
          
          .tarjeta.p-3(x="82%" y="27%" numero="")            
            .row.justify-content-center.align-items-center.p-3(style="background-color:#FFF7DE")              
              ul.lista-ul.mb-0
                li
                  i.fas.fa-chevron-right(style="color:#000000")
                  |Represente con precisión los datos.
                li
                  i.fas.fa-chevron-right(style="color:#000000")
                  |Hágalos claros y legibles.
                li
                  i.fas.fa-chevron-right(style="color:#000000")
                  |Haga que sean útiles y tengan sentido.
          .tarjeta.p-3(x="50%" y="85%" numero="")            
            .row.justify-content-center.align-items-center.p-3(style="background-color:#FFF7DE")
              ul.lista-ul.mb-0
                li
                  i.fas.fa-chevron-right(style="color:#000000")
                  |Esboce el proceso y posibles gráficas.
                li
                  i.fas.fa-chevron-right(style="color:#000000")
                  |Cree una imagen impactante.
                li
                  i.fas.fa-chevron-right(style="color:#000000")
                  |Encuentre el equilibrio entre forma y función.

    h3(data-aos="zoom-in-left").my-5  Selección de gráficos según el tipo de datos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p(data-aos="fade-right") Existen incontables tipos diferentes de gráficos, tablas y visualizaciones de datos, disponibles para que analistas y científicos de datos puedan representar y transmitir información importante. Los diversos tipos de gráficos sirven para agilizar y mejorar la interpretación de los datos, pero no todos son apropiados para el mismo trabajo y, por esta razón, es importante diferenciar estos y sus usos recomendados.
        p(data-aos="fade-right") Para poder decidir de manera acertada, qué tipo de visualización de datos utilizar, se hace necesario comprender las principales funciones que este proceso puede cumplir. A continuación, se mencionan algunas de estas funciones:
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img6.png', alt='')
    
    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Comparación de valores")
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/img7.png', alt='')
          .col-md-6
            p Se utiliza cuando se desean comparar los valores máximos y mínimos de un conjunto de datos, así como las diferencias entre los valores, brechas existentes y posibles tendencias. Algunas visualizaciones o gráficas adecuadas para esta función son: gráficos de columnas, gráficos de pastel, gráficos de barras y gráficos de dispersión.
      .py-3.py-md-4(titulo="Mostrar composición")
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/img8.png', alt='')
          .col-md-6
            p Esta función permite separar los conjuntos de valores, para mostrar cómo las unidades individuales afectan la imagen general. Por ejemplo, una organización puede necesitar visualizar desde qué ciudades o regiones del país proceden sus ventas o, qué categoría de productos es la más comprada del total de ventas realizadas en un periodo de tiempo. En este caso, son de gran utilidad las gráficas de pastel, gráficos de barras apiladas y gráficas de área.
      .py-3.py-md-4(titulo="Determinar la distribución")
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/img9.png', alt='')
          .col-md-6
            p En muchos casos la organización necesitará comprender la distribución general de sus datos, los intervalos o posibles valores del conjunto de datos y la frecuencia con la que ocurren. Utilizando este tipo de visualizaciones, la organización podrá identificar tendencias además de valores atípicos que pueda estar interfiriendo con dichas tendencias. Para este caso, se recomienda utilizar los gráficos de dispersión.
      
      .py-3.py-md-4(titulo="Identificar las relaciones entre diferentes tipos de datos")
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/img10.png', alt='')
          .col-md-6
            p Muchas de las variables de las organizaciones se ven afectadas positiva o negativamente por el comportamiento de otras variables (internas o externas a la organización) y es fundamental que dichas relaciones se puedan identificar. Para representar visualmente dicha relación entre variables se pueden usar: gráficos de dispersión y gráficos de líneas.
    .row.justify-content-center.mb-5
      .col-md-2.bloque_vertical.d-none.d-md-block.mb-md-0
      .col-md-10.mb-md-0
        .px-2
          p.mb-0 A continuación, se describen algunos de los tipos de visualizaciones mencionadas y se muestran algunos ejemplos de éstas. Con la práctica, se puede seleccionar, cada vez con mayor facilidad, el gráfico adecuado según el tipo de dato que esté manejando y el público al que se está dirigiendo.

    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 Tablas
            p(data-aos="fade-down").mb-4 Las tablas son una de las formas de visualización más empleadas, permiten presentar los datos en filas y columnas para ver detalles y comparar valores. Por lo general, las columnas corresponden a atributos o propiedades del elemento descrito y las filas corresponden a registros independientes de dicho elemento. Este tipo de visualización, permite también realizar filtros para mostrar solo la información de interés, o de ordenar los valores, según algunos de los atributos seleccionados.
                
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/1.svg', alt='')
        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 Gráficos de barras
            p(data-aos="fade-down").mb-4 Es una forma de representar gráficamente un conjunto de datos o variables, mediante el uso de barras rectangulares (verticales u horizontales) con longitudes proporcionales a los valores que representan. Se utilizan como una forma de resumir un conjunto de datos por categorías (variable cualitativa), generalmente ubicadas en el eje horizontal “X” y su frecuencia de aparición ubicada en el eje vertical “Y”.
                
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/2.svg', alt='')
        
        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 Gráficos de líneas
            p(data-aos="fade-down").mb-4 Son especialmente útiles para mostrar tendencias a lo largo de un periodo de tiempo. Un gráfico de línea, permite mostrar una o varias series de datos en la misma figura, posibilitando la comparación entre sus comportamientos. Se representan dibujando primero, los puntos de los datos según sus valores y luego conectando una línea entre dichos puntos. Se utilizan generalmente, para representar datos continuos.
                
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/3.svg', alt='')

        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 Gráfico circular o de torta
            p(data-aos="fade-down").mb-4 Los gráficos circulares se dividen en sectores donde cada uno muestra el tamaño de un fragmento de información relacionado (el tamaño del sector es proporcional a la cantidad que representa). Por lo general, este tipo de gráficos se utiliza para mostrar tamaños relativos de partes de un todo. Es útil cuando se comparan entre 3 y 5 categorías diferentes con valores diferentes y que sean fáciles de diferenciar.
                
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/4.svg', alt='')
        
        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 Mapas de calor
            p(data-aos="fade-down").mb-4 Mapa de calor o <i>heatmap</i>, es una forma de visualización en formato tabular en donde, además de los números, se utiliza el color de las celdas para transmitir la magnitud relativa de los valores. En los mapas de calor, se puede usar la saturación del color para proporcionar pistas visuales que ayuden a localizar más fácilmente los puntos de interés (valores límites, por ejemplo). Por lo general, se utilizan los colores más oscuros para indicar baja actividad y los colores más brillantes para indicar alta actividad.
                
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/5.svg', alt='')
        
        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 Gráficos de dispersión
            p(data-aos="fade-down").mb-4 Gráfico de dispersión o <i>scatterplot</i>, permite mostrar la relación entre dos variables porque se pueden configurar de tal forma, que una variable se muestre sobre el eje horizontal X y, la otra sobre el eje vertical Y y, de esta manera, visualizar si existe una relación. Si los elementos graficados forman una franja que se extiende desde la parte inferior izquierda hasta la parte superior derecha, lo más probable es que haya una correlación positiva entre esas dos variables. Si es difícil ver un patrón, es probable que no se tenga una correlación entre las variables graficadas.
                
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/6.svg', alt='')
        
        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 #[em Treemap]
            p(data-aos="fade-down").mb-4 Un gráfico de árbol, proporciona una visión jerárquica de los datos y facilita la detección de patrones. Por ejemplo, en una tienda, cuáles artículos son los más vendidos. Las ramas del árbol están representadas por rectángulos y cada subrama se muestra como un rectángulo más pequeño. El gráfico de árbol muestra las categorías por color y proximidad y puede mostrar fácilmente, muchos datos que serían difíciles de ver con otros tipos de gráficos. Los gráficos de mapa de árbol son buenos para comparar las proporciones dentro de la jerarquía. Sin embargo, no son buenos para mostrar los niveles jerárquicos entre las categorías más grandes y cada punto de datos. 
                
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/7.svg', alt='')
              figcaption Nota. Tomado de  https://support.content.office.net/en-us/media/b3bfff05-380e-4dd9-b49b-7a2bfd128870.png
        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 Diagrama de caja
            p(data-aos="fade-down").mb-4 El diagrama de caja o <i>box plot</i>, es un tipo de gráfico que permite visualizar y comparar la distribución y la tendencia central de valores numéricos mediante sus cuartiles, los cuales son los tres valores de la variable que dividen a un conjunto de datos ordenados, en cuatro partes iguales.
                
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/8.svg', alt='')
              figcaption Nota. Tomado de https://pro.arcgis.com/es/pro-app/latest/help/analysis/geoprocessing/charts/GUID-0E2C3730-C535-40CD-8152-80D794A996A7-web.png
        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 #[EM Geomaps]
            p(data-aos="fade-down").mb-4 Los gráficos de mapa o <i>geomaps</i>, se utilizan, habitualmente, para comparar valores y mostrar categorías entre regiones geográficas. Los gráficos de mapa, son más útiles cuando los datos contienen información geográfica (países, regiones, estados, ciudades, códigos postales, etc.). Utilizando herramientas gratuitas como Google Maps, se pueden elaborar visualizaciones de datos geográficos en mapas interactivos y responsivos, teniendo mayor control sobre cómo se ubican los puntos en el mapa.
                
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img20.png', alt='')
              figcaption Nota. Adapatao de Maptive (2020). 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.p-5(style="border:solid 5px #F6F6F6;border-radius:15px;")
        .row.justify-content-center.align-items-center
          .col-lg-3
            figure
              img(src='@/assets/curso/temas/tema1/img21.png', alt='')
          .col-lg-9
            p(data-aos="fade-right") Para mayor información relacionada con los tipos de visualizaciones, se recomienda revisar la página de consulta de Microsoft Learn (2022). 
            a.anexo.mb-4.mb-lg-0(href="https://learn.microsoft.com/es-es/training/ " target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Enlace #[em web]. #[em Microsoft] - Cursos

    h3(data-aos="zoom-in-left").my-5  Herramientas de creación de visualización (estáticas e interactivas)
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p Para poder sacar partido de las grandes cantidades de información que produce la organización y extraer de estas, conclusiones e <i>insights</i> de valor, se hace necesario aprovechar al máximo las herramientas que la ciencia de datos pone a disposición, como la visualización de datos. Estas, permiten interpretar los datos de manera más sencilla y visual, facilitando así su entendimiento y comunicación. La visualización de datos es utilizada en diferentes fases del proceso de ciencia de datos; al principio, como herramienta para explorar y analizar los datos recibidos y empezar a encontrar en estos, relaciones o comportamientos y, en las fases finales, como un instrumento que permite mostrar con mayor facilidad, los resultados obtenidos o poner a disposición de los <i>stakeholders</i>, gráficos dinámicos, tablas y controles que pueda manipular para explorar de cuenta propia la información.
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-12
            .cajon.color-acento-botones.cajon--amarillo-1.p-3.p-sm-4
              p(data-aos="fade-down").mb-4 Según sea la etapa del proyecto de ciencia de datos o el objetivo que se busca con la visualización, existen diferentes herramientas (gratuitas y pagas) que los científicos de datos y los analistas pueden aprovechar para realizar este proceso. Algunas de estas herramientas permiten realizar gráficas estáticas adecuadas para la generación de reportes, o cuándo la información no cambia en el tiempo. Otras permiten hacer gráficas dinámicas que se pueden editar y que, en algunas ocasiones, toman sus datos de fuentes de información dinámica y, por lo tanto, variable en el tiempo.
        p Algunas de estas herramientas para la visualización de datos son:
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img22.png", alt="alt").img400.m-auto      

    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 #[em Excel]
            p(data-aos="fade-down") Es un programa de hoja de cálculo, lanzado por la empresa Microsoft en el año de 1987. Es un <i>software</i> multiplataforma (funciona en sistemas operativos como Windows, MacOS, Android, iOS), que permite crear tablas, gráficos y otras visualizaciones. Facilita, de igual manera, de una forma sencilla y rápida, crear visualizaciones a partir de los datos existentes y personalizarlos, a gusto del usuario, pero tiene en su contra, el no estar diseñado ni optimizado para manipular grandes cantidades de datos, como puede ser requerido en la mayoría de los proyectos de ciencia de datos. 
            p(data-aos="fade-down") En sus últimas versiones el número total de filas y columnas en una hoja de cálculo es de 1.048.576 filas por 16.384 columnas. En caso de requerirse más filas (más registros), es necesario usar otra hoja u otro archivo de Excel, volviendo más complejo el procesamiento de la información.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img23.png', alt='')
        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 #[em Tableau]
            p(data-aos="fade-down") Es una de las herramientas de visualización más completas y utilizadas que existen en la actualidad. Gracias a su interfaz, permite generar fácilmente visualizaciones a partir de grandes volúmenes de datos. Aunque es una herramienta paga con versiones para móvil, escritorio y soluciones en la nube, Tableau también cuenta con una versión pública gratuita que le permite al aprendiz explorar la herramienta y sacar provecho de la gran variedad de funciones y tipos de visualizaciones que tiene disponibles, además de compartirlas en línea. 
            p(data-aos="fade-down") La versión académica puede ser consultada en el siguiente enlace:
            .row
              .col-lg-8
                a.anexo.mb-4.mb-lg-0(href="https://public.tableau.com/app/discover" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p Enlace #[em web]. #[em Tableau Public]
            p(data-aos="fade-down") Para crear una visualización básica de datos en Tableau, se deben seguir los siguientes pasos:
            
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img24.png', alt='')
              figcaption Nota. Tomada de Tableau Desktop (s.f). https://www.tableau.com/sites/default/files/2022-05/Products_Desktop_Intro.png 
        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 #[em Tableau]
            .row
              .col-xl-1
                ol.lista-ol--cuadro
                  li(style="display:block")
                    .lista-ol--cuadro__vineta
                      span 1                    
              .col-xl-11
                p #[b Conectar los datos]: se deben seleccionar y recopilar los datos que se utilizan para la visualización. La plataforma Tableau permite conectar diversas fuentes de datos como hojas de cálculo, bases de datos y archivos planos, los cuales pueden ser visualizados directamente desde la herramienta, para seleccionar los atributos requeridos.
            .row
              .col-xl-1
                ol.lista-ol--cuadro
                  li(style="display:block")
                    .lista-ol--cuadro__vineta
                      span 2                    
              .col-xl-11
                p #[b Crear una vista]: una vista es una visualización creada en Tableau, la cual puede ser un cuadro, un gráfico, un mapa o una tabla de texto. La creación de vistas debe partir de la pregunta ¿qué desea saber la organización?
            .row
              .col-xl-1
                ol.lista-ol--cuadro
                  li(style="display:block")
                    .lista-ol--cuadro__vineta
                      span 3                    
              .col-xl-11
                p #[b Explorar los datos]: una vez generada la vista, esta puede ser explorada modificando sus parámetros, aumentando o disminuyendo el nivel de detalles y aplicando filtros.
  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img24.png', alt='')
            figcaption Nota. Tomada de Tableau Desktop (s.f). https://www.tableau.com/sites/default/files/2022-05/Products_Desktop_Intro.png 
        
        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 #[em Power BI]
            p(data-aos="fade-down") Es una herramienta de inteligencia de negocios, basada en la nube, que permite enlazar diferentes fuentes de datos, analizarlos y presentar dicho análisis a través de informes y paneles. Power BI, está disponible a través de aplicación de escritorio, como SaaS (<i>Software as a Service</i>) y como aplicación móvil para teléfonos y tabletas. 
            p(data-aos="fade-down") Entre las muchas ventajas de la plataforma Power BI, se destacan:
            ul.lista-ul
              li
                i.fas.fa-angle-right
                p.mb-0 Su interfaz intuitiva permite visualizar datos e interpretarlos de una forma fácil y ágil.
              li
                i.fas.fa-angle-right
                p.mb-0 Se integra fácilmente con plataformas de la empresa Microsoft como son Sharepoint, Office 365 y Dynamics 365.
              li
                i.fas.fa-angle-right
                p.mb-0 El fabricante de la plataforma Microsoft garantiza la seguridad y privacidad de los datos, ofreciendo controles de accesibilidad a nivel interno y externo.            
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img25.png', alt='')
            figcaption Nota. Tomada de Khanna (s.f). https://powerbicdn.azureedge.net/cvt-9394a7615e76e3565238e1688022efbee201671e2cbb78c8d1b1df694b985908/pictures/pages/index/blade2/powerbi-001.jpg
        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 #[em Power BI]
            p(data-aos="fade-down") La plataforma es ofrecida con diferentes tipos de licencias: licencia gratuita (Power BI Desktop y Power BI Mobile), Licencia Pro y Licencia Premium (estas últimas dos con costo). La opción gratuita, permite recopilar y analizar datos hasta de 70 fuentes diferentes y ofrece las mismas visualizaciones que la opción paga con la opción de exportar los reportes realizados en diferentes formatos. El principal limitante de esta licencia, es que no permite compartir las visualizaciones directamente con otros usuarios.
          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img25.png', alt='')
            figcaption Nota. Reproducida de Power BI Desktop. Khanna (s.f).
        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 #[em Google Charts]
            p(data-aos="fade-down") Proporciona una manera eficaz de visualizar datos en un sitio web. Desde gráficos de líneas simples hasta mapas de árboles jerárquicos complejos, la galería de gráficos de Google Charts proporciona una gran cantidad de tipos de gráficos listos para usar. La forma más común de usar Google Charts es con JavaScript, incrustado en la página web, cargando algunas bibliotecas de gráficos de Google, enumerando los datos que se van a graficar, seleccionando opciones para personalizar el gráfico y, finalmente, creando un objeto de gráfico con la identificación que elija. Luego, más adelante en la página web, creando un &lt;div&gt; con esa identificación para mostrar el gráfico de Google. 
            p(data-aos="fade-down") El código debe ser incluido en un archivo .html y visualizado desde un navegador web.               
            .row
              .col-lg-12
                a.anexo.mb-4(:href="obtenerLink('/downloads/googlecharts.pdf')" target="_blank")
                  figure
                    img(src='@/assets/curso/temas/tema1/img28.png', alt='')
            
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img26.png', alt='')

        
        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 #[em Google Charts]
            .tarjeta.actividad.p-3.mb-5(style="background-color:#C4E4FE")
              .row
                .col-lg-12
                  .row.justify-content-around.align-items-center            
                    .col-sm.mb-6.mb-sm-0
                      p.mb-0 Se incluye el siguiente enlace para descarga directa del archivo en html con el código. (Archivo: chart.html).
                    .col-auto
                      a.boton.boton--b(:href="('https://developers-dot-devsite-v2-prod.appspot.com/chart/interactive/docs/quick_start')" target="_blank")
                        span Enlace Web
                        i.fas.fa-link                
            p(data-aos="fade-down") El gráfico generado con este código, es interactivo (el usuario puede ubicar el puntero del mouse sobre las zonas del gráfico o las etiquetas para ver más información).          
            
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img29.png', alt='')
        
        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 #[em Google Charts]            
            p(data-aos="fade-down") Para cambiar el tipo de gráfico y usar por ejemplo uno de barras, solo se debe modificar la línea google.visualization.PieChart donde se especifica que es una gráfica circular y usar google.visualization.BarChart, para usar un gráfico de barras. La selección del tipo de gráfico dependerá del tipo de información a presentar, buscando que las visualizaciones seleccionadas faciliten la comprensión de la información.
            p(data-aos="fade-right") Para conocer más de esta herramienta, consultar el sitio web Google Charts.  
            .row.mb-3
              .col-lg-8
                a.anexo.mb-4.mb-lg-0(href="https://developers-dot-devsite-v2-prod.appspot.com/chart" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p Enlace #[em web]. Muestra datos en vivo en tu sitio.
            p(data-aos="fade-right") En la parte superior derecha se puede modificar el idioma del sitio web para facilitar su consulta.
            
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img29.png', alt='')
        
        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 #[em Qlik Desktop]
            p(data-aos="fade-down") Es una aplicación para el sistema operativo Windows, que permite crear visualizaciones, gráficos, cuadros de mando interactivos (<i>dashboards</i>) e informes para uso local y sin conexión. Esta herramienta, está desarrollada con el lenguaje de programación R, lenguaje de código abierto usado para el análisis estadístico y procesos de ciencias de datos.
            p(data-aos="fade-right") Su aplicación va desde los temas relacionados con finanzas y recursos humanos, hasta de #[em marketing] y ventas. Procesos que diariamente generan datos valiosos y susceptibles de ser explorados y aprovechados para hacer más competitiva la organización.
          .col-md-6           
            figure
              img(src='@/assets/curso/temas/tema1/img30.png', alt='')
            figcaption Nota. Tomada de QliK (2017). https://learning.qlik.com/pluginfile.php/98829/mod_resource/content/9/Create_Visualizations/Create_Visualizations.html

        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 #[em Plotly]
            p(data-aos="fade-down") Es una librería de código abierto, disponible para varios lenguajes entre ellos Python, Java, R y Matlab, entre otros. Por lo general, es más utilizada en Python al ser este uno de los lenguajes más populares para desarrollo, relacionados con <i>machine learning</i> e inteligencia artificial. Esta librería, soporta más de 40 tipos diferentes de gráficos para uso estadístico, financiero, geográfico y científico.
            p(data-aos="fade-right") Plotly permite a los usuarios de Python crear visualizaciones interactivas basadas en web que pueden ser usadas en un cuaderno Jupyter, guardadas como archivos HTML independientes o incluidas en aplicaciones web construidas con Python y la librería DASH.
          .col-md-6            
            figure
              img(src='@/assets/curso/temas/tema1/img31.png', alt='')
            figcaption Nota. Tomada de Geomapik (2019). http://www.geomapik.com/wp-content/uploads/2019/08/Screenshot_20190806_110520.png 

        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 #[em Plotly]
            p(data-aos="fade-down") Permite también la creación de gráficos de mapas usados en proyectos de ciencias de datos cuando se tienen datos geográficos; por ejemplo, para representar frecuencias (mapas térmicos).
          .col-md-6            
            figure
              img(src='@/assets/curso/temas/tema1/img32.png', alt='')

        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 #[em Looker Studio]
            p(data-aos="fade-down") Conocida anteriormente como “Google Data Studio”, Looker Studio es una herramienta que permite conectar fuentes de datos para crear cuadros de mando interactivos (<i>dashboards</i>) orientada a la inteligencia de negocios y a la toma de decisiones a nivel empresarial.
          .col-md-6            
            figure
              img(src='@/assets/curso/temas/tema1/img33.png', alt='')
            figcaption Nota. Tomada de Google Analytics Marketing Website (s.f). https://datastudio.google.com/u/0/reporting/0B_U5RNpwhcE6SF85TENURnc4UjA/preview/ 

    h3(data-aos="zoom-in-left").my-5  Creación de #[em dashboards]

    .row.justify-content-center.mb-5
      .col-md-2.bloque_vertical1.d-none.d-md-block.mb-md-0
      .col-md-10.mb-md-0
        .px-2
          p.mb-0 Un <i>dashboard</i> (o tablero de control) es una herramienta para la gestión de la información, que permite monitorear y analizar, de forma visual y centralizada, los indicadores claves de desempeño (KPIs), métricas y demás datos importantes para la organización. Es entonces, una especie de “resumen” que recopila los principales datos y los presenta en <i>stakeholders</i> para que se pueda consultar solo la información necesaria. Entre las principales características de un <i>dashboard</i> se encuentran:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Personalización")
            .col-md-12.mb-4.mb-md-0
              p Los #[em dashboards] muestran únicamente la información relevante para el departamento o el #[em stakeholder] que la recibe. Una organización podrá tener varios tableros de control según sus áreas o proyectos y el contenido de estos será diferente según las necesidades y preguntas a responder.          
          .row(titulo="Visual")
            .col-md-12.mb-4.mb-md-0
              p Los tableros de control presentan su información de una forma visual y atractiva aprovechando la diversidad de gráficas y distintivos existentes (flechas, colores, cifras resaltadas) para facilitar al usuario la comprensión y aprovechamiento de la información allí presentada.
          .row(titulo="Tiempo real")
            .col-md-12.mb-4.mb-md-0
              p En algunos casos, los #[em dashboards] están conectados directamente con fuentes de información activas (las cuales continúan recibiendo datos) permitiendo que la información presentada esté actualizada y mostrando los valores de los indicadores en tiempo real.
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img35.png', alt='')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-right") A continuación, se presentan los pasos sugeridos para la creación de un #[em dashboard] útil y eficaz para la organización.
    
    .row.justify-content-center.align-items-center.mb-5      
      .col-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/tema1/img36.svg", alt="alt").m-auto 
      .col-lg-10
        TabsA.color-acento-botones.mb-5
          .tarjeta.clr-paleYellow.p-4(titulo="Establecer el <br>objetivo<br> del <em>dashboard</em>")(style="background-color: #DBEEFE")
            p Para iniciar la creación del tablero de control es necesario saber cuál es el objetivo de éste, qué pregunta (o preguntas) de la organización queremos responder. Por ejemplo, ¿la organización quiere analizar las ventas para mejorarlas e incrementarlas para mejorar los ingresos?, ¿se quiere hacer seguimiento al avance y ejecución de los proyectos?

          .tarjeta.clr-paleYellow.p-4(titulo="Identificar el público<br> objetivo")(style="background-color: #DBEEFE")
            p Es importante tener claridad sobre el objetivo del <i>dashboard</i> a diseñar. Cada área de la organización y sus colaboradores, tendrá diferentes conocimientos e intereses, y si esto no se tiene en cuenta, se corre el riesgo de presentar en ellos información diferente a la requerida o en términos que no sean fáciles de entender. 

          .tarjeta.clr-paleYellow.p-4(titulo="Definir las métricas")(style="background-color: #DBEEFE")
                  p Se deben seleccionar las principales métricas que ayuden a dar respuesta a las preguntas formuladas o que estén relacionadas. Si el indicador seleccionado no aporta a la temática en cuestión, posiblemente genere ruido en la visualización y deba ser eliminado. Entre los indicadores seleccionados es importante incluir los KPI (Key Performance Indicators) o indicadores claves de desempeño, utilizados por la organización, para evaluar su éxito en alcanzar diversos objetivos.

          .tarjeta.clr-paleYellow.p-4(titulo="Diseñar e <br>implementar<br>  el <em>dashboard</em>")(style="background-color: #DBEEFE")
            p Una vez definidas las métricas e información a presentar, y teniendo en cuenta la herramienta a emplear, se definirán las herramientas gráficas adecuadas según el tipo de información y el público objetivo. Es muy importante, antes de publicar el acceso al tablero de control, validar la calidad y veracidad de la información presentada, confirmar que las visualizaciones seleccionadas se muestran correctamente y que la información presentada responde a los objetivos definidos en el primer paso.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-right") Para seleccionar la gráfica adecuada según el tipo de variable(s), se sugiere revisar la siguiente infografía:
    figure
          img(src="@/assets/curso/temas/tema1/img37.png", alt="alt")
        
    h3(data-aos="zoom-in-left").my-5  Tipos de fuentes de información según su origen
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="zoom-in-left")
          .bloque-texto-g__img(:style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img38.png')})`}")
          .bloque-texto-g__texto.p-4
            p Los datos a utilizar en los proyectos de ciencias de datos, pueden tener diferentes orígenes o fuentes, siendo necesario para cada una, utilizar diversas metodologías de captura y procesamiento, según sean estructurados o no. Los datos estructurados son aquellos que tienen un formato definido y específico (como el que se encuentra en las bases de datos), mientras que los datos no estructurados no tienen una estructura o formato fijo haciendo más complicada su gestión (cabe anotar que más del 80 % de los datos de una organización son de este tipo).
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-right") Según su origen, se pueden clasificar las fuentes de información como:
    
    .tarjeta.tarjeta--verde.p-4.mb-4
      LineaTiempoC.color-acento-botones(text-small)
        .row.justify-content-center.align-items-center.mb-5(titulo="Paso 1")
          .col-md-6.mb-4.mb-md-0
            h3 Biométricas
            p Hace referencia a la identificación automática de personas basada en sus características anatómicas (huella, retina, ADN).
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img39.png', alt='')
          
        .row.justify-content-center.align-items-center.mb-5(titulo="Paso 2")
          .col-md-6.mb-4.mb-md-0
            h3 Máquina a máquina
            p Son aquellos datos compartidos directamente entre dos o más dispositivos como lo permite el Internet de las cosas (IoT). Por ejemplo, los <i>chips</i> NFC (Near Field Communication) que permiten la transmisión de datos de forma inalámbrica y segura con dispositivos como el teléfono celular para la realización de pagos sin contacto.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img40.png', alt='')
          
        .row.justify-content-center.align-items-center.mb-5(titulo="Paso 3")
          .col-md-6.mb-4.mb-md-0
            h3 Datos de transacciones
            p Son los datos que se generan y registran en los procesos de venta y facturación de la organización y demás operaciones habituales. Pueden ser registrados usando <i>software</i> diseñado para tal fin, o todavía en algunos casos, de forma física y manual.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img41.png', alt='')
          
        .row.justify-content-center.align-items-center.mb-5(titulo="Paso 4")
          .col-md-6.mb-4.mb-md-0
            h3 Generados por los humanos
            p En esta categoría se incluyen las comunicaciones realizadas por las personas usando diferentes canales: llamadas, grabaciones, servicio de atención al cliente, correos electrónicos, registros médicos y demás.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img42.png', alt='')
        
        .row.justify-content-center.align-items-center.mb-5(titulo="Paso 5")
          .col-md-6.mb-4.mb-md-0
            h3 Medios sociales
            p Son aquellos datos que se originan en la red y los medios digitales disponibles como redes sociales (Facebook, Instagram, YouTube, Twitter, LinkedIn), buscadores (Google, Bing, Yahoo) y sitios web.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img43.png', alt='')
          
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
