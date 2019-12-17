export const create = spot => (
  $.ajax({
    method: 'POST',
    url: `/api/users/${spot.host_id}`,
    data: { spot }
  })
);

// export const edit = spot => {
//   return $.ajax({
//     method: 'PATCH',
//     url: `/api/users/${spot.host.id}`,
//     data: { spot }
//   });
// };