import { useCallback, useState, useEffect } from "react";
import axios from "axios";
import "./DatabaseExample.css";
import { Card, Box, Typography, Button, TextField } from "@material-ui/core";
import TableComponent from '../Table/TableComponent'

const MainComponent = () => {
  const [values, setValues] = useState([]);
  const [value, setValue] = useState("");

  const getAllNumbers = useCallback(async () => {
    // we will use nginx to redirect it to the proper URL
    const data = await axios.get("/api/values/all");
    setValues(data.data.rows.map(row => row.number));
  }, []);

  const saveNumber = useCallback(
    async event => {
      event.preventDefault();

      await axios.post("/api/values", {
        value
      });

      setValue("");
      getAllNumbers();
    },
    [value, getAllNumbers]
  );

  useEffect(() => {
    getAllNumbers();
  }, []);

  return (
    <Box sx={{ padding: '30px' }}>
      <Card style={{ padding: '30px' }}>
        <Typography sx={{ fontSize: 28 }}>
          Basic PostresSQL Integration
        </Typography>
        <br />
        <Box
          component="form"
          onSubmit={saveNumber}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            value={value}
            onChange={event => {
              setValue(event.target.value);
            }}
            margin="normal"
            required
            fullWidth
            id="value"
            label="Value"
            name="value"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
        <TableComponent values={values} />
      </Card>
    </Box>
  );
};

export default MainComponent;
