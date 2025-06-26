# Test Práctico Frontend CC

## Justificación de la Propuesta Visual y Funcional

### Análisis y oportunidades de mejora

- El flujo original no mostraba claramente los pasos ni la jerarquía de información.
- Acciones clave como agregar productos, crear nuevos items o guardar no estaban destacadas ni daban feedback inmediato.
- Faltaba feedback visual al guardar y accesibilidad en controles.

### Mejoras implementadas (Vista por vista)

#### Paso 1: Adjuntos, Comentario y Organización de Items

- **Barra de progreso tipo wizard:** El usuario ve claramente en qué paso está y cuántos faltan.
- **Botón "Nuevo Item":** Permite crear uno o más conjuntos/servicios dentro del presupuesto.
- **Lista de Items:** Cada item aparece en una lista editable, con controles para seleccionar, eliminar o vaciar.
- **Adjuntos y comentario:** Se pueden adjuntar imágenes y agregar comentarios específicos para cada item.

#### Paso 2: Agregar Productos al Item

- **Selección de Item activo:** El usuario debe seleccionar un item antes de agregar productos.
- **Botón "+ Productos":** Abre un modal de búsqueda para agregar productos de a uno al item seleccionado.
- **Tabla de productos:** Muestra los productos agregados, con controles para eliminar o modificar cantidades.
- **Feedback inmediato:** Mensajes claros si no hay productos y navegación guiada entre pasos.

#### Paso 3: Resumen y Guardado

- **Resumen detallado:** Tabla con todos los productos del item activo y totales destacados.
- **Botón "Guardar":** Guarda el presupuesto completo, mostrando animación moderna (spinner y toast).
- **Botón "Volver":** Permite regresar y editar antes de finalizar.

### Creatividad visual y SCSS

- Uso de SCSS para estilos modernos, botones circulares y toasts animados.
- Diseño limpio, jerárquico y consistente en toda la app.

### Funcionalidad Angular

- Implementación en Angular 20, usando componentes, bindings y eventos.
- Botones de agregar productos, crear items y guardar completamente funcionales.

### Resumen de mejoras clave

- **Claridad:** Wizard de pasos y agrupación lógica.
- **Usabilidad:** Botones destacados, feedback inmediato, acciones claras.
- **Eficiencia:** Menos clics, navegación guiada, acciones rápidas.
- **Accesibilidad:** Etiquetas, ARIA, estados claros.
- **Visual:** Diseño moderno, limpio y consistente.

---

**Conclusión:**  
La propuesta mejora la claridad, usabilidad y eficiencia del flujo de creación de presupuestos, aplicando buenas prácticas de UX/UI y desarrollo frontend moderno con Angular y SCSS. El feedback visual y los controles accesibles aseguran una experiencia satisfactoria y profesional.

---

## Parte 2 – Análisis Crítico

### Análisis de la imagen (ANEXO 1)

#### Errores visuales, de jerarquía o experiencia detectados

- **Jerarquía visual poco clara:** El mensaje de notificación al dueño del vehículo se mezcla visualmente con los mensajes internos del chat.
- **Distinción insuficiente entre tipos de mensajes:** Falta diferenciación visual (color, icono, fondo) para identificar rápidamente el origen y el tipo de mensaje.
- **Botones de acción poco visibles:** Los botones para agregar imágenes, trabajos y eventos no destacan ni tienen etiquetas claras.
- **Lista horizontal de usuarios/trabajos poco explicativa:** Faltan títulos, etiquetas o tooltips para orientar al usuario.
- **Espaciado y agrupación:** Los mensajes están muy juntos y no hay suficiente separación entre conversaciones, notificaciones y acciones.
- **Accesibilidad:** No se observan indicadores de foco o accesibilidad para usuarios con teclado o lectores de pantalla.

### Funcionalidades o mejoras que implementaría

- **Separación y estilos para tipos de mensajes:** Aplicaría estilos diferenciados para mensajes del sistema, notificaciones al cliente y mensajes internos.
- **Encabezado claro para la lista de trabajos:** Agregaría un título o tooltip sobre la lista horizontal de trabajos.
- **Mejorar la visibilidad de los botones de acción:** Botones más grandes, con iconos claros y etiquetas de texto, agrupados en una barra de acciones fija y accesible.
- **Separación visual y agrupación:** Más espacio entre mensajes y notificaciones, usando líneas divisorias o agrupadores.
- **Feedback y estados:** Indicadores de entrega/lectura de mensajes, estados de conexión y feedback visual al enviar archivos o eventos.
- **Accesibilidad:** Mejor soporte para navegación por teclado, etiquetas ARIA y contraste suficiente.

---

**En resumen:**  
La interfaz puede mejorar mucho en claridad, jerarquía visual y usabilidad diferenciando tipos de mensajes, haciendo más visibles las acciones principales y guiando mejor al usuario sobre el contexto y las funcionalidades disponibles.

---

_Las capturas de pantalla se incluyen a continuación para ilustrar cada vista y mejora propuesta._
