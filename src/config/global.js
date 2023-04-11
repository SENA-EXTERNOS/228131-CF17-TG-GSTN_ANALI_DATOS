export default {
  global: {
    componenteFormativo: 'Visualización de datos',
    descripcionCurso:
      'La visualización de datos es la representación gráfica de la información, mediante el uso de herramientas visuales como gráficos, mapas y tableros de control, permitiendo así una mejor comunicación de los resultados. En la ciencia de datos las técnicas de visualización, son de gran importancia para el análisis de datos y la toma de decisiones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Ventajas y beneficios de la visualización de datos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Despliegue de visualizaciones en Internet',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Ventajas y beneficios de la visualización de datos',
      referencia:
        'Microsoft Learn. (2022). <em>Tipos de visualización en Power BI</em>.',
      tipo: 'Sitio <em>web</em>',
      link:
        'https://learn.microsoft.com/es-es/power-bi/visuals/power-bi-visualization-types-for-reports-and-q-and-a',
    },
    {
      tema: 'Ventajas y beneficios de la visualización de datos',
      referencia: '<em>Tableau public. (2022). Discover</em>.',
      tipo: 'Sitio <em>web</em>',
      link: 'https://public.tableau.com/app/discover',
    },
    {
      tema: 'Ventajas y beneficios de la visualización de datos',
      referencia: '<em>Google Developers</em>. (2022). <em>Charts</em>. ',
      tipo: 'Sitio <em>web</em>',
      link: 'https://developers-dot-devsite-v2-prod.appspot.com/chart ',
    },
    {
      tema: 'Ventajas y beneficios de la visualización de datos',
      referencia:
        'IBM. (2021). <em>Conceptos básicos de ayuda de CRISP DM</em>. ',
      tipo: 'Sitio <em>web</em>',
      link:
        'https://www.ibm.com/docs/es/spss-modeler/saas?topic=dm-crisp-help-overview ',
    },
  ],
  glosario: [
    {
      termino: 'Computación en la nube',
      significado:
        '(<em>cloud computing</em>) es una tecnología que permite acceder de manera remota a recursos de almacenamiento, procesamiento, servidores y demás según las necesidades de la organización permitiendo así ahorrar costos en infraestructura y mantenimiento.',
    },
    {
      termino: 'Cuartiles',
      significado:
        'son valores que dividen un grupo de datos en cuatro grupos que contienen aproximadamente la misma cantidad de observaciones.',
    },
    {
      termino: '<em>Dashboard</em>',
      significado:
        'es una herramienta de visualización de datos que permite monitorizar, analizar y mostrar de manera visual los indicadores clave de desempeño.',
    },
    {
      termino: '<em>Framework</em>',
      significado:
        'es un esquema o marco de trabajo, un conjunto de prácticas y conceptos estandarizados que brindan la estructura base para elaborar un proyecto específico.',
    },
    {
      termino: '<em>Geomaps</em>',
      significado:
        'son visualizaciones que se utilizan habitualmente para comparar valores y mostrar categorías entre regiones geográficas. Los gráficos de mapa son más útiles cuando los datos contienen información geográfica (países, regiones, estados, ciudades, códigos postales, etc.).',
    },
    {
      termino: '<em>HTML</em>',
      significado:
        'lenguaje de marcado de hipertexto, del inglés HyperText Markup Language es el código que se utilizar para estructurar una página web y sus contenidos.',
    },
    {
      termino: '<em>KPI</em>',
      significado:
        'indicador clave de desempeño, del inglés Key Perfomance Indicator es una métrica que se emplea para resumir la información sobre la eficacia y productividad de las acciones que se llevan a cabo en una organización.',
    },
    {
      termino: 'Librería',
      significado:
        'es un conjunto de archivos compuestos de código y datos, utilizados para desarrollar <em>software</em>.',
    },
    {
      termino: '<em>SaaS</em>',
      significado:
        '<em>software</em> como servicio, del inglés <em>Software as a Service</em>, permite a los usuarios conectarse y utilizar aplicaciones basadas en la nube utilizando el Internet. El <em>software</em> o la aplicación no está instalada en los equipos de la organización.',
    },
    {
      termino: '<em>Stakeholders</em>',
      significado:
        'son actores internos o externos a la organización que tienen algún tipo de relación o interés con esta o que son afectados positiva o negativamente por las acciones y proyectos ejecutados.',
    },
  ],
  referencias: [
    {
      referencia:
        'Fernández, A. (2020). <em>Ciencia de datos para la ciberseguridad</em>. RAMA.',
      link:
        'https://www.alphaeditorialcloud.com/reader/ciencia-de-datos-para-la-ciberseguridad-1628020600?location=eyJjaGFwdGVySHJlZiI6IngwMiIsImNmaSI6Ii80W3gwMl0vMi8yW19pZENvbnRhaW5lcjAwMl0vMiJ9 ',
    },
    {
      referencia:
        'García, J. (2018). <em>Ciencia de datos. Técnicas analíticas y aprendizaje estadístico en un enfoque práctico</em>. Editorial Altaria.',
      link:
        'https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/reader/ciencia-de-datos?location=1',
    },
    {
      referencia: 'Geomapik. (2019). <em>Graphing libraries</em>.',
      link: 'http://www.geomapik.com',
    },
    {
      referencia:
        'Jones, H. (2019). <em>Ciencia de los datos: la guía definitiva sobre análisis de datos, minería de datos, almacenamiento de datos, visualización de datos</em>.',
      link:
        'https://biblioteca.sena.edu.co/F/QK1UI7RDS4Q5XCEJHTEG681M74XTARHJQABMVRV1F1YV8U8ELM-13705?func=full-set-set&set_number=003407&set_entry=000001&format=999',
    },
    {
      referencia:
        'Joyanes, L. (2015). <em>Sistemas de información en la empresa</em>. Alfaomega',
    },
    {
      referencia: 'Khanna (s.f). <em>Power BI Desktop</em>.',
      link:
        'https://powerbicdn.azureedge.net/cvt-9394a7615e76e3565238e1688022efbee201671e2cbb78c8d1b1df694b985908/pictures/pages/index/blade2/powerbi-001.jpg',
    },
    {
      referencia:
        'Microsoft Learn. (2022). <em>Descubra su ruta de aprendizaje</em>.',
      link: 'https://learn.microsoft.com/es-es/training/',
    },
    {
      referencia:
        'Maptive. (2020). <em>Apping software for every professional</em>.',
      link: 'https://www.maptive.com ',
    },
    {
      referencia:
        'Orbegozo, B. (2019). <i>Gestión de bases de datos con SQL, MySQL y Access</i>. Alfaomega.',
    },
    {
      referencia:
        'Piattini, M. y Ruiz, F. (2020). <em>Gobierno y gestión de las tecnologías y los sistemas de información</em>. Ra-Ma.',
      link:
        'https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/reader/gobierno-y-gestion-de-las-tecnologias-y-los-sistemas-de-informacion-1591724977',
    },
    {
      referencia:
        'QliK. (2917). <em>How do I create a visualization</em> [Video].',
      link:
        'https://learning.qlik.com/pluginfile.php/98829/mod_resource/content/9/Create_Visualizations/Create_Visualizations.html',
    },
    {
      referencia:
        'TuDashboard. (2 de agosto de 2021). <em>Ejemplos de gráficas para un dashboard</em>.',
      link: 'https://tudashboard.com/tipos-de-visualizacion-de-datos/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
