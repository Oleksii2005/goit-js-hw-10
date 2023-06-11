// export function fetchBreeds(el) {
//   const searchQuery = el.currentTarget.elements.query.value;
//   const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${searchQuery}`;
//   const apiKey =
//     'live_uOaBgbBDRnjOQaHRhfDtAWgDCyLmbNQWgMDIXGo0dsPCesztzLKMTFMNPUyAVShl';
//   return fetch(url, {
//     headers: {
//       'x-api-key': apiKey,
//     },
//   })
//     .then(res => {
//       if (!res.ok) {
//         throw new Error('Error fetching breeds');
//       } else {
//       }
//       return res.json();
//     })
//     .then(data => {
//       return data.map(breed => ({
//         id: breed.id,
//         name: breed.name,
//       }));
//     });
// }
// live_uOaBgbBDRnjOQaHRhfDtAWgDCyLmbNQWgMDIXGo0dsPCesztzLKMTFMNPUyAVShl

// cat-api.js

const API_KEY =
  'live_uOaBgbBDRnjOQaHRhfDtAWgDCyLmbNQWgMDIXGo0dsPCesztzLKMTFMNPUyAVShl';

function fetchBreeds() {
  const url = `https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`;
  return fetch(url).then(res => res.json());
}

function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&breed_ids=${breedId}`;
  return fetch(url).then(res => res.json());
}
export { fetchBreeds, fetchCatByBreed };
