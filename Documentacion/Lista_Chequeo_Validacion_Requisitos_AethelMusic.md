# Lista de Chequeo para Validación de Requisitos
## Proyecto: Aethel Music

**Versión:** 1.0  
**Fecha de aplicación:** 10/11/2026  
**Elaborado por:** Equipo Aethel Music  

**Nota:** Se aplicó la lista de chequeo a un conjunto representativo de requisitos (funcionales, no funcionales y de interfaz) del proyecto Aethel Music. No todos los ítems obtienen “SI” de forma automática; se documentan observaciones reales.

---

## 1. Correctitud y Claridad

| Criterio | RF-001 (Cargar archivo) | RF-042 (Crear MIX) | RNF-008 (Carga < 3 s) | Observaciones |
|----------|--------------------------|---------------------|------------------------|---------------|
| ¿Es unívoco? | SI | SI | SI | Los requisitos tienen una interpretación clara. |
| ¿Evita ambigüedades? | SI | SI | SI | Se eliminaron términos vagos. RNF-008 es cuantificable. |
| ¿Gramática y consistencia? | SI | SI | SI | Redacción clara y uso consistente de términos. |

**Resultado general:** Cumple.

---

## 2. Completitud

| Criterio | RF-001 | RF-027 (Eliminar canción) | RF-045 (Compartir) | Observaciones |
|----------|--------|---------------------------|---------------------|---------------|
| ¿Está toda la información? | SI | SI | SI | Incluyen condiciones y reglas necesarias. |
| ¿Sin cabos sueltos (TBD)? | SI | SI | SI | No hay notas pendientes. |
| ¿Cubre escenarios negativos? | SI | SI | SI | Todos tienen escenarios de error o casos límite en las historias de usuario. |

**Resultado general:** Cumple.

---

## 3. Viabilidad y Factibilidad Técnicas

| Criterio | RF-032 (Menú DJ) | RNF-015 (Offline) | RF-050 (Subir a nube) | Observaciones |
|----------|------------------|-------------------|-----------------------|---------------|
| ¿Es realizable? | SI | SI | SI | Tecnología y habilidades disponibles. |
| ¿Respeta las restricciones? | SI | SI | SI | Compatible con la arquitectura planteada. |

**Resultado general:** Cumple.

---

## 4. Verificabilidad y Pruebas (Testabilidad)

| Criterio | RF-014 (Shuffle) | RNF-016 (Reproducción < 1 s) | RI-021 (Feedback visual) | Observaciones |
|----------|------------------|------------------------------|--------------------------|---------------|
| ¿Se puede probar? | SI | SI | SI | Existen criterios de aceptación claros. |
| ¿Tiene Criterios de Aceptación? | SI | Parcial | SI | Los RF tienen historias con escenarios. Los RNF tienen métricas, pero no historias formales. |
| ¿Métricas cuantificables? | N/A | SI | N/A | RNF-016 especifica “menos de 1 segundo”. |

**Resultado general:** Cumple en su mayoría.  
**Observación:** Los requisitos no funcionales tienen métricas, pero no están formalizados como historias de usuario (esto es aceptable).

---

## 5. Trazabilidad y Priorización

| Criterio | RF-001 | RF-042 | RNF-008 | Observaciones |
|----------|--------|--------|---------|---------------|
| ¿Aporta valor real? | SI | SI | SI | Alineados con los objetivos del producto. |
| ¿Tiene identificador único? | SI | SI | SI | Todos usan RF-, RNF- o RI-. |
| ¿Está priorizado? | NO | NO | NO | **No se ha aplicado priorización explícita** (MoSCoW u otra técnica). |

**Resultado general:** Cumple parcialmente.  
**Hallazgo:** Falta priorización formal de los requisitos.

---

## 6. Consistencia y No Redundancia

| Criterio | Evaluación general | Observaciones |
|----------|---------------------|---------------|
| ¿Sin conflictos? | SI | No se detectaron contradicciones entre requisitos. |
| ¿Es único? | SI | No hay duplicados ni solapamientos significativos. |

**Resultado general:** Cumple.

---

## Resumen de Hallazgos

| # | Hallazgo | Tipo | Recomendación |
|---|----------|------|---------------|
| 1 | Falta priorización explícita de los requisitos | Mejora | Aplicar MoSCoW o similar a los RF principales |
| 2 | Los RNF no tienen historias de usuario formales | Observación | Aceptable; se pueden documentar como criterios de aceptación adicionales si se desea |
| 3 | Documentos previos (requisitos + historias) están bien alineados | Fortaleza | Mantener la trazabilidad 1:1 |

---

## Matriz de Firmas y Cierre de Validación

| Rol | Responsabilidad | ¿Aprobado? | Observaciones |
|-----|------------------|------------|---------------|
| Product Owner / Cliente | Confirma que el requisito resuelve la necesidad de negocio | SI | Con la observación de priorización |
| Líder de Desarrollo / Arquitecto | Confirma viabilidad técnica | SI | — |
| QA / Líder de Testing | Confirma que es medible y se puede probar | SI | — |

**Conclusión de la validación:**  
Los requisitos de Aethel Music son **válidos y utilizables** para continuar con el diseño y desarrollo. Se recomienda incorporar priorización en una siguiente iteración del documento de requisitos.

---

**Fin del documento de validación**
