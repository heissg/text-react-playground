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
    <div style= { { fontFamily: 'Arial, Verdana, Calibri' }}>
      <p style= { { color: 'blue' }}>Gunters React UI Test with MUI</p>
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
      <br/>
      <br/>
      <ul>Ziele<br/><br/>
        <li>Beim Contact das blaue Symbol ist die Uniserv Suche, evtl. mit Mouse Over anzeigen, oder spezielles Uniserv-Symbol verwenden?</li>
        <li>Ein Klick auf die Lupe öffnet die CRM Suchhilfe mit einem von uns bestimmten Default View, der Default View ist fix hinterlegt</li>
        <li>Mit einem Mouse Over offenbart sich ein Lösch Button, mit dem man die EIngabe löschen kann</li>
        <li>In die Text-Box kann man einen Key, Nummer oder einen sonstigen String eingeben.</li>
            <ul>
                <li>Beim verlassen der Input-Box (OnBlur) wird über die WebApi eine Suche gestartet.</li>
                <li>Wird ein Treffer gefunden, dann wird das Namens-Feld aus CRM in der Text-Box angezeigt.</li>
                <li>Wird kein Treffer gefunden, dann wird der Input gelöscht</li>
                <li>Werden mehrere Treffer gefunden, dann öffnet sich die Suchhilfe mit der vorausgefüllten Suchzeile</li>
          </ul>
        
        <li>Unterhalb der Suchhilfe werden, wenn ein Wert gefunden wird, vordefinierte Details (max 2 oder 3 Felder) unterhalb angezeigt, bei einer PSN z.B. ContactNumber und statecode, bei einer Kampagnenaktivit"t zum Beispiel Short Name, Kez und Valid-From/Until</li>
        <li>Die Schriftart im Input-Element ist Schwarz, erst beim Mouse-Over offenbart sich eine blaue unterstrichene Schrift, die angeklickt das Element in einem neuen Fenster im CRM öffnet </li>
        <li>Ein Mussfeld wird mit einem roten Stern links markiert</li>
        <li>Schlägt eine Mussfeldprüfiung fehl, dann wird der Rahmen um das Input-Feld rot</li>
      </ul>
    </div>
  );
}
