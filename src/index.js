function fetchBreeds() {
  return fetch(
    'https://api.thecatapi.com/v1/breeds?apiKey=live_uOaBgbBDRnjOQaHRhfDtAWgDCyLmbNQWgMDIXGo0dsPCesztzLKMTFMNPUyAVShl'
  ).then(res => console.log(res));
}
export { fetchBreeds };
