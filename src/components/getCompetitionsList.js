export default function getCompetitionsList(
  path,
  setLoading,
  setData,
) {
  const URL = `http://api.football-data.org/v2/${path}`;
  setLoading(true);
  fetch(
    URL,
    { headers: { 'X-Auth-Token': '93293562f68f4353b70fb12b5c8de492' } },
  )
    .then((response) => response.json())
    .then((response) => {
      if (response.errorCode) {
        setData(response);
        console.log(response);
      } else {
        if ('competitions' in response) {
          setData(response.competitions);
        }
        if ('teams' in response) {
          setData(response.teams);
        }
      }
    })
    .finally(() => {
      setLoading(false);
    });
}