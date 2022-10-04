import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const FormsApp = () => {
  const [valorProduto, setValorProduto] = useState(0);
  const [valorEntrada, setValorEntrada] = useState(0);

  const onChangeValorProduto = (evt: any) => {
    setValorProduto(evt.target.value);
  };
  const onChangeValorEntrada = (evt: any) => {
    setValorEntrada(evt.target.value);
  };

  const valorPrazo = valorProduto - valorEntrada;
  const lancarVenda = () => {};

  return (
    <>
      <Container maxWidth="sm" className="container">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          marginTop="15px"
          sx={{ bgcolor: "#cfe8fc", height: "100vh" }}
        >
          <h1>Simulador de Parcelas</h1>

          <TextField
            className="form"
            id="outlined-number"
            label="Valor do Produto"
            name="valorProduto"
            onChange={onChangeValorProduto}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            className="form"
            id="outlined-number"
            label="Valor de Entrada"
            type="number"
            name="valorEntrada"
            onChange={onChangeValorEntrada}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <Divider />
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell>Parcela</TableCell>
                  <TableCell>Valor da Parcela</TableCell>
                  <TableCell>Total</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>A vista</TableCell>
                  <TableCell>Pix ou dinheiro</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1x</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3x</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>4x</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>5x</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>6x</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>7x</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>8x</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>9x</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>10x</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>11x</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>12x</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>13x</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>14x</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>15x</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>16x</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>17x</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>18x</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                  <TableCell>R${valorPrazo}</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </>
  );
};
export default FormsApp;
