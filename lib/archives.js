import axios from "axios";

const archivesOrg = async () => {
  const {data} = await axios.get('https://archive.org/metadata/TheAdventuresOfTomSawyer_201303');

  return data;
}

export default archivesOrg;
