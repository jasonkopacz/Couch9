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

export const getData = (search) => {
  return $.ajax({
    method: 'GET',
    url: `api/search/`,
    dataType: "json",
    data: `q=${search}`
  });
};


// export const edit = spot => {
//   return $.ajax({
//     method: 'PATCH',
//     url: `/api/users/${spot.host.id}`,
//     data: { spot }
//   });
// };