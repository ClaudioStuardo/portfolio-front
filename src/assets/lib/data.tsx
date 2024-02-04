import adobephotoshopicon from "../../assets/icons/adobephotoshopicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import sequelizeicon from "../../assets/icons/sequelizeicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import mysqlicon from "../../assets/icons/mysqlicon.svg";
import profilepicture from "../img/me2.webp";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    es: "Hola, soy Claudio",
    en: "Hi, I'm Claudio",
  },
  subtitle: "Fullstack Developer",
  description: {
    es: "Mi nombre es Claudio, desarrollador fullstack e ingeniero informático con más de 4 años de experiencia en gestión de proyectos de tecnologías de la información, trabajando en StartUp. Especialista en el área de Tecnología y Gestión particularmente en el desarrollo de aplicaciones, gestión y liderazgo de equipos, optimización de procesos, entre otros.",
    en: "My name is Claudio, a fullstack developer and software engineer with more than 4 years of experience. Experience in information technology project management, working at StartUp. Specialist in the area of ​​Technology and Management, particularly in the development of applications, team management and leadership, process optimization, among others.",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        es: "Contacto",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        es: "Mis Proyectos",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Proximamente",
    description:
      "Pronto publicaré mis próximos proyectos como freelance",
    description_EN:
      "Soon I will publish my next freelance projects",
    technologies: [],
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    es: "Más Proyectos en Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Adobe Photoshop",
        hash: "#Adobe Photoshop",
        icon: adobephotoshopicon,
        color: "#001D34",
      },
    ],
  },
] as const;

export const skillsDataDB = [
  {
    skillsTitle: "Database",
    skills: [
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Sequelize",
        hash: "#Sequelize",
        icon: sequelizeicon,
        color: "#03AFEF",
      },
      {
        title: "MySQL",
        hash: "#MySQL",
        icon: mysqlicon,
        color: "#E38D1A",
      },
    ],
  },
] as const;

export const navLinks = [
  { es: "Inicio", en: "Home", hash: "#home", icon: GoHome },
  { es: "Habilidades", en: "Skills", hash: "#skills", icon: GoStack },
  { es: "Proyectos", en: "Projects", hash: "#projects", icon: GoProject },
  { es: "Contacto", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { es: "Privacidad", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:claudio.stuardo96@gmail.com",
  text: "claudio.stuardo96@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/claudio-stuardo-godoy/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/ClaudioStuardo",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:claudio.stuardo96@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    es: '"El éxito no es el resultado de un golpe de suerte, sino de una combinación de determinación, dedicación y un firme compromiso de perseguir tus sueños hasta convertirlos en realidad."',
    en: `"Success is not the result of a stroke of luck, but rather a combination of determination, dedication and a firm commitment to pursuing your dreams until they become a reality."`,
    author: "",
  },
  {
    es: '"La web es como un lienzo y el código es la pintura. Crea tu obra maestra."',
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const contactData = {
  title: {
    es: "Contacto",
    en: "Contact",
  },
  description: {
    es: "Escríbeme un mensaje y me comunicaré contigo.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        es: "Nombre",
        en: "Name",
      },
      type: "text",
      validation: {
        es: "Por favor, complete su nombre",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        es: "E-Mail",
        en: "E-Mail",
      },
      type: "email",
      validation: {
        es: "Por favor, complete su email",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        es: "Asunto",
        en: "Subject",
      },
      type: "text",
      validation: {
        es: "Por favor, complete su asunto",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      es: "Mensaje",
      en: "Message",
    },
    name: "message",
    rows: 10,
    validation: {
      es: "Por favor, complete su mensaje",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      es: "Enviar",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      es: "Acepto que Claudio pueda utilizar mis datos personales (nombre y dirección de correo electrónico) para contactarme.",
      en: "I agree that Claudio may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      es: "Al enviar esta solicitud, usted reconoce que ha leído la Política de Privacidad",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    es: "🚀 La demostración en vivo se abrirá en breve. Iniciando servidores...",
    en: "🚀 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    es: "🚀 Gracias por su correo electrónico. Me comunicaré contigo lo antes posible.",
    en: "🚀 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    es: "🚀 Lamentablemente el envío de su correo electrónico no funcionó. Por favor, inténtelo de nuevo más tarde",
    en: "🚀 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    es: "Por favor, ponga su nombre",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    es: "ES",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
