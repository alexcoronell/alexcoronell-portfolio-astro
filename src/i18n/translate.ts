import { personalData } from "../core/data/personalData";
import menuItems from "../core/data/menuItems";
import { type PersonalData } from "../core/types/PersonalData";
import { type MenuItem } from "../core/models/MenuItem.interface";
import { type Status } from "../core/types/PersonalData";

const presentacionCorta =
  "Soy un desarrollador full-stack con 5 años de experiencia. Me dedico principalmente al desarrollo frontend, pero también tengo experiencia en desarrollo backend.";
const tituloPresentacionLarga =
  "Los píxeles son mi pasión, los servidores mi patio de recreo: ¡Conoce a Alex Coronell!";
const presentationLarga = [
  "Soy Alex Coronell, un desarrollador full-stack con alma front-end. Como arquitecto digital, esculpo interfaces con píxeles perfectos usando Angular, React y la estrella en ascenso, Astro, ampliando los límites de las experiencias web con cada línea de código. Pero no se deje engañar por la llamativa fachada del front-end: también soy aprendiz de backend y descifro la magia de NestJS y NodeJS para construir bases sólidas del lado del servidor.",
  "Claro, es posible que todavía esté dominando algunos hechizos del lado del servidor, pero mi pasión por crear soluciones integradas y completas brilla intensamente. Para mí, el código es una sinfonía de lógica y creatividad, donde resolver desafíos es una forma de arte. Ya sea que se trate de crear interfaces de usuario cautivadoras, desenredar la lógica de backend o aventurarse en el ámbito de las aplicaciones de escritorio con Electron, cada proyecto es un lienzo que espera ser salpicado de innovación.",
  'Pero no soy sólo un desarrollador en solitario; Soy un colaborador, un aprendiz constante impulsado por el poder de "nosotros". Mi viaje en la tecnología apenas comienza, pero mi curiosidad ilimitada y mi impulso implacable me mantienen superando los límites. Entonces, ya sea que necesite un mago de front-end para pintar su visión digital, un aprendiz de backend ansioso por aprender o simplemente un compañero de equipo apasionado con quien codificar, soy su persona. ¡Construyamos algo increíble juntos!',
];
const catapultSteelBuildingFunctions = [
  "Desarrollador web de las páginas oficiales de la empresa en tecnologías como Astro, Angular y React.",
  "Desarrollador de un robot de compras automatizado utilizando ElectronJS.",
  "Desarrollador completo de una solución CMR para gestionar clientes, clientes potenciales y generar cotizaciones. En desarrollo con NestJS, Angular y Postgres.",
  "Administración de dominios y hosting.",
  "Administración del sistema CRM SuiteCRM.",
  "Administración de AWS.",
];
const micropointFunctions = [
  "Gerente Regional de TI de la empresa Totto en Antioquia.",
  "Helpdesk y soporte en sitio para Grupo Uribe.",
  "Apoyo a la implementación del Centro de Servicios Digitales de Sura.",
  "Servicio técnico para impresoras láser, ordenadores de sobremesa y portátiles.",
  "Servicio al Cliente.",
];

const alianzaGraficaFunctions = [
  "Preparación y ajuste de diseños para el proceso de impresión digital.",
  "Uso de Adobe Illustrator, Adobe InDesign, Adobe Acrobat, Adobe Photoshop, Enfocus PitStop Pro y Kodak Preps 5.3.",
  "Uso del controlador Konica Job Center y la estación de trabajo Fiery Command.",
  "Operación de equipos de impresión Konica Minolta Bizhub Press C6000 y Konica Minolta Bizhub Press C1085.",
  "Realización de mantenimiento preventivo y correctivo en las impresoras Konica Minolta Bizhub Press C6000 y Konica Minolta Bizhub Press C1085.",
];

const gloditecFunctions = [
  "Reparación y mantenimiento de impresoras Ricoh, Konica Minolta y Sindoh.",
  "Instalación de impresoras en redes corporativas.",
  "Configuración de impresoras básicas y multifuncionales en equipos informáticos.",
];

const propcFunctions = [
  "Gestión de compras e inventarios.",
  "Coordinación en la implementación, instalación y puesta en marcha de los equipos de computación y tecnología adquiridos por nuestros clientes corporativos.",
];

