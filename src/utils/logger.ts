import { format, parseISO } from "date-fns";
import pino from "pino";

const dateNow = new Date (Date.now()).toISOString();

const logger = pino({
  prettyPrint: {
    ignore: "pid,hostname"
  },
  timestamp: () => `,"time":"${format(parseISO(dateNow), "dd/MM/yyyy - HH:mm:ss")}"`
});

export { logger };
