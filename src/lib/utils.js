// Utilidad nativa para concatenar clases sin requerir dependencias externas
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
