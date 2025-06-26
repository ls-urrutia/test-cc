# Test Práctico Frontend CC

## Justificación de la Propuesta Visual y Funcional

### Análisis y oportunidades de mejora

- El flujo original no mostraba claramente los pasos ni la jerarquía de información. (se analiza desde que se abre la ventan de presupuesto)
- Acciones clave como agregar productos, crear nuevos items o guardar no estaban destacadas ni daban feedback inmediato (se agregaba a los items productos uno por uno, por ejemplo.
- Faltaba feedback visual al guardar (alerts) y accesibilidad en controles.

### Mejoras implementadas (Vista por vista)

#### Paso 1: Adjuntos, Comentario y Organización de Items
- **Barra de progreso tipo wizard:** El usuario ve claramente en qué paso está y cuántos faltan.
 
![image](https://github.com/user-attachments/assets/1c9622ca-26c5-4c8b-9e0b-d6a708aa7a50)

- **Botón "Nuevo Item":** Permite crear uno o más conjuntos/servicios dentro del presupuesto.

  ![image](https://github.com/user-attachments/assets/a6ed47bb-c06b-44fc-b854-a097db1ad0a8)}

Por lo que entendi-asumí en el video cada servicio cuenta con diferentes items de productos. Sin embargo, la posibilidad de agregar un comentario e imagen aparecer después de presionar '+Items' pero aún asi despues de agregar un producto al parecer puedo poner otro Item pero no se genera un nuevo comentario e imagen por lo que veo, esto me resultó confuso por lo que asumí que cada presupuesto tendrá un único comentario e imagen(es). El hecho de que la interfaz cambie y además presente diferente información cuando volvemos de agregar un producto, por ejemplo, resulta confuso.

- **Lista de Items:** Cada item aparece en una lista editable, con controles para seleccionar, eliminar o vaciar. 

  ![image](https://github.com/user-attachments/assets/8904e873-3143-4a74-a653-29e1cab3699b)

- **Adjuntos y comentario:** Se pueden adjuntar imágenes (de forma mucho más ilustrativa) y agregar comentarios, junto al boton para vaciar.

 ![image](https://github.com/user-attachments/assets/5c2b3e07-38b4-4dd8-859f-1174e97cd029)

 
- **Resumen del presupuesto:** Información relevante que va cambiando constantemente para ver como va cambiando el presupuesto en tiempo real, cuantos items y productos llevamos. Tambien el boton de "Limpiar Presupuesto que reinicia todo" con una advertencia por si acaso se apreto por error. Y el boton de Guardar es simulación.
  
![image](https://github.com/user-attachments/assets/fb179c30-9b05-4e27-956e-ded087d20f8c)


![image](https://github.com/user-attachments/assets/89005905-d62b-46b6-bb7a-151428c0503e)

  
#### Paso 2: Agregar Productos al Item
- **Selección de Item activo:** El usuario debe seleccionar un item antes de agregar productos y después de esto igual podra tener una previsualización mínima de estos para rápida lectura.
- **Botón "+ Productos":** Si no tiene productos aún, indica el boton a presionar y se abre un modal de búsqueda para agregar productos de a uno al item seleccionado.

   ![image](https://github.com/user-attachments/assets/c7f6f65a-a35f-4dd8-ad19-aad02543d2bb)

- **Tabla para buscar productos:** Tabla con guia visual y opcion de filtros personalizados. Tambien tiene interfaz interactiva con el puntero (hover). Se conservo algunas cosas del flujo original como cantidad de items por pagina.

  ![image](https://github.com/user-attachments/assets/f2083e33-3daa-421c-a5d5-1334e02c08ec)


- **Tabla de productos:** Muestra los productos agregados, con controles para eliminar o modificar cantidades.

  ![image](https://github.com/user-attachments/assets/91250846-2327-43b2-956c-f7db349edc13)

- **Feedback inmediato:** Mensajes claros si no hay productos y navegación guiada entre pasos (ademas de bloquear boton Siguiente si no se ha llevado a cabo lo necesario).

#### Paso 3: Resumen y Guardado
- **Resumen detallado:** Tabla con todos los productos del item activo y totales destacados.

  ![image](https://github.com/user-attachments/assets/ac1616c7-41a2-475f-9689-ef8338a5b543)

- **Botón "Guardar":** Guarda el presupuesto completo, mostrando animación moderna (spinner y toast).

   ![image](https://github.com/user-attachments/assets/657062e6-a4bc-4162-ae48-4bd479fcd90d)

  ![image](https://github.com/user-attachments/assets/42be5738-ffaa-4a29-93fc-49e162d06cc3)


- **Botón "Volver":** Permite regresar y editar antes de finalizar.

### Creatividad visual y SCSS

- Uso de SCSS para estilos modernos, botones circulares y toasts animados. Hace la experiencia más dinámica y profesional.
- Diseño limpio, jerárquico y consistente en toda la app (más claridad y circularidad en el flujo)

### Funcionalidad Angular

- Implementación en Angular 20, usando componentes, bindings y eventos.
- Botones de agregar productos, crear items y guardar completamente funcionales (en lo que es la simulación, ya que es desde la parte del presupuesto y se uso una base de datos ficticia con los mismos recursos que otorga angular, solo para fines demostrativos de la prueba técnica).

### Resumen de mejoras clave

- **Claridad:** Wizard de pasos y agrupación lógica.
- **Usabilidad:** Botones destacados, feedback inmediato, acciones claras.
- **Eficiencia:** Menos clics, navegación guiada, acciones rápidas.
- **Accesibilidad:** Etiquetas, ARIA, estados claros.
- **Visual:** Diseño moderno, limpio y consistente.

---

**Conclusión:**  
La propuesta mejora la claridad, usabilidad y eficiencia del flujo de creación de presupuestos, aplicando buenas prácticas de UX/UI y desarrollo frontend moderno con Angular y SCSS.

---

## Parte 2 – Análisis Crítico

### Análisis de la imagen (ANEXO 1)

#### Errores visuales, de jerarquía o experiencia detectados

- **Jerarquía visual poco clara:** El mensaje de notificación al dueño del vehículo se mezcla visualmente con los mensajes internos del chat, hay una superposición. (Se podría crear una especie de icono con mensajes pendientes o notificación consistente en un icono que resuma ese mensaje predeterminado, por ejemplo, por decir una idea, un icono de vehiculo y ticket verde, o algo que represente la sucursal con la misma idea, dando la idea de que el vehiculo esta donde debe estar).
- **Distinción insuficiente entre tipos de mensajes:** Falta diferenciación visual (color, icono, fondo) para identificar rápidamente el origen y el tipo de mensaje.
- **Botones de acción poco visibles:** Los botones para agregar imágenes, trabajos y eventos no destacan ni tienen etiquetas claras.
- **Lista horizontal de usuarios/trabajos poco explicativa:** Faltan títulos, etiquetas o tooltips para orientar al usuario. Da la sensación de tener todo muy plano.

### Funcionalidades o mejoras que implementaría

- **Separación y estilos para tipos de mensajes:** Aplicaría estilos diferenciados para mensajes del sistema, notificaciones al cliente y mensajes internos  (como el ejemplo que puse arriba).
- **Encabezado claro para la lista de trabajos:** Agregaría un título o tooltip sobre la lista horizontal de trabajo. Básicamente que no haya que explicarlo como sale en el texto del pdf abajo de 'ANEXO 1'.
- **Mejorar la visibilidad de los botones de acción:** Botones más grandes, con iconos claros y etiquetas de texto, agrupados en una barra de acciones fija y accesible. Ya pasado un tiempo obviamente se sabe que hace cada cosa pero hay que pensarlo de modo que lo entienda un usuario nuevo sin tanta explicación, de forma intuitiva.
- **Separación visual y agrupación:** Más espacio entre mensajes y notificaciones, usando líneas divisorias o agrupadores.
- **Feedback y estados:** Indicadores de entrega/lectura de mensajes, estados de conexión y feedback visual al enviar archivos o eventos.

---

**En resumen:**  
La interfaz puede mejorar mucho en claridad, jerarquía visual y usabilidad diferenciando tipos de mensajes, haciendo más visibles las acciones principales y guiando mejor al usuario sobre el contexto y las funcionalidades disponibles.

 