const atbFunctions = [
  "Administración de redes cableadas e inalámbricas.",
  "Administración de BladeCenter.",
  "Administración de servidores Linux, Windows Server 2008, Windows Server 2012 (Active Directory, Servidor DHCP, Servidor de Impresión, DNS).",
  "Administración de SQL Server 2008R2.",
  "Administración básica de MySQL (Copias de seguridad)",
  "Gestión de impresoras.",
  "Sincronización de bases de datos.",
  "Soporte técnico de equipos de cómputo e impresoras.",
  "Compras de consumibles y equipos.",
];

const avilaTvFunctions = [
  "Asistente de producción",
  "Impresión y distribución de guiones técnicos y literales",
  "Asistencia en el proceso de edición de vídeo",
  "Asistencia en entrevistas de campo",
];

const retcaFunctions = [
  "Encargado del Departamento de Sistemas en sucursal y de la generación e impresión de facturas y notas de crédito y débito en las líneas Samsung, Aiwa, Haier, Scott-Tamashi.",
  "Operador de sistemas HP3000 y PeopleSoft-JDE.",
  "Soporte técnico para usuarios.",
  "Reparación y mantenimiento de equipos informáticos.",
  "Asistente en la administración de redes locales, remotas e inalámbricas.",
  "Administración del enrutador.",
  "Mantenimiento preventivo y correctivo de impresoras",
];

const tecnocorsaFunctions = [
  "Generación e impresión de facturas.",
  "Operador Santo Administrativo.",
  "Relación de compras y ventas para el cálculo del pago del I.S.L.V. (I.V.A.).",
  "Rellenar formularios de pago de impuestos.",
];

const hydroclimaFunctions = [
  "Codificación de carpetas para su posterior carga en el sistema contable computarizado.",
  "Operador del sistema de contabilidad.",
  "Conciliación bancaria.",
  "Archivo de facturas de compra y venta.",
  "Relación para el pago del I.S.L.V. (Impuesto sobre las ventas)",
];

export const translate = (lang: string): PersonalData => {
  if (lang === "es") {
    const personalDataEs = personalData;
    personalDataEs.shortPresentation = presentacionCorta;
    personalDataEs.titleLongPresentation = tituloPresentacionLarga;
    personalDataEs.longPresentation = presentationLarga;

    personalDataEs.experiences[indexExperience(10)].functions =
      catapultSteelBuildingFunctions;
    personalDataEs.experiences[indexExperience(9)].functions =
      micropointFunctions;
    personalDataEs.experiences[indexExperience(8)].functions =
      alianzaGraficaFunctions;
    personalDataEs.experiences[indexExperience(7)].functions =
      gloditecFunctions;
    personalDataEs.experiences[indexExperience(6)].functions = propcFunctions;
    personalDataEs.experiences[indexExperience(5)].functions = atbFunctions;
    personalDataEs.experiences[indexExperience(4)].functions = avilaTvFunctions;
    personalDataEs.experiences[indexExperience(3)].functions = retcaFunctions;
    personalDataEs.experiences[indexExperience(2)].functions =
      tecnocorsaFunctions;
    personalDataEs.experiences[indexExperience(1)].functions =
      hydroclimaFunctions;
    return personalDataEs;
  } else {
    return personalData;
  }
};

export const translateMenu = (lang: string) => {
  if (lang === "es") {
    const menuItemsEs: MenuItem[] = [
      { name: "Acerca de Mi", url: "#AcercaDeMi" },
      { name: "Habilidades", url: "#Habilidades" },
      { name: "Portafolio", url: "#Portafolio" },
      { name: "Experiencia", url: "#Experiencias" },
      { name: "Contacto", url: "#Contacto" },
    ];
    return menuItemsEs;
  } else {
    return menuItems;
  }
};

export const translateStatusWork = (status: Status, lang: string): string => {
  if (!lang) return status;
  switch (status) {
    case "active":
      return "Activo";
    case "inactive":
      return "Inactivo";
    case "Developing":
      return "En Desarrollo";
    default:
      return status;
  }
};

const indexExperience = (order: number) =>
  personalData.experiences.map((item) => item.order).indexOf(order);
