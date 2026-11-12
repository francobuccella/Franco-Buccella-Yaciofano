/** Reemplaza {clave} en un texto con los valores dados. Las claves que no existen quedan vacías. */
export function fillTemplate(template: string, vars: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(vars[key] ?? ""));
}

/** Número con separador de miles al estilo argentino (ej: 260.463). */
export const formatNumber = (value: number) => Math.round(value).toLocaleString("es-AR");
