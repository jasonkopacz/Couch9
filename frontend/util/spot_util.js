export const create = spot => (
  $.ajax({
    method: 'POST',
    url: `/api/spots`,
    data: { spot }
  })
);

export const fetchSpot = id => (
  $.ajax({
    method: 'GET',
    url: `api/spots/${id}`
  })
);

// export const getData = (search) => {
//   return $.ajax({
//     method: 'GET',
//     url: `api/search/`,
//     dataType: "json",
//     data: `q=${search}`
//   });
// };


export const update = (id, data) => {
    return $.ajax({
      method: 'PATCH',
      url: `/api/spots/${id}`,
      data: { data },
    });
};