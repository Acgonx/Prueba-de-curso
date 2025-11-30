
import React from 'react';
import type { Lesson } from './types';

export const COURSE_LESSONS: Lesson[] = [
  {
    id: 1,
    title: 'Lección 1: ¿Qué es la IA?',
    content: (
      <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">¡Bienvenido a tu Aventura en la Inteligencia Artificial!</h2>
        <p>
          Imagina que tienes un ayudante muy listo que puede aprender, razonar y ayudarte con las tareas. Eso, en esencia, es la <strong>Inteligencia Artificial (IA)</strong>. No se trata de robots de películas, sino de programas de computadora diseñados para realizar tareas que normalmente requieren inteligencia humana.
        </p>
        <div className="p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Una analogía simple:</h3>
          <p>
            Piensa en la IA como un estudiante muy aplicado. Al principio, no sabe nada. Pero si le das muchos libros (datos), puede aprender a reconocer patrones, tomar decisiones e incluso responder preguntas. Por ejemplo, si le muestras miles de fotos de gatos, aprenderá a reconocer un gato en una foto nueva.
          </p>
        </div>
        <h3 className="text-2xl font-bold text-blue-800 mt-6">Tipos de IA que vemos hoy:</h3>
        <ul className="list-disc list-inside space-y-3 pl-4">
          <li><strong>Asistentes de voz:</strong> Como Siri o Alexa, que entienden lo que dices y te ayudan a buscar información o poner una alarma.</li>
          <li><strong>Recomendaciones:</strong> Cuando Netflix te sugiere una película o Amazon un producto, es la IA analizando tus gustos.</li>
          <li><strong>Mapas y GPS:</strong> Google Maps usa IA para encontrar la ruta más rápida, teniendo en cuenta el tráfico en tiempo real.</li>
        </ul>
        <p>
          La IA ya es parte de nuestro día a día, ¡y este curso te ayudará a entenderla mejor sin complicaciones!
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Lección 2: La IA en tu vida diaria',
    content: (
       <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Descubriendo la IA a tu Alrededor</h2>
        <p>
          Quizás te sorprenda saber con qué frecuencia interactúas con la Inteligencia Artificial sin darte cuenta. No es algo del futuro, ¡está aquí y ahora, haciendo nuestra vida más fácil!
        </p>
        <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-green-50 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-green-900 mb-2">En tu Teléfono Inteligente</h3>
                <p>Tu móvil es un centro de IA. Desde el desbloqueo facial, que reconoce tu cara, hasta el autocorrector que adivina lo que quieres escribir.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-green-900 mb-2">En el Correo Electrónico</h3>
                <p>¿Has notado cómo tu correo clasifica los mensajes no deseados (spam)? Es una IA que aprendió a distinguir los correos importantes de la publicidad.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-green-900 mb-2">Al hacer Compras Online</h3>
                <p>Las tiendas en línea te muestran "productos que también te podrían gustar". Esta es la IA trabajando para personalizar tu experiencia de compra.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-green-900 mb-2">En las Redes Sociales</h3>
                <p>Facebook o Instagram deciden qué mostrarte primero en tu feed basándose en lo que la IA cree que te resultará más interesante.</p>
            </div>
        </div>
        <p className="mt-6 p-6 bg-green-100 border-l-4 border-green-500 rounded-r-lg">
          Como puedes ver, la IA es una herramienta poderosa que funciona "detrás de cámaras" en muchas de las tecnologías que usamos a diario. Su objetivo principal es hacer que estas herramientas sean más inteligentes, útiles y personalizadas para ti.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Lección 3: Usar la IA de forma segura',
    content: (
      <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
        <h2 className="text-3xl font-bold text-red-800 mb-4">Navegando el Mundo Digital con Cuidado</h2>
        <p>
          La Inteligencia Artificial es una herramienta fantástica, pero como cualquier tecnología, es importante usarla con precaución y proteger nuestra información personal.
        </p>
        <h3 className="text-2xl font-bold text-red-800 mt-6">Consejos Clave para tu Seguridad:</h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-red-500 font-bold text-2xl mr-3 mt-1">&#10003;</span>
            <div>
              <strong>Piensa antes de compartir.</strong> En redes sociales o con chatbots, evita dar información muy personal como tu dirección, número de teléfono, o detalles financieros.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 font-bold text-2xl mr-3 mt-1">&#10003;</span>
            <div>
              <strong>Desconfía de los correos extraños.</strong> La IA también puede ser usada para crear correos falsos (phishing) que parecen muy reales. Si un correo te pide contraseñas o datos bancarios, es mejor no hacer clic y borrarlo.
            </div>
          </li>
          <li className="flex items-start">
             <span className="text-red-500 font-bold text-2xl mr-3 mt-1">&#10003;</span>
            <div>
              <strong>Revisa la configuración de privacidad.</strong> En aplicaciones y redes sociales, puedes decidir qué información compartes. Tómate un momento para revisar estas opciones.
            </div>
          </li>
        </ul>
        <div className="mt-6 p-6 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
          <h3 className="text-xl font-semibold text-red-900 mb-2">Una Regla de Oro:</h3>
          <p>
            Si algo parece demasiado bueno para ser verdad, o te genera desconfianza, lo más seguro es ser cauteloso. Tu intuición es una gran herramienta de seguridad.
          </p>
        </div>
        <p>
          Usar la IA de forma segura significa disfrutar de sus beneficios mientras protegemos lo más importante: nuestra privacidad y bienestar.
        </p>
      </div>
    ),
  },
];
