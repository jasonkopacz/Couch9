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

export const update = (id, data) => {
    return $.ajax({
      method: 'PATCH',
      url: `/api/spots/${id}`,
      data: { data },
    });
};

export const fetchAllSpots = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/spots`
  });
};