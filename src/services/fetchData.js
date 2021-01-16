export const fetchData = (url, onSuccess, onError) => {
  fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return onError('error');
  })
    .then((responseJson) => {
      onSuccess(responseJson);
    })
    .catch((error) => {
      onError(error);
    });
};

export default fetchData;
