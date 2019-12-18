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


// export const edit = spot => {
//   return $.ajax({
//     method: 'PATCH',
//     url: `/api/users/${spot.host.id}`,
//     data: { spot }
//   });
// };