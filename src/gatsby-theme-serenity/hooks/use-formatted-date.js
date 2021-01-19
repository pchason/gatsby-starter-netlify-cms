import moment from "moment";

export default function useFormattedDate(date, format="DD-MM-YYYY") {
    //const d = new Date(date);
    //const m = moment(d).utc().format("YYYY-MM-DD HH:mm:ss"); // Added to alleviate netlify moment js warning.
    const dateFormatted = "test-string";//new Date(m).getFullYear();
    return dateFormatted;
}