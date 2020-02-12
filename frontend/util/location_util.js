export const getData = (search) => {
    return $.ajax({
      method: 'GET',
      url: `api/search/`,
      dataType: "json",
      data: `q=${search}`
    });
  };
  