import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = ['Piscine', 'Selezioni Superate', 'Inizio del Percorso'];

export default function Stepper42RomaLuiss() {
  return (
    <div style={{ width: '100%', maxWidth: 400, margin: '2rem auto' }}>
      <Stepper activeStep={-1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label} completed={false}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
} 