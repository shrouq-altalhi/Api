import React from "react";
import axios from "axios";
import { Grid } from "@chakra-ui/react";

function Api() {
  const url = "https://fake-movie-database-api.herokuapp.com/api?s=batman";

  const [state, setState] = React.useState([]);
  React.useEffect(() => {
    axios.get(url).then((res) => {
      // console.log(res.data.Search);
      setState(res.data.Search);
    }, []);
  });
  return (
    <div>
      <Grid templateColumns="repeat(9, 1fr)" gap={6}>
        {state.map((item) => {
          return (
            <>
              <img src={item.Poster} alt=""></img>
            </>
          );
        })}
      </Grid>
    </div>
  );
}

export default Api;
