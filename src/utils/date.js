import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function formatDate(date) {
    return format(parseISO(date), "dd/MM/yyyy HH:mm:ss", {
        locale: ptBR,
    })
}