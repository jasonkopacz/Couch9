export const edit = user => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    data: { user } 
  });
};

export const fetchUser = id => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  })
);


export const fetchUsers = () => (
  $.ajax({
    method: 'GET',
    url: `api/users/`
  })
);
