/*
  ============================================================
   DATOS DE TU PÁGINA DE PERFIL
   Este es el ÚNICO archivo que necesitas editar para cambiar
   la información de la página. Cambia el texto que está entre
   comillas y guarda. No borres las comas ni las comillas.
  ============================================================
*/
window.PERFIL = {
  nombre: "Miguel Ángel Martínez Barrera",
  nombreCorto: "Miguel Martínez",
  cargo: "Coordinador de Proyectos · Mejora Continua · Transformación Digital",
  sello: "Lean Six Sigma Black Belt",
  empresa: "Takami S.A.",                 // empresa actual (aparece junto a tu nombre)
  ubicacion: "Bogotá D.C., Colombia",
  foto: "foto.jpg",

  // Muestra la etiqueta verde "Abierto a nuevos retos". Pon false para ocultarla.
  disponible: true,
  textoDisponible: "Abierto a nuevos retos",

  // Frase corta que aparece debajo del nombre
  frase: "Convierto procesos en resultados: lidero proyectos de mejora continua, automatización e inteligencia artificial que ahorran tiempo, ordenan la operación y se sostienen en el tiempo.",

  contacto: {
    telefono: "+57 310 888 1538",
    whatsapp: "573108881538",            // solo números, con el 57 de Colombia
    correo: "miguelmbarrera.24@gmail.com",
    linkedin: "https://www.linkedin.com/in/miguel-angel-martinez-barrera/",
    hojaDeVida: ""                        // nombre de un PDF para mostrar el botón de descarga; "" lo oculta
  },

  alcanceTitulo: "Alcance de mi trabajo en Takami S.A. · grupo de restaurantes",
  alcance: [
    { cifra: "+8 años", texto: "en Takami, industria de alimentos" },
    { cifra: "45 sedes", texto: "de Takami, más planta de producción y CEDI" },
    { cifra: "6 compañías", texto: "del grupo Takami con soluciones en ampliación" },
    { cifra: "1.500", texto: "colaboradores de Takami en procesos de adopción" }
  ],

  sobreMi: [
    "Soy Administrador de Empresas, Magíster en Negocios Internacionales y Lean Six Sigma Black Belt del Tecnológico de Monterrey.",
    "Desde 2018 trabajo en Takami S.A., grupo de restaurantes con 45 sedes, planta de producción y centro de distribución. Allí lidero proyectos de transformación: desde el diagnóstico y la priorización hasta la implementación, la gestión del cambio y la sostenibilidad de los resultados. Me apasiona unir la tecnología con la operación para que los equipos trabajen mejor y decidan con datos."
  ],

  // Tipos de icono disponibles: mejora, automatizacion, digital, cambio, ia, erp
  impacto: [
    { icono: "mejora", titulo: "Mejora continua", detalle: "Rediseño y estandarización del cierre de inventarios en todas las sedes de Takami con DMAIC.", resultado: "-50 % en tiempo de procesamiento" },
    { icono: "automatizacion", titulo: "Automatización de procesos", detalle: "Flujos automáticos con N8N e IA en procesos administrativos, de compras y de logística.", resultado: "Hasta -50 % de horas operativas" },
    { icono: "digital", titulo: "Transformación digital", detalle: "Soluciones digitales propias integradas al ERP para el cierre diario y el seguimiento del portafolio.", resultado: "Ampliación a 6 compañías del grupo Takami" },
    { icono: "cambio", titulo: "Gestión del cambio", detalle: "Adopción de plataformas corporativas como BUK y el ERP, con manuales, capacitación y acompañamiento.", resultado: "1.500 colaboradores de Takami" },
    { icono: "ia", titulo: "Adopción de IA", detalle: "Inteligencia artificial para automatizar tareas, analizar datos y construir tableros.", resultado: "Decisiones más rápidas con datos" },
    { icono: "erp", titulo: "ERP e integración", detalle: "Implementación de módulos y facturación electrónica, e integración de sistemas entre áreas.", resultado: "Facturación electrónica en las 45 sedes de Takami" }
  ],

  experiencia: [
    { cargo: "Coordinador de Proyectos Tecnológicos", empresa: "Takami S.A.", fechas: "mar. 2026 – actual", actual: true,
      logros: ["Lidero un equipo de 4 personas y el portafolio de proyectos estratégicos.", "Automatización con N8N e IA: hasta 50 % menos horas operativas en cargos administrativos.", "Soluciones digitales propias integradas al ERP, en ampliación a 6 compañías."] },
    { cargo: "Analista de Sistemas de Información", empresa: "Takami S.A.", fechas: "dic. 2018 – feb. 2026",
      logros: ["Proyecto Black Belt: 50 % menos tiempo en el cierre de inventarios.", "Implementación del ERP Siesa y de la facturación electrónica en 45 sedes.", "Adopción de BUK para 1.500 colaboradores."] },
    { cargo: "Analista de Compras", empresa: "Takami S.A.", fechas: "2018",
      logros: ["Planeación de compras con MRP y mejora de la rotación de inventario."] },
    { cargo: "Asesor Integral de Servicios", empresa: "BBVA Colombia", fechas: "mar. 2017 – abr. 2018",
      logros: ["Asesoría a clientes y metas comerciales de seguros y tarjetas de crédito."] }
  ],

  formacion: [
    { titulo: "Magíster en Negocios Internacionales", lugar: "Politécnico Grancolombiano", anio: "2026" },
    { titulo: "Administrador de Empresas", lugar: "Politécnico Grancolombiano", anio: "2017" }
  ],

  // nivel: negro, verde, amarillo u otro (para cursos que no son cinturones)
  certificaciones: [
    { titulo: "Lean Six Sigma Black Belt", lugar: "Tecnológico de Monterrey", anio: "2025", nivel: "negro" },
    { titulo: "Lean Six Sigma Green Belt", lugar: "Universidad Sergio Arboleda", anio: "2022", nivel: "verde" },
    { titulo: "Lean Six Sigma Yellow Belt", lugar: "Universidad Sergio Arboleda", anio: "2020", nivel: "amarillo" },
    { titulo: "Scrum Master", lugar: "Universidad de La Sabana", anio: "2022", nivel: "otro" },
    { titulo: "Automatización de procesos con N8N", lugar: "Formación en flujos automatizados", anio: "", nivel: "otro" }
  ],

  competencias: [
    "Gestión de portafolio de proyectos", "Lean Six Sigma · DMAIC", "Excelencia operacional",
    "Gestión del cambio", "Análisis de brechas", "Estandarización de procesos",
    "Gestión del conocimiento", "KPI y tableros de control", "Transformación digital",
    "Automatización e IA", "Implementación de ERP", "Scrum"
  ],

  herramientas: [
    "Excel avanzado", "Office 365", "ERP Siesa", "N8N", "Jira", "Asana",
    "Notion", "Google Cloud", "BUK", "Tableau", "Power BI", "IA generativa"
  ],

  idiomas: "Español nativo · Inglés básico",
  actualizado: "Noviembre 2026"
};
