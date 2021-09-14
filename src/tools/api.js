const API_URL = `https://opendata.paris.fr/api/v2/`;

export const SEARCH_EVENTS =
    API_URL + `catalog/datasets/que-faire-a-paris-/records/?&sort=updated_at&search=`;

export const GET_EVENT_BY_ID =
    API_URL + "catalog/datasets/que-faire-a-paris-/records/";

export const GET_LAST_EVENT =
    API_URL +
    "catalog/datasets/que-faire-a-paris-/records/?&rows=1&sort=-updated_at";