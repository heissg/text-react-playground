import * as React from 'react';
import './input.css';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import UniservButton from '@mui/icons-material/TravelExplore';

import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function CustomizedInputBase() {
  const tfStyle = {
    '& .MuiButtonBase-root.MuiAutocomplete-clearIndicator': {
      color: 'blue',
      visibility: 'visible',
    },
  };

  const iconTfHover = {
    '&:hover': {
      color: 'green',
      visibility: 'visible',
    },
  };

  return (
    <div>
      <div>
        <InputLabel className="inputblock">Contact</InputLabel>
        <Paper
          component="form"
          sx={{ p: '1px', display: 'flex', alignItems: 'center', width: 300 }}
        >
          <InputBase
            sx={{
              '&:hover': { color: 'blue', textDecoration: 'underline' },
              ml: 1,
              flex: 1,
            }}
            size="small"
            color="secondary"
            placeholder=""
            disabled={false}
            required
            inputProps={{ 'aria-label': 'search contact' }}
            variant="standard"
          ></InputBase>
          <IconButton
            type="button"
            sx={{ '&:hover': { color: 'grey' }, p: '5px', color: 'white' }}
            aria-label="clear"
          >
            <ClearIcon />
          </IconButton>
          <IconButton type="button" sx={{ p: '5px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton color="primary" sx={{ p: '5px' }} aria-label="directions">
            <UniservButton />
          </IconButton>
        </Paper>
        <FormHelperText>0345616233</FormHelperText>
      </div>

      <div style={{ marginTop: '15px' }}>
        <InputLabel className="inputblock">Campaignactivity</InputLabel>
        <Paper
          component="form"
          sx={{ p: '1px', display: 'flex', alignItems: 'center', width: 300 }}
        >
          <InputBase
            sx={{
              '&:hover': { color: 'blue', textDecoration: 'underline' },
              ml: 1,
              flex: 1,
            }}
            size="small"
            color="secondary"
            placeholder=""
            disabled={false}
            required
            inputProps={{ 'aria-label': 'search contact' }}
            variant="standard"
          />
          <IconButton
            type="button"
            sx={{ '&:hover': { color: 'grey' }, p: '5px', color: 'white' }}
            aria-label="clear"
          >
            <ClearIcon />
          </IconButton>
          <IconButton type="button" sx={{ p: '5px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <FormHelperText>
          3030, Allgemein, 21.02.2001 - 31.12.2999
        </FormHelperText>
      </div>
    </div>
  );
}
