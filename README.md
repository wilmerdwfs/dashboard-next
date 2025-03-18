<li>📥 Descargar y Levantar el Servidor</li>
<li>git clone &lt;URL_DEL_REPOSITORIO&gt;</li>
<li>cd dashboard-next</li>
<li>npm install</li>
<li>npm run dev</li>

<li>📊 Implementación de Google Analytics</li>
<li>Google Analytics se ha integrado en los siguientes componentes:</li>
<li>TopFilter</li>
<li>TopBarMedioFilter</li>

<li>📌 Librería utilizada</li>
<li>Se ha utilizado la librería react-ga4 para la integración.</li>
<li>npm install react-ga4</li>

<li>📝 Explicación de la Implementación</li>
<li>La integración de Google Analytics en estos filtros tiene como objetivo analizar el comportamiento del usuario vendedor.</li>
<li>En el TopFilter, se rastrea cuál es el interés de los vendedores en ciertas categorías según la cantidad de clics en cada botón.</li>
<li>Esto permite evaluar patrones de venta y su impacto psicológico para tomar decisiones estratégicas.</li>
<li>En el TopBarMedioFilter, se aplica la misma lógica para analizar los días en los que los vendedores están más activos.</li>

<li>🔍 Cómo Ver los Eventos en Google Analytics</li>
<li>Abre el código de los componentes TopFilter o TopBarMedioFilter.</li>
<li>Reemplaza el valor de la constante GA_TRACKING_ID con tu ID de Google Analytics.</li>
<li>const GA_TRACKING_ID = "G-XXXXXXXXXX"; // Reemplázalo con tu ID</li>
<li>Abre tu cuenta de Google Analytics.</li>
<li>Dirígete a "Informes → Eventos en tiempo real" para ver los registros en vivo.</li>
<li>Para un análisis más detallado, accede a "Exploraciones → Eventos personalizados".</li>

<li>✅ ¡Listo para monitorear tus datos!</li>
<li>Con esta implementación, ahora puedes analizar el comportamiento de los usuarios en tiempo real y tomar decisiones basadas en datos.</li>
