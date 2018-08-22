export function showImage(url, details) {

  return {
    type: 'SHOW_IMAGE',
    payload: {
      url,
      details,
    }
  };
}

export function hideImage() {

  return {
    type: 'HIDE_IMAGE',
    payload: {
      url: null,
      details: null
    }
  };
}
