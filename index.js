import http from 'http';

const getData = async (count) => {
  console.log('https://www.swapi.tech/api/planets?page=' + count + '&limit=10');
  const response = await fetch(
    'https://www.swapi.tech/api/planets?page=' + count + '&limit=10',
  );
  return response.json();
};

const server = http.createServer((req, res) => {
  // console.log(req);
  //console.log(req.url);
  const arrayPromises = [1, 2, 3, 4, 5].map((page) => {
    return getData(page);
  });
  let displayPlanets = '';
  Promise.all(arrayPromises).then((values) => {
    console.log(values);
    values.forEach((item) => {
      console.log(item);
      item.results.forEach((planet) => {
        displayPlanets += planet.name;
      });
    });
    res.writeHead(201, 'ok');
    res.end(displayPlanets);
  });
});

server.listen(8080, () => {
  console.log('connecté !');
});
