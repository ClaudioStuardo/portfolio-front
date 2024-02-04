import React from "react";
import { useLanguage } from "../context/language-context";
// import { Link } from "react-router-dom";

const Privacy = () => {
  const { language } = useLanguage();

  return (
    <React.Fragment>
      {language === "ES" ? (
        <article className="flex flex-col gap-6 max-w-[70vw] break-words">
          <h1>Política de Privacidad</h1>
          <p>Fecha de última actualización: 04/02/2024</p>
          <br />
          <p>Esta Política de Privacidad describe cómo Claudio Stuardo ("nosotros", "nos" o "nuestra") recopila, utiliza y comparte información personal cuando utilizas nuestros servicios, incluyendo nuestro sitio web, aplicaciones móviles y cualquier otro servicio en línea proporcionado por nosotros (colectivamente, los "Servicios").</p>
          <br /><br />
          <h3>1. Información que Recopilamos</h3>
          <p>Podemos recopilar información personal que nos proporcionas directamente cuando interactúas con nuestros Servicios, como cuando te registras para una cuenta, realizas una compra, completas formularios en línea, nos envías correos electrónicos o participas en encuestas.</p>

          <p>La información que podemos recopilar incluye, entre otros:</p>

          <ul>
            <li>Información de contacto, como tu nombre y dirección de correo electrónico.</li>
            <li>Información de uso del Servicio, como la forma en que interactúas con nuestro sitio web o aplicaciones.</li>
          </ul>
          <br />
          <h3>2. Uso de la Información</h3>
          <p>Utilizamos la información recopilada para:</p>

          <ul>
            <li>Proporcionar y mantener nuestros Servicios.</li>
            <li>Enviar comunicaciones, incluyendo actualizaciones y promociones.</li>
            <li>Cumplir con nuestras obligaciones legales y resolver disputas.</li>
            <li>Personalizar y mejorar la experiencia del usuario.</li>
          </ul>
          <br />
          <h3>3. Compartir Información</h3>
          <p>No compartimos tu información personal con terceros, excepto cuando sea necesario para brindar nuestros Servicios o cuando lo requiera la ley.</p>
          <br />
          <h3>4. Cookies y Tecnologías Similares</h3>
          <p>Utilizamos cookies y tecnologías similares para mejorar la experiencia del usuario y recopilar información sobre el uso de nuestros Servicios.</p>
          <br />
          <h3>5. Seguridad</h3>
          <p>Implementamos medidas de seguridad para proteger tu información personal y tomamos precauciones razonables para garantizar su confidencialidad.</p>
          <br />
          <h3>6. Cambios a esta Política de Privacidad</h3>
          <p>Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre cambios significativos mediante la publicación de la nueva política en esta página.</p>
          <br />
          <h3>7. Contacto</h3>
          <p>Para cualquier pregunta sobre esta Política de Privacidad, contáctanos a través de claudio.stuardo96@gmail.com.</p>

          <br /><br />
          <h4>Claudio Stuardo</h4>
          <h4>Santiago, Chile</h4>
          <h4>+569 88211728</h4>
          <h4>claudio.stuardo96@gmail.com</h4>

          <p>Fecha de última actualización: 04/02/2024</p>
        </article>
      ) : (
        <article className="flex flex-col gap-6 max-w-[70vw] break-words">
          <h1>Privacy Policy</h1>
          <p>Date for last update: 04/02/2024</p>
          <br />
          <p>This Privacy Policy describes how Claudio Stuardo ("we," "us," or "our") collects, uses, and shares personal information when you use our services, including our website, mobile applications, and any other online services provided by us (collectively, the "Services").</p>
          <br /><br />
          <h3>1. Information We Collect</h3>
          <p>We may collect personal information that you directly provide to us when you interact with our Services, such as when you register for an account, make a purchase, complete online forms, send us emails, or participate in surveys.</p>

          <p>The information we may collect includes, among others:</p>

          <ul>
            <li>Contact information, such as your name and email.</li>
            <li>Service usage information, such as how you interact with our website or applications.</li>
          </ul>
          <br />
          <h3>2. Use of Information</h3>
          <p>We use the collected information to:</p>

          <ul>
            <li>Provide and maintain our Services.</li>
            <li>Send communications, including updates and promotions.</li>
            <li>Comply with legal obligations and resolve disputes.</li>
            <li>Personalize and enhance the user experience.</li>
          </ul>
          <br />
          <h3>3. Sharing Information</h3>
          <p>We do not share your personal information with third parties unless necessary to provide our Services or required by law.</p>
          <br />
          <h3>4. Cookies and Similar Technologies</h3>
          <p>We use cookies and similar technologies to improve the user experience and collect information about the usage of our Services.</p>
          <br />
          <h3>5. Security</h3>
          <p>We implement security measures to protect your personal information and take reasonable precautions to ensure its confidentiality.</p>
          <br />
          <h3>6. Changes to this Privacy Policy</h3>
          <p>We may update this Privacy Policy occasionally. We will notify you of significant changes by posting the new policy on this page.</p>
          <br />
          <h3>7. Contact</h3>
          <p>For any questions about this Privacy Policy, contact us at claudio.stuardo96@gmail.com.</p>

          <br /><br />
          <h4>Claudio Stuardo</h4>
          <h4>Santiago, Chile</h4>
          <h4>+569 88211728</h4>
          <h4>claudio.stuardo96@gmail.com</h4>

          <p>Date for last update: 04/02/2024</p>
        </article>
      )}
    </React.Fragment>
  );
};

export default Privacy;
