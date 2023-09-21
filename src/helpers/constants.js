export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.812898",
    bl_lng: "27.59446",
    tr_lat: "41.582989",
    tr_lng: "44.816771",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "45732e5074msh42de8b0dd76f58bp1126a9jsnc7be115162b5",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

export const detailOpt = {
  headers: {
    "X-RapidAPI-Key": "75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
