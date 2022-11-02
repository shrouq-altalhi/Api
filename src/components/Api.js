import React from "react";
import axios from "axios";
import { Grid } from "@chakra-ui/react";

function Api() {
    const url = "https://rickandmortyapi.com/api/character"
     
  const [state, setState] = React.useState([]);
  React.useEffect(() => {
    axios.get(url).then((res) => {
      //   console.log(res.data);
      setState(res.data.results);
    }, []);
  });
  return (
    <div>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {state.map((item) => {
          return (
            <>
              <img src={item.image} alt=""></img>
            </>
          );
        })}
      </Grid>
    </div>
  );
}

export default Api;
