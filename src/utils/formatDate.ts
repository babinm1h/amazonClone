import { format, parseISO } from "date-fns"


export const formatDate = (time: string) => {
    return format(parseISO(time), "MM.dd.yyyy").toString()
}